import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PageSubtitle from 'components/PageSubtitle';
import { useTranslation } from 'providers/useTranslation';

const ModulePlatformPageTitle: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageSubtitle number='04' title={t('products.modulePlatformSubtitle')} />

      <Grid container sx={{ width: '100%', mt: 3, rowGap: 2 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant='h2' sx={{ color: '#000000', fontWeight: 'bold' }}>
            {t('products.modulePlatformTitleLine1')}
          </Typography>
          <Typography variant='h2' sx={{ color: '#E87722', fontWeight: 'bold' }}>
            {t('products.modulePlatformTitleLine2')}
          </Typography>
        </Grid>
        <Grid size={{ md: 2 }} sx={{ display: { xs: 'none', md: 'block' } }}></Grid>
        <Grid
          size={{ xs: 12, md: 'grow' }}
          sx={{ textAlign: 'left', alignSelf: { xs: 'flex-start', md: 'flex-end' } }}
        >
          <Typography variant='body1' sx={{ color: '#637080' }}>
            {t('products.modulePlatformDescription')}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default ModulePlatformPageTitle;
