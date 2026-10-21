import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import ContentContainer from 'components/ContentContainer';

import BusinessCapabilityFooter from './BusinessCapabilityFooter';
import BusinessCapabilityTitle from './BusinessCapabilityTitle';
import CapabilityList from './CapabilityList';

const BusinessCapability: React.FC = () => (
  <Grid
    container
    sx={{
      background: '#081727FF',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      py: 'var(--section-spacing)',
    }}
  >
    <Grid container size={12} sx={{ width: '100%', mt: { xs: 4, md: 8, lg: 12 } }}>
      <ContentContainer>
        <BusinessCapabilityTitle />
        <Divider />
        <CapabilityList />
        <BusinessCapabilityFooter />
      </ContentContainer>
    </Grid>
  </Grid>
);

export default BusinessCapability;
