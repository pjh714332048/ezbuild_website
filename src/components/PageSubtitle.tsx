import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface PageSubtitleProps {
  number: string;
  numberColor?: string;
  title: string;
  titleColor?: string;
}

const PageSubtitle: React.FC<PageSubtitleProps> = ({ number, numberColor, title, titleColor }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
    <Box
      sx={{
        width: 36,
        height: 36,
        borderRadius: '50%',
        border: '2px solid',
        borderColor: numberColor || '#FF6B1A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
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
    </Box>
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
  </Box>
);

export default PageSubtitle;
