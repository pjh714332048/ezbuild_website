import Grid from '@mui/material/Grid';

interface PageGridProps {
  content: React.ReactNode;
  pageBackground: string;
}

const PageGrid: React.FC<PageGridProps> = ({ content, pageBackground }) => (
  <Grid
    container
    spacing={2}
    sx={{
      px: { xs: 2, sm: 3, md: 0 },
      py: { xs: 5, md: 4, lg: 7 },
      background: pageBackground || '#FFFFFF94',
    }}
  >
    <Grid size={{ md: 2.5, lg: 2.5 }} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }} />
    <Grid size={{ xs: 12, sm: 12, md: 7, lg: 7 }}>{content}</Grid>
    <Grid size={{ md: 2.5, lg: 2.5 }} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }} />
  </Grid>
);

export default PageGrid;
