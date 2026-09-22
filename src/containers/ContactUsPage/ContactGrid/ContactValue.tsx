import type { ReactNode } from 'react';

import Typography from '@mui/material/Typography';

/** 联系信息值（右侧白色粗体文字） */
const ContactValue: React.FC<{ children: ReactNode }> = ({ children }) => (
  <Typography
    sx={{
      color: '#FFFFFF',
      fontWeight: 600,
      fontSize: '0.95rem',
    }}
  >
    {children}
  </Typography>
);

export default ContactValue;
