import { TRANSLATIONS } from 'models/locales';
import { useAppSelector } from 'store/hooks';
import { selectLanguage } from 'store/slices/locale/selectors';

type TranslationMap = (typeof TRANSLATIONS)['zh'];

type DotPrefix<T extends string> = T extends `${infer A}.${infer B}`
  ? A | `${A}.${DotPrefix<B>}`
  : T;

type TranslationKeys = DotPrefix<
  {
    [K in keyof TranslationMap]: TranslationMap[K] extends object
      ? {
          [J in keyof TranslationMap[K]]: TranslationMap[K][J] extends object
            ? `${string & K}.${string & J}.${string & keyof TranslationMap[K][J]}`
            : `${string & K}.${string & J}`;
        }[keyof TranslationMap[K]]
      : string;
  }[keyof TranslationMap]
>;

const getNestedValue = (obj: Record<string, unknown>, path: string): string | undefined => {
  const keys = path.split('.');
  let current: unknown = obj;
  for (const key of keys) {
    if (current == null || typeof current !== 'object') return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return typeof current === 'string' ? current : undefined;
};

export const useTranslation = () => {
  const language = useAppSelector(selectLanguage);

  const t = (key: TranslationKeys): string => {
    const currentTranslations = TRANSLATIONS[language] as unknown as Record<string, unknown>;
    const result = getNestedValue(currentTranslations, key);
    if (result !== undefined) return result;

    if (language !== 'zh') {
      const fallbackTranslations = TRANSLATIONS.zh as unknown as Record<string, unknown>;
      const fallbackResult = getNestedValue(fallbackTranslations, key);
      if (fallbackResult !== undefined) return fallbackResult;
    }

    return key;
  };

  return { t, language };
};
