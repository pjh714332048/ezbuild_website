import type { ReactNode } from 'react';

import Typography from '@mui/material/Typography';

/** 联系信息值（右侧白色粗体文字） */
const ContactValue: React.FC<{ children: ReactNode }> = ({ children }) => (
  <Typography
    sx={{
      color: '#FFFFFFFF',
      fontWeight: 600,
      fontSize: 'clamp(0.75rem, 0.7917vw, 0.95rem)',
      whiteSpace: 'nowrap',
    }}
  >
    {children}
  </Typography>
);

export default ContactValue;
