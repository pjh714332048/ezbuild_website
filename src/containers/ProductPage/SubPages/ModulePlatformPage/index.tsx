import Grid from '@mui/material/Grid';
import { useTranslation } from 'providers/useTranslation';

import ModulePlatformGridContent from './ModulePlatformGridContent';
import ModulePlatformGridImage from './ModulePlatformGridImage';
import ModulePlatformPageTitle from './ModulePlatformPageTitle';

const ModulePlatformPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <ModulePlatformPageTitle />
      <Grid container spacing={2} sx={{ width: '100%', mt: 5 }}>
        <Grid size={{ xs: 12, md: 4, lg: 'grow' }} sx={{ p: 2, background: '#FFFFFF' }}>
          <ModulePlatformGridImage badge='01' imageSrc='/module_platform_images/1.webp' />
          <ModulePlatformGridContent
            smallTitle='NOAH'
            title={t('products.noahTitle')}
            content={t('products.noahContent')}
            numberString='50%'
            numberDescription={t('products.noahNumberDescription')}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4, lg: 'grow' }} sx={{ p: 2, background: '#FFFFFF' }}>
          <ModulePlatformGridImage badge='02' imageSrc='/module_platform_images/2.webp' />
          <ModulePlatformGridContent
            smallTitle='HEMUDU'
            title={t('products.hemuduTitle')}
            content={t('products.hemuduContent')}
            numberString='20 - 30'
            numberDescription={t('products.hemuduNumberDescription')}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4, lg: 'grow' }} sx={{ p: 2, background: '#FFFFFF' }}>
          <ModulePlatformGridImage badge='03' imageSrc='/module_platform_images/3.webp' />
          <ModulePlatformGridContent
            smallTitle='PANDORA'
            title={t('products.pandoraTitle')}
            content={t('products.pandoraContent')}
            numberString='4×'
            numberDescription={t('products.pandoraNumberDescription')}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ModulePlatformPage;
