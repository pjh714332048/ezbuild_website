import Box from '@mui/material/Box';
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
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
    <Box>
      <Typography
        variant='caption'
        sx={{ color: '#FF6B1AFF', fontWeight: 600, letterSpacing: '0.0781vw' }}
      >
        {smallTitle}
      </Typography>
    </Box>

    <Box>
      <Typography variant='h5' sx={{ color: '#1A1A1AFF', fontWeight: 700, lineHeight: 1.2 }}>
        {title}
      </Typography>
    </Box>

    <Box>
      <Typography variant='body2' sx={{ color: '#666666FF', lineHeight: 1.7 }}>
        {content}
      </Typography>
    </Box>

    <Grid container sx={{ alignItems: 'center', gap: 1.5, mt: 'auto', pt: 1, minHeight: 42 }}>
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
  </Box>
);

export default ModulePlatformGridContent;
