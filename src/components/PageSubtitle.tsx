import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface PageSubtitleProps {
  number: string;
  numberColor?: string;
  title: string;
  titleColor?: string;
}

const PageSubtitle: React.FC<PageSubtitleProps> = ({ number, numberColor, title, titleColor }) => (
  <Grid container spacing={2} sx={{ alignItems: 'center' }}>
    <Grid
      container
      size='auto'
      sx={{
        width: 'clamp(28px, 2.2vw, 44px)',
        height: 'clamp(28px, 2.2vw, 44px)',
        borderRadius: '50%',
        border: '2px solid',
        borderColor: numberColor || '#FF6B1AFF',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        sx={{
          color: numberColor || '#FF6B1AFF',
          fontWeight: 700,
          fontSize: 'clamp(0.75rem, 0.78vw, 0.9rem)',
          lineHeight: 1,
        }}
      >
        {number}
      </Typography>
    </Grid>
    <Grid size='grow'>
      <Typography
        sx={{
          color: titleColor || '#637080FF',
          fontSize: 'clamp(1rem, 1.1vw, 1.35rem)',
          fontWeight: 500,
          lineHeight: 1.2,
        }}
      >
        {title}
      </Typography>
    </Grid>
  </Grid>
);

export default PageSubtitle;
