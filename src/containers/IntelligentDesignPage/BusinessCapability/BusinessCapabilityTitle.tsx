import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PageSubtitle from 'components/PageSubtitle';
import { useTranslation } from 'providers/useTranslation';

const BusinessCapabilityTitle: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageSubtitle number='03' title={t('intelligentDesign.bcSubtitle')} />
      <Grid container sx={{ width: '100%', mt: 3 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant='h2' sx={{ color: '#FFFFFF' }}>
            <span style={{ color: '#FFFFFF', fontWeight: 'bold' }}>
              {t('intelligentDesign.bcTitleWhite')}
            </span>
            <span style={{ color: '#FF6B1A', fontWeight: 'bold' }}>
              {t('intelligentDesign.bcTitleAccent')}
            </span>
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 2 }} sx={{ display: { xs: 'none', md: 'block' } }} />
        <Grid size={{ xs: 12, md: 'grow' }} sx={{ textAlign: 'left', alignSelf: 'flex-end' }}>
          <Typography variant='body1' sx={{ color: '#FFFFFF94' }}>
            {t('intelligentDesign.bcDescription')}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default BusinessCapabilityTitle;
