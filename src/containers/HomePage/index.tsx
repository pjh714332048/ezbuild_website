import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import HeadTitle from './HeadTitle';

const HomePage: React.FC = () => (
  <Box
    sx={{
      backgroundImage: 'url(/home/home_background.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Grid container spacing={2} sx={{ width: '100%' }}>
      <Grid size={3} />
      <Grid size={6}>
        <HeadTitle />
      </Grid>
      <Grid size={3} />
    </Grid>
  </Box>
);

export default HomePage;
