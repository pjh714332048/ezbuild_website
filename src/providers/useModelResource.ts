import { useEffect, useState } from 'react';

export const useModelResource = (key: string, revision: number) => {
  const [result, setResult] = useState({ key: '', revision: -1, url: '', error: '' });

  useEffect(() => {
    const controller = new AbortController();
    const load = async () => {
      try {
        const base = (import.meta.env.VITE_API_BASE_URL || '/api/v1/').replace(/\/$/, '');
        const response = await fetch(
          `${base}/website/models/resource/?key=${encodeURIComponent(key)}`,
          {
            signal: controller.signal,
            cache: 'no-store',
          },
        );
        const body = await response.json();
        if (!response.ok) throw new Error(body.message || `HTTP ${response.status}`);
        if (typeof body.data?.url !== 'string' || !body.data.url) {
          throw new Error('Invalid model resource response');
        }
        if (!controller.signal.aborted) {
          setResult({ key, revision, url: body.data.url, error: '' });
        }
      } catch (cause) {
        if (!controller.signal.aborted) {
          setResult({
            key,
            revision,
            url: '',
            error: cause instanceof Error ? cause.message : 'Request failed',
          });
        }
      }
    };
    load();
    return () => controller.abort();
  }, [key, revision]);

  const current = result.key === key && result.revision === revision;
  return { url: current ? result.url : '', error: current ? result.error : '' };
};
