import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PageSubtitle from 'components/PageSubtitle';
import { useTranslation } from 'providers/useTranslation';

const IntelligentDesignTitle: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageSubtitle number='02' title={t('intelligentDesign.subtitle')} />
      <Grid container sx={{ width: '100%', mt: 3 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant='h2' sx={{ color: '#FFFFFF', fontWeight: 'bold' }}>
            {t('intelligentDesign.titleWhite')}
          </Typography>
          <Typography variant='h2' sx={{ fontWeight: 'bold' }}>
            <span style={{ color: '#FFFFFF' }}>{t('intelligentDesign.titleAccentWhite')}</span>
            <span style={{ color: '#E87722' }}>{t('intelligentDesign.titleAccent')}</span>
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 2 }} sx={{ display: { xs: 'none', md: 'block' } }} />
        <Grid size={{ xs: 12, md: 'grow' }} sx={{ textAlign: 'left', alignSelf: 'flex-end' }}>
          <Typography variant='body1' sx={{ color: '#FFFFFF94' }}>
            {t('intelligentDesign.description')}
          </Typography>

          {/* <Box>
          <Button
            endIcon={<ArrowForward />}
            sx={{
              color: 'white',
              fontSize: '1.1rem',
              textTransform: 'none',
              mt: 2,
            }}
          >
            查看全球项目
          </Button>
          <Box
            sx={{
              width: '100%',
              height: '1px',
              backgroundColor: '#FFFFFF80',
              mt: 0.5,
            }}
          />
        </Box> */}
        </Grid>
      </Grid>
    </>
  );
};

export default IntelligentDesignTitle;
