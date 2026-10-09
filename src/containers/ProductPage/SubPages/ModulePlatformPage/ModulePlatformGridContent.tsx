import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface ModulePlatformGridContentProps {
  smallTitle: string;
  title: string;
  content: string;
  numberString?: string;
  numberDescription: string;
}

const ModulePlatformGridContent: React.FC<ModulePlatformGridContentProps> = ({
  smallTitle,
  title,
  content,
  numberString,
  numberDescription,
}) => (
  <Grid container sx={{ gap: 2 }}>
    <Grid size={12}>
      <Typography
        variant='caption'
        sx={{ color: '#FF6B1AFF', fontWeight: 600, letterSpacing: '0.0781vw' }}
      >
        {smallTitle}
      </Typography>
    </Grid>

    <Grid size={12}>
      <Typography variant='h5' sx={{ color: '#1A1A1AFF', fontWeight: 700, lineHeight: 1.2 }}>
        {title}
      </Typography>
    </Grid>

    <Grid size={12}>
      <Typography variant='body2' sx={{ color: '#666666FF', lineHeight: 1.7 }}>
        {content}
      </Typography>
    </Grid>

    <Grid container size={12} sx={{ alignItems: 'baseline', gap: 1.5, mt: 1 }}>
      {numberString && (
        <Grid size='auto'>
          <Typography variant='h4' sx={{ color: '#FF6B1AFF', fontWeight: 700, lineHeight: 1 }}>
            {numberString}
          </Typography>
        </Grid>
      )}
      <Grid size='grow'>
        <Typography
          variant='body2'
          sx={{
            color: numberString ? '#888888FF' : '#FF6B1AFF',
            fontWeight: numberString ? 400 : 700,
          }}
        >
          {numberDescription}
        </Typography>
      </Grid>
    </Grid>
  </Grid>
);

export default ModulePlatformGridContent;
