import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import ModulePlatformPage from './SubPages/ModulePlatformPage';

const ProductPage: React.FC = () => (
  <Box
    id='business_capability'
    sx={{
      scrollMarginTop: '64px',
      minHeight: '100vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
    }}
  >
    <Grid container spacing={2} sx={{ mt: 3, py: 7, background: 'FFFFFF94' }}>
      <Grid size={3} />
      <Grid size={6}>
        <ModulePlatformPage />
      </Grid>
      <Grid size={3} />
    </Grid>
  </Box>
);

export default ProductPage;
