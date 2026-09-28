import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import AboutUsArticle from './AboutUsArticle';
import DeliveryItems from './DeliveryItems';

const AboutUsPage: React.FC = () => {
  return (
    <>
      <Box
        id='about'
        sx={{
          scrollMarginTop: '64px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Grid
          container
          sx={{
            background: '#F1EEE6',
            minHeight: '10vh',
            width: 1,
            px: { xs: 2, md: 0 },
            py: { xs: 4, md: 2, lg: 0 },
          }}
        >
          <Grid
            size={{ md: 2, lg: 3 }}
            sx={{ border: '1px solid #3f3f3f44', display: { xs: 'none', md: 'block' } }}
          />
          <Grid size={{ xs: 12, md: 8, lg: 6 }}>
            <DeliveryItems />
          </Grid>
          <Grid
            size={{ md: 2, lg: 3 }}
            sx={{ border: '1px solid #3f3f3f44', display: { xs: 'none', md: 'block' } }}
          />
        </Grid>
      </Box>
      <Grid container sx={{ alignItems: 'center' }}>
        <Grid
          size={12}
          container
          sx={{
            background: '#FFFFFF',
            minHeight: '70vh',
            width: 1,
            pt: 5,
            alignItems: 'center',
            px: { xs: 2, md: 0 },
            pb: { xs: 6, md: 0 },
          }}
        >
          <Grid size={{ md: 2, lg: 3 }} sx={{ display: { xs: 'none', md: 'block' } }} />
          <Grid size={{ xs: 12, md: 8, lg: 6 }} sx={{ height: 1 }}>
            <AboutUsArticle />
          </Grid>
          <Grid size={{ md: 2, lg: 3 }} sx={{ display: { xs: 'none', md: 'block' } }} />
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUsPage;
