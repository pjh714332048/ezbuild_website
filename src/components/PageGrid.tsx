import Grid from '@mui/material/Grid';

interface PageGridProps {
  content: React.ReactNode;
  pageBackground: string;
}

const PageGrid: React.FC<PageGridProps> = ({ content, pageBackground }) => (
  <Grid
    container
    spacing={2}
    sx={{ py: { md: 4, lg: 7 }, background: pageBackground || 'FFFFFF94' }}
  >
    <Grid size={{ md: 2, lg: 2.5 }} />
    <Grid size={{ md: 8, lg: 7 }}>{content}</Grid>
    <Grid size={{ md: 2, lg: 2.5 }} />
  </Grid>
);

export default PageGrid;
