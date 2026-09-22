import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import BusinessCapabilityFooter from './BusinessCapabilityFooter';
import BusinessCapabilityTitle from './BusinessCapabilityTitle';
import CapabilityList from './CapabilityList';

const BusinessCapability: React.FC = () => (
  <Box
    sx={{
      scrollMarginTop: '64px',
      background: '#081727',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      py: { md: 6, lg: 10 },
    }}
  >
    <Grid container sx={{ width: '100%', mt: { md: 8, lg: 12 } }}>
      <Grid size={{ md: 2, lg: 3 }} />
      <Grid size={{ md: 8, lg: 6 }}>
        <BusinessCapabilityTitle />
        <Divider />
        <CapabilityList />
        <BusinessCapabilityFooter />
      </Grid>
      <Grid size={{ md: 2, lg: 3 }} />
    </Grid>
  </Box>
);

export default BusinessCapability;
