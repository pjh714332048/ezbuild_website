import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

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
    <Grid container sx={{ alignItems: 'flex-start', gap: 2, px: 2.5, py: 1.5 }}>
      <Grid size='auto'>
        <ContactLabel>{label}</ContactLabel>
      </Grid>
      <Grid size='grow'>
        <ContactValue>
          {value}
          {external && <ExternalLink />}
        </ContactValue>
      </Grid>
    </Grid>
    <Divider sx={{ borderColor: '#FFFFFF33' }} />
  </Box>
);

export default ContactRow;
