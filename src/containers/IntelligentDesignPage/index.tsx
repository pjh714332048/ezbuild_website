import Box from '@mui/material/Box';

import BusinessCapability from './BusinessCapability';
import IntelligentDesign from './IntelligentDesign';

const IntelligentDesignPage: React.FC = () => {
  return (
    <Box
      id='intelligence_design'
      sx={{
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        background: '#0B1C31FF',
      }}
    >
      <IntelligentDesign />
      <BusinessCapability />
    </Box>
  );
};
export default IntelligentDesignPage;
