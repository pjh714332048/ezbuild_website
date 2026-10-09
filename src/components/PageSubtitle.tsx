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
        width: 'clamp(24px, 1.875vw, 36px)',
        height: 'clamp(24px, 1.875vw, 36px)',
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
          fontSize: 'clamp(0.625rem, 0.625vw, 0.75rem)',
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
          fontSize: 'clamp(0.7rem, 0.9375vw, 1.125rem)',
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
