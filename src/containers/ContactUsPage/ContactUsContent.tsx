import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PageSubtitle from 'components/PageSubtitle';
import { useTranslation } from 'providers/useTranslation';

import ContactGrid from './ContactGrid';

const ContactUsContent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageSubtitle
        number='10'
        title={t('contactUs.subtitle')}
        numberColor='#FFFFFFFF'
        titleColor='#FFFFFFFF'
      />
      <Grid container sx={{ my: 4 }}>
        <Grid size={{ xs: 12, md: 'grow', lg: 'grow' }}>
          <Typography
            variant='h1'
            sx={{
              color: '#FFFFFFFF',
              fontWeight: 'bold',
              fontSize: 'clamp(2.6667rem, 4.1667vw, 5rem)',
            }}
          >
            {t('contactUs.titleLine1')}
          </Typography>
          <Typography
            variant='h1'
            sx={{
              color: '#FFFFFFFF',
              fontWeight: 'bold',
              fontSize: 'clamp(2.6667rem, 4.1667vw, 5rem)',
            }}
          >
            <span>{t('contactUs.titleLine2White1')}</span>
            <span style={{ color: '#000000FF' }}>{t('contactUs.titleLine2Accent')}</span>
            <span>{t('contactUs.titleLine2White2')}</span>
          </Typography>
        </Grid>
        <Grid size={{ md: 2, lg: 2 }} sx={{ display: { xs: 'none', md: 'block' } }} />
        <Grid size={{ xs: 12, md: 4, lg: 4 }}>
          <ContactGrid />
        </Grid>
      </Grid>
    </>
  );
};

export default ContactUsContent;
