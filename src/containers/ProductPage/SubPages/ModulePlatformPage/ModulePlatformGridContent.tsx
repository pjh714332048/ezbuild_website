import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface ModulePlatformGridContentProps {
  smallTitle: string;
  title: string;
  content: string;
  numberString: string;
  numberDescription: string;
}

const ModulePlatformGridContent: React.FC<ModulePlatformGridContentProps> = ({
  smallTitle,
  title,
  content,
  numberString,
  numberDescription,
}) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    <Typography variant='caption' sx={{ color: '#FF6B1A', fontWeight: 600, letterSpacing: 1.5 }}>
      {smallTitle}
    </Typography>

    <Typography variant='h5' sx={{ color: '#1a1a1a', fontWeight: 700, lineHeight: 1.2 }}>
      {title}
    </Typography>

    <Typography variant='body2' sx={{ color: '#666', lineHeight: 1.7 }}>
      {content}
    </Typography>

    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
        gap: 1.5,
        mt: 1,
      }}
    >
      <Typography variant='h4' sx={{ color: '#FF6B1A', fontWeight: 700, lineHeight: 1 }}>
        {numberString}
      </Typography>
      <Typography variant='body2' sx={{ color: '#888' }}>
        {numberDescription}
      </Typography>
    </Box>
  </Box>
);

export default ModulePlatformGridContent;
