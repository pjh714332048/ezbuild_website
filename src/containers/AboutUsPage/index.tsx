import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ContentContainer from 'components/ContentContainer';

import AboutUsArticle from './AboutUsArticle';
import DeliveryItems from './DeliveryItems';

const AboutUsPage: React.FC = () => {
  return (
    <>
      <Box
        id='about'
        sx={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Grid
          container
          sx={{
            background: '#F1EEE6FF',
            minHeight: '10vh',
            width: 1,
            py: { xs: 4, md: 2, lg: 0 },
          }}
        >
          <ContentContainer>
            <DeliveryItems />
          </ContentContainer>
        </Grid>
      </Box>
      <Grid container sx={{ alignItems: 'center' }}>
        <Grid
          size={12}
          container
          sx={{
            background: '#FFFFFFFF',
            minHeight: '70vh',
            width: 1,
            py: 'var(--section-spacing)',
            alignItems: 'center',
          }}
        >
          <ContentContainer>
            <AboutUsArticle />
          </ContentContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUsPage;
