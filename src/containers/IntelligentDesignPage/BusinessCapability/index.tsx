import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import BusinessCapabilityFooter from './BusinessCapabilityFooter';
import BusinessCapabilityTitle from './BusinessCapabilityTitle';
import CapabilityList from './CapabilityList';

const BusinessCapability: React.FC = () => (
  <Grid
    container
    sx={{
      scrollMarginTop: '64px',
      background: '#081727',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      py: { xs: 3, md: 6, lg: 10 },
    }}
  >
    <Grid container size={12} sx={{ width: '100%', mt: { xs: 4, md: 8, lg: 12 } }}>
      <Grid
        size={{ xs: 12, md: 2, lg: 3 }}
        sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
      />
      <Grid size={{ xs: 12, sm: 12, md: 8, lg: 6 }}>
        <BusinessCapabilityTitle />
        <Divider />
        <CapabilityList />
        <BusinessCapabilityFooter />
      </Grid>
      <Grid
        size={{ xs: 12, md: 2, lg: 3 }}
        sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
      />
    </Grid>
  </Grid>
);

export default BusinessCapability;
