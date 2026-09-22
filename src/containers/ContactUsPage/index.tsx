import Box from '@mui/material/Box';
import PageGrid from 'components/PageGrid';

import ContactUsContent from './ContactUsContent';

const ContactUsPage = () => (
  <Box id='contact_us'>
    <PageGrid content={<ContactUsContent />} pageBackground='#F77E2D' />
  </Box>
);

export default ContactUsPage;
