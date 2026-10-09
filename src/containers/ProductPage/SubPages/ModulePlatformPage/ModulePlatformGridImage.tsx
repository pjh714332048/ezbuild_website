import Box from '@mui/material/Box';

interface ModulePlatformGridImageProps {
  imageSrc: string;
  badge: string;
}

const ModulePlatformGridImage: React.FC<ModulePlatformGridImageProps> = ({ imageSrc, badge }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        aspectRatio: '987 / 1400',
        my: 2,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          bgcolor: '#FF6B1AFF',
          color: '#FFFFFFFF',
          fontSize: 'clamp(0.625rem, 0.7292vw, 0.875rem)',
          fontWeight: 700,
          lineHeight: 1,
          px: 'clamp(8px, 0.625vw, 12px)',
          py: 'clamp(5px, 0.4167vw, 8px)',
          borderBottomRightRadius: 8,
          borderTopLeftRadius: 8,
        }}
      >
        {badge}
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          overflowY: 'auto',
          borderRadius: 2,
          ['&::-webkit-scrollbar']: {
            display: 'none',
          },
          scrollbarWidth: 'none',
        }}
      >
        <Box
          component='img'
          src={imageSrc}
          alt=''
          sx={{
            display: 'block',
            width: '100%',
            height: 'auto',
          }}
        />
      </Box>
    </Box>
  );
};

export default ModulePlatformGridImage;
