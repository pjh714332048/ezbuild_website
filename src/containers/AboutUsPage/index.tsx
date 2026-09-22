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
          display: 'flex',
        }}
      >
        <Grid
          container
          sx={{ background: '#F1EEE6', minHeight: '10vh', width: 1, py: { md: 2, lg: 0 } }}
        >
          <Grid size={{ md: 2, lg: 3 }} sx={{ border: '1px solid #3f3f3f44' }} />
          <Grid size={{ md: 8, lg: 6 }}>
            <DeliveryItems />
          </Grid>
          <Grid size={{ md: 2, lg: 3 }} sx={{ border: '1px solid #3f3f3f44' }} />
        </Grid>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Grid container sx={{ background: '#FFFFFF', minHeight: '70vh', width: 1 }}>
          <Grid size={{ md: 2, lg: 3 }} />
          <Grid size={{ md: 8, lg: 6 }} sx={{ height: 1 }}>
            <AboutUsArticle />
          </Grid>
          <Grid size={{ md: 2, lg: 3 }} />
        </Grid>
      </Box>
    </>
  );
};

export default AboutUsPage;
