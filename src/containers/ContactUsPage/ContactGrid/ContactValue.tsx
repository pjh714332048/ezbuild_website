import type { ReactNode } from 'react';

import Typography from '@mui/material/Typography';

/** 联系信息值（右侧白色粗体文字） */
const ContactValue: React.FC<{ children: ReactNode }> = ({ children }) => (
  <Typography
    sx={{
      color: '#FFFFFFFF',
      fontWeight: 600,
      fontSize: 'var(--font-body)',
      overflowWrap: 'anywhere',
    }}
  >
    {children}
  </Typography>
);

export default ContactValue;
