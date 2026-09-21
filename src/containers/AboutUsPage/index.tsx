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
        <Grid container sx={{ background: '#F1EEE6', height: '10vh', width: 1 }}>
          <Grid size={3} sx={{ border: '1px solid #3f3f3f44' }} />
          <Grid size={6}>
            <DeliveryItems />
          </Grid>
          <Grid size={3} sx={{ border: '1px solid #3f3f3f44' }} />
        </Grid>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Grid container sx={{ background: '#FFFFFF', height: '70vh', width: 1 }}>
          <Grid size={3} />
          <Grid size={6} sx={{ height: 1 }}>
            <AboutUsArticle />
          </Grid>
          <Grid size={3} />
        </Grid>
      </Box>
    </>
  );
};

export default AboutUsPage;
