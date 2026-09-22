import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface ProjectExamplesSubTitleProps {
  index: number;
  location: string;
  title: string;
  description: string;
  imageCount: number;
}

const ProjectExamplesSubTitle: React.FC<ProjectExamplesSubTitleProps> = ({
  index,
  location,
  title,
  description,
  imageCount,
}) => (
  <Grid
    container
    sx={{ flex: 1, minWidth: 0, display: 'flex', alignItems: 'center', py: { md: 2, lg: 4 } }}
  >
    <Grid size={0.5}>
      <Typography
        variant='h4'
        sx={{
          color: '#FF6B1A',
          fontWeight: 700,
          flexShrink: 0,
          minWidth: 48,
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </Typography>
    </Grid>
    <Grid size='grow'>
      <Box>
        <Typography
          variant='h5'
          sx={{ color: '#FF6B1A', fontSize: 12, fontWeight: 600, flexShrink: 0 }}
        >
          {location}
        </Typography>
        <Typography
          variant='h2'
          sx={{
            color: '#000',
            fontSize: 'clamp(1.5rem, 2.2vw, 2.25rem)',
            fontWeight: 400,
            flexShrink: 0,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant='h4'
          sx={{ color: '#3f3f3f55', fontSize: 12, fontWeight: 600, flexShrink: 0 }}
        >
          {description}
        </Typography>
      </Box>
    </Grid>
    <Grid size='auto'>
      <Box
        sx={{
          border: '1px solid #000',
          borderRadius: 1,
          px: 2,
          py: 0.5,
        }}
      >{`${imageCount} 张图片`}</Box>
    </Grid>
  </Grid>
);
export default ProjectExamplesSubTitle;
