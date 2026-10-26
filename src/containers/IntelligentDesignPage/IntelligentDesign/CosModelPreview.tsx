import { Suspense, lazy, useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { useModelResource } from 'providers/useModelResource';
import { useTranslation } from 'providers/useTranslation';

const ModelRenderer = lazy(() => import('components/ModelRenderer'));

const CosModelPreview = ({ modelKey }: { readonly modelKey: string }) => {
  const [revision, setRevision] = useState(0);
  const { url, error } = useModelResource(modelKey, revision);
  const { language } = useTranslation();
  const loading = (
    <CircularProgress aria-label={language === 'en' ? 'Loading model' : '正在加载模型'} />
  );

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: '#f1f3f5' }}>
      <Box sx={{ flex: 1, minHeight: 0, display: 'grid', placeItems: 'center' }}>
        {error ? (
          <Typography role='alert' sx={{ p: 2, color: '#666' }}>
            {language === 'en'
              ? 'Unable to load the model. Please retry.'
              : '模型资源获取失败，请重试。'}
          </Typography>
        ) : url ? (
          <Suspense fallback={loading}>
            <ModelRenderer key={`${url}:${revision}`} src={url} height='100%' />
          </Suspense>
        ) : (
          loading
        )}
      </Box>
      <Button onClick={() => setRevision(previous => previous + 1)} disabled={!url && !error}>
        {language === 'en' ? 'Reload model' : '重新加载模型'}
      </Button>
    </Box>
  );
};

export default CosModelPreview;
