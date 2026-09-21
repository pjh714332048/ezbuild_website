import Grid from '@mui/material/Grid';

interface PageGridProps {
  content: React.ReactNode;
  pageBackground: string;
}

const PageGrid: React.FC<PageGridProps> = ({ content, pageBackground }) => (
  <Grid container spacing={2} sx={{ py: 7, background: pageBackground || 'FFFFFF94' }}>
    <Grid size={2.5} />
    <Grid size={7}>{content}</Grid>
    <Grid size={2.5} />
  </Grid>
);

export default PageGrid;
