import type { ReactNode } from 'react';

import Typography from '@mui/material/Typography';

/** 联系信息标签（左侧灰色文字） */
const ContactLabel: React.FC<{ children: ReactNode }> = ({ children }) => (
  <Typography
    sx={{
      color: '#FFFFFFAF',
      fontSize: 'var(--font-small)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      overflowWrap: 'anywhere',
    }}
  >
    {children}
  </Typography>
);

export default ContactLabel;
