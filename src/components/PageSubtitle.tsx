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
        width: 36,
        height: 36,
        borderRadius: '50%',
        border: '2px solid',
        borderColor: numberColor || '#FF6B1A',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        sx={{
          color: numberColor || '#FF6B1A',
          fontWeight: 700,
          fontSize: 12,
          lineHeight: 1,
        }}
      >
        {number}
      </Typography>
    </Grid>
    <Grid size='grow'>
      <Typography
        sx={{
          color: titleColor || '#637080',
          fontSize: 18,
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
