import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface SystemItem {
  number: string;
  title: string;
}

const systemItems: SystemItem[] = [
  { number: '01', title: '结构体系' },
  { number: '02', title: '外立面' },
  { number: '03', title: '门窗系统' },
  { number: '04', title: '室内饰面' },
  { number: '05', title: '厨房系统' },
  { number: '06', title: '卫浴系统' },
  { number: '07', title: '能源设备' },
  { number: '08', title: '全屋智能' },
];

const WholeHouseCustomizationSystemList: React.FC = () => {
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
      {systemItems.reduce<React.ReactNode[]>((rows, _item, index) => {
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
                const item = systemItems[index + colOffset];
                if (!item) return null;
                return (
                  <Grid
                    size={6}
                    container
                    key={item.number}
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
                        {item.number}
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
                        {item.title}
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
