import React from 'react';

import Box from '@mui/material/Box';
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
    <Box
      sx={{
        width: '100%',
        height: '100%',
        bgcolor: '#0a3d4a',
        border: '1px solid rgba(255,255,255,0.12)',
        display: 'flex',
        flexDirection: 'column',
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
                flex: 1,
                borderTop: index > 0 ? '1px solid rgba(255,255,255,0.12)' : 'none',
              }}
            >
              {[0, 1].map(colOffset => {
                const item = systemItems[index + colOffset];
                if (!item) return null;
                return (
                  <Grid
                    size={6}
                    key={item.number}
                    sx={{
                      borderRight: colOffset === 0 ? '1px solid rgba(255,255,255,0.12)' : 'none',
                      display: 'flex',
                      alignItems: 'center',
                      padding: '24px 32px',
                      minHeight: 80,
                    }}
                  >
                    <Typography
                      variant='body2'
                      sx={{
                        color: '#c8a84e',
                        fontWeight: 400,
                        minWidth: 28,
                        mr: 3,
                        fontSize: 14,
                      }}
                    >
                      {item.number}
                    </Typography>
                    <Typography
                      sx={{
                        color: '#ffffff',
                        fontSize: 18,
                        fontWeight: 500,
                        flexGrow: 1,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'rgba(255,255,255,0.35)',
                        fontSize: 22,
                        fontWeight: 300,
                        ml: 2,
                      }}
                    >
                      +
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>,
          );
        }
        return rows;
      }, [])}
    </Box>
  );
};

export default WholeHouseCustomizationSystemList;
