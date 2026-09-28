import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'providers/useTranslation';

const systemItemKeys = [
  'products.wholeHouseSystemItems.0',
  'products.wholeHouseSystemItems.1',
  'products.wholeHouseSystemItems.2',
  'products.wholeHouseSystemItems.3',
  'products.wholeHouseSystemItems.4',
  'products.wholeHouseSystemItems.5',
  'products.wholeHouseSystemItems.6',
  'products.wholeHouseSystemItems.7',
] as const;

const systemItemNumbers = ['01', '02', '03', '04', '05', '06', '07', '08'];

const WholeHouseCustomizationSystemList: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Grid
      container
      sx={{
        width: '100%',
        height: '100%',
        bgcolor: '#0a3d4a',
        border: '1px solid #FFFFFF1F',
      }}
    >
      {systemItemKeys.reduce<React.ReactNode[]>((rows, _key, index) => {
        if (index % 2 === 0) {
          rows.push(
            <Grid
              container
              size={12}
              key={index}
              sx={{
                borderTop: index > 0 ? '1px solid #FFFFFF1F' : 'none',
              }}
            >
              {[0, 1].map(colOffset => {
                const itemIndex = index + colOffset;
                const titleKey = systemItemKeys[itemIndex];
                const number = systemItemNumbers[itemIndex];
                if (!titleKey || !number) return null;
                return (
                  <Grid
                    size={6}
                    container
                    key={number}
                    sx={{
                      borderRight: colOffset === 0 ? '1px solid #FFFFFF1F' : 'none',
                      alignItems: 'center',
                      padding: 'clamp(12px, 2vw, 24px) clamp(16px, 2.5vw, 32px)',
                      minHeight: 80,
                    }}
                  >
                    <Grid size='auto' sx={{ minWidth: 28, mr: 3 }}>
                      <Typography
                        variant='body2'
                        sx={{
                          color: '#c8a84e',
                          fontWeight: 400,
                          fontSize: 14,
                        }}
                      >
                        {number}
                      </Typography>
                    </Grid>
                    <Grid size='grow'>
                      <Typography
                        sx={{
                          color: '#ffffff',
                          fontSize: 18,
                          fontWeight: 500,
                        }}
                      >
                        {t(titleKey)}
                      </Typography>
                    </Grid>
                    <Grid size='auto' sx={{ ml: 2 }}>
                      <Typography
                        sx={{
                          color: '#FFFFFF59',
                          fontSize: 'clamp(1rem, 1.4vw, 1.375rem)',
                          fontWeight: 300,
                        }}
                      >
                        +
                      </Typography>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>,
          );
        }
        return rows;
      }, [])}
    </Grid>
  );
};

export default WholeHouseCustomizationSystemList;
