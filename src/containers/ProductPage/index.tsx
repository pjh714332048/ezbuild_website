import Grid from '@mui/material/Grid';

import ModulePlatformPage from './SubPages/ModulePlatformPage';

const ProductPage: React.FC = () => (
  <>
    <Grid container spacing={2} sx={{ mt: 3, py: 7, background: 'FFFFFF94' }}>
      <Grid size={3} />
      <Grid size={6}>
        <ModulePlatformPage />
      </Grid>
      <Grid size={3} />
    </Grid>
  </>
);

export default ProductPage;
