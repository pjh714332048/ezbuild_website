import Box from '@mui/material/Box';
import PageGrid from 'components/PageGrid';

import GlobalNets from './SubPages/GlobalNets';
import ModulePlatformPage from './SubPages/ModulePlatformPage';
import WholeHouseCustomizationSystem from './SubPages/WholeHouseCustomizationSystem';

const ProductPage: React.FC = () => (
  <>
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
      <PageGrid content={<ModulePlatformPage />} pageBackground='#FFFFFF94' />
    </Box>
    <PageGrid content={<WholeHouseCustomizationSystem />} pageBackground='#064A5B' />
    <PageGrid content={<GlobalNets />} pageBackground='#dfe7e7' />
  </>
);

export default ProductPage;
