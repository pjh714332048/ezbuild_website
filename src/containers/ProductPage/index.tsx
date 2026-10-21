import Grid from '@mui/material/Grid';
import PageGrid from 'components/PageGrid';

import GlobalNets from './SubPages/GlobalNets';
import ModulePlatformPage from './SubPages/ModulePlatformPage';
import WholeHouseCustomizationSystem from './SubPages/WholeHouseCustomizationSystem';

const ProductPage: React.FC = () => (
  <>
    <Grid
      container
      id='business_capability'
      sx={{
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <PageGrid content={<ModulePlatformPage />} pageBackground='#FFFFFF94' />
    </Grid>
    <PageGrid content={<WholeHouseCustomizationSystem />} pageBackground='#064A5B' />
    <PageGrid content={<GlobalNets />} pageBackground='#dfe7e7' />
  </>
);

export default ProductPage;
