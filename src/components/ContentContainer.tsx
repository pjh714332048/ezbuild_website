import type { PropsWithChildren } from 'react';

import Box from '@mui/material/Box';

const ContentContainer: React.FC<PropsWithChildren> = ({ children }) => (
  <Box
    sx={{
      width: '100%',
      maxWidth: 'var(--content-width)',
      mx: 'auto',
      px: 'var(--page-gutter)',
      minWidth: 0,
    }}
  >
    {children}
  </Box>
);

export default ContentContainer;
