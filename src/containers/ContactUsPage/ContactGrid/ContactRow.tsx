import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import ContactLabel from './ContactLabel';
import ContactValue from './ContactValue';
import ExternalLink from './ExternalLink';

/** 单行联系信息（label + value + 底部分割线） */
const ContactRow: React.FC<{ label: string; value: string; external?: boolean }> = ({
  label,
  value,
  external,
}) => (
  <Box>
    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, px: 2.5, py: 1.5 }}>
      <ContactLabel>{label}</ContactLabel>
      <ContactValue>
        {value}
        {external && <ExternalLink />}
      </ContactValue>
    </Box>
    <Divider sx={{ borderColor: '#FFFFFF33' }} />
  </Box>
);

export default ContactRow;
