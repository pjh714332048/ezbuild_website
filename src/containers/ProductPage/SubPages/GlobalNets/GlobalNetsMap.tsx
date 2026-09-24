import Box from '@mui/material/Box';

type MapDot = {
  id: string;
  left: string;
  top: string;
  color: string;
  label: string;
};

const mapDots: MapDot[] = [
  { id: 'north-america', left: '17%', top: '38%', color: '#F77E2D', label: 'North America (USA)' },
  { id: 'europe', left: '50%', top: '30%', color: '#F77E2D', label: 'Europe' },
  { id: 'east-asia', left: '82%', top: '40%', color: '#F77E2D', label: 'East Asia (Japan)' },
  {
    id: 'southeast-asia-ph',
    left: '76%',
    top: '48%',
    color: '#F77E2D',
    label: 'Southeast Asia (Philippines)',
  },
  {
    id: 'southeast-asia-my',
    left: '70%',
    top: '55%',
    color: '#F77E2D',
    label: 'Southeast Asia (Malaysia/Thailand)',
  },
  { id: 'africa', left: '44%', top: '58%', color: '#F77E2D', label: 'Africa' },
  { id: 'australia', left: '78%', top: '76%', color: '#F77E2D', label: 'Australia' },
];

const dotSize = 14;
const pulseSize = 28;

const GlobalNetsMap: React.FC = () => {
  const handleDotClick = (dot: MapDot) => {
    console.info(`Clicked: ${dot.label}`);
  };

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: 0,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        component='img'
        src='/global_nets/map.png'
        alt='Global Markets Map'
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />

      {mapDots.map(dot => (
        <Box
          key={dot.id}
          onClick={() => handleDotClick(dot)}
          title={dot.label}
          sx={{
            position: 'absolute',
            left: dot.left,
            top: dot.top,
            transform: 'translate(-50%, -50%)',
            width: dotSize,
            height: dotSize,
            borderRadius: '50%',
            backgroundColor: dot.color,
            cursor: 'pointer',
            zIndex: 2,
            transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            ['&::before']: {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) scale(0)',
              width: pulseSize,
              height: pulseSize,
              borderRadius: '50%',
              backgroundColor: `${dot.color}50`,
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              opacity: 0,
            },
            ['&:hover']: {
              transform: 'translate(-50%, -50%) scale(1.3)',
              boxShadow: `0 0 12px 4px ${dot.color}90`,
              ['&::before']: {
                transform: 'translate(-50%, -50%) scale(1)',
                opacity: 1,
              },
            },
          }}
        />
      ))}
    </Box>
  );
};

export default GlobalNetsMap;
