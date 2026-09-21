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
        height: '70%',
        flexShrink: 0,
        my: 2,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          bgcolor: '#FF6B1A',
          color: '#FFFFFF',
          fontSize: 14,
          fontWeight: 700,
          lineHeight: 1,
          px: 1.5,
          py: 1,
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
