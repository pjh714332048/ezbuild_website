import Box from '@mui/material/Box';

import ContentContainer from './ContentContainer';

interface PageGridProps {
  content: React.ReactNode;
  pageBackground: string;
}

const PageGrid: React.FC<PageGridProps> = ({ content, pageBackground }) => (
  <Box
    sx={{
      width: '100%',
      minWidth: 0,
      py: 'var(--section-spacing)',
      background: pageBackground || '#FFFFFF94',
    }}
  >
    <ContentContainer>{content}</ContentContainer>
  </Box>
);

export default PageGrid;
