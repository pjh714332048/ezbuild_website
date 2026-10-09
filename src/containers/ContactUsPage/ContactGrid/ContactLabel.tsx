import type { ReactNode } from 'react';

import Typography from '@mui/material/Typography';

/** 联系信息标签（左侧灰色文字） */
const ContactLabel: React.FC<{ children: ReactNode }> = ({ children }) => (
  <Typography
    sx={{
      color: '#FFFFFFAF',
      fontSize: 'clamp(0.625rem, 0.625vw, 0.75rem)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      minWidth: 90,
    }}
  >
    {children}
  </Typography>
);

export default ContactLabel;
