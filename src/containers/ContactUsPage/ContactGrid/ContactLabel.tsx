import type { ReactNode } from 'react';

import Typography from '@mui/material/Typography';

/** 联系信息标签（左侧灰色文字） */
const ContactLabel: React.FC<{ children: ReactNode }> = ({ children }) => (
  <Typography
    sx={{
      color: '#FFFFFFAF',
      fontSize: '0.75rem',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      minWidth: 90,
      flexShrink: 0,
    }}
  >
    {children}
  </Typography>
);

export default ContactLabel;
