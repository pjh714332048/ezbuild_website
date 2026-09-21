import Box from '@mui/material/Box';

const GlobalNetsMap: React.FC = () => (
  <Box
    sx={{
      width: '100%',
      flexGrow: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}
  >
    <Box
      component='img'
      src='/home/hero-modular.png'
      alt='Global Markets Map'
      sx={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}
    />
  </Box>
);

export default GlobalNetsMap;
