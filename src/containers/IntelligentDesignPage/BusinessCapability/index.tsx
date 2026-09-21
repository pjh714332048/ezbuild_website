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
      py: 10,
    }}
  >
    <Grid container sx={{ width: '100vw', mt: 12 }}>
      <Grid size={3} />
      <Grid size={6}>
        <BusinessCapabilityTitle />
        <Divider />
        <CapabilityList />
        <BusinessCapabilityFooter />
      </Grid>
      <Grid size={3} />
    </Grid>
  </Box>
);

export default BusinessCapability;
