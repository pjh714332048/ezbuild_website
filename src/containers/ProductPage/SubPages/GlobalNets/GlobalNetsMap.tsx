import { type MouseEvent, useState } from 'react';

import Box from '@mui/material/Box';
import DotInfoCard from 'containers/ProductPage/SubPages/GlobalNets/DotInfoCard';
import { useTranslation } from 'providers/useTranslation';

const mapDots = [
  {
    id: 'china',
    left: '70%',
    top: '40%',
    titleKey: 'products.globalNetsMapTitles.0',
    contentKey: 'products.globalNetsMapDescriptions.0',
  },
  {
    id: 'japan',
    left: '78.5%',
    top: '39%',
    titleKey: 'products.globalNetsMapTitles.1',
    contentKey: 'products.globalNetsMapDescriptions.1',
  },
  {
    id: 'usa',
    left: '18%',
    top: '38%',
    titleKey: 'products.globalNetsMapTitles.2',
    contentKey: 'products.globalNetsMapDescriptions.2',
  },
  {
    id: 'australia',
    left: '80%',
    top: '76%',
    titleKey: 'products.globalNetsMapTitles.3',
    contentKey: 'products.globalNetsMapDescriptions.3',
  },
  {
    id: 'brazil',
    left: '30%',
    top: '68%',
    titleKey: 'products.globalNetsMapTitles.4',
    contentKey: 'products.globalNetsMapDescriptions.4',
  },
  {
    id: 'portugal',
    left: '41%',
    top: '37%',
    titleKey: 'products.globalNetsMapTitles.5',
    contentKey: 'products.globalNetsMapDescriptions.5',
  },
  {
    id: 'cambodia',
    left: '75%',
    top: '54%',
    titleKey: 'products.globalNetsMapTitles.6',
    contentKey: 'products.globalNetsMapDescriptions.6',
  },
  {
    id: 'malaysia',
    left: '70%',
    top: '59%',
    titleKey: 'products.globalNetsMapTitles.7',
    contentKey: 'products.globalNetsMapDescriptions.7',
  },
  {
    id: 'philippines',
    left: '70.5%',
    top: '53%',
    titleKey: 'products.globalNetsMapTitles.8',
    contentKey: 'products.globalNetsMapDescriptions.8',
  },
] as const;

type MapDot = (typeof mapDots)[number];

const dotSize = 14;
const pulseSize = 28;
const dotColor = '#F77E2DFF';

const toHexAlpha = (hex: string, alphaHex: string): string => `${hex.slice(0, 7)}${alphaHex}`;

const GlobalNetsMap: React.FC = () => {
  const { t } = useTranslation();
  const [selectedDot, setSelectedDot] = useState<MapDot | null>(null);
  const [cardPosition, setCardPosition] = useState<{ left: number; top: number }>({
    left: 0,
    top: 0,
  });

  const handleDotClick = (dot: MapDot, event: MouseEvent<HTMLElement>) => {
    if (selectedDot?.id === dot.id) {
      setSelectedDot(null);
      return;
    }
    const rect = event.currentTarget.getBoundingClientRect();
    setCardPosition({ left: rect.left + rect.width / 2, top: rect.top + rect.height / 2 });
    setSelectedDot(dot);
  };

  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        overflow: 'visible',
      }}
    >
      <Box
        component='img'
        src='/global_nets/map.png'
        alt='Global Markets Map'
        sx={{
          width: '100%',
          height: 'auto',
          display: 'block',
        }}
      />

      {mapDots.map(dot => (
        <Box
          key={dot.id}
          onClick={e => handleDotClick(dot, e)}
          title={t(dot.titleKey)}
          sx={{
            position: 'absolute',
            left: dot.left,
            top: dot.top,
            transform: 'translate(-50%, -50%)',
            width: dotSize,
            height: dotSize,
            borderRadius: '50%',
            backgroundColor: dotColor,
            cursor: 'pointer',
            zIndex: selectedDot?.id === dot.id ? 11 : 2,
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
              backgroundColor: toHexAlpha(dotColor, '50'),
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              opacity: 0,
            },
            ['&:hover']: {
              transform: 'translate(-50%, -50%) scale(1.3)',
              boxShadow: `0 0 12px 4px ${toHexAlpha(dotColor, '90')}`,
              ['&::before']: {
                transform: 'translate(-50%, -50%) scale(1)',
                opacity: 1,
              },
            },
          }}
        />
      ))}

      <DotInfoCard
        open={!!selectedDot}
        title={selectedDot ? t(selectedDot.titleKey) : ''}
        content={selectedDot ? t(selectedDot.contentKey) : ''}
        anchorPosition={cardPosition}
        onClose={() => setSelectedDot(null)}
      />
    </Box>
  );
};

export default GlobalNetsMap;
