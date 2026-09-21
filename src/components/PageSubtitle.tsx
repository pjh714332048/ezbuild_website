import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface PageSubtitleProps {
  number: string;
  title: string;
}

const PageSubtitle: React.FC<PageSubtitleProps> = ({ number, title }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
    <Box
      sx={{
        width: 36,
        height: 36,
        borderRadius: '50%',
        border: '2px solid #FF6B1A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <Typography
        sx={{
          color: '#FF6B1A',
          fontWeight: 700,
          fontSize: 12,
          lineHeight: 1,
        }}
      >
        {number}
      </Typography>
    </Box>
    <Typography
      sx={{
        color: '#637080',
        fontSize: 18,
        fontWeight: 500,
        lineHeight: 1.2,
      }}
    >
      {title}
    </Typography>
  </Box>
);

export default PageSubtitle;
