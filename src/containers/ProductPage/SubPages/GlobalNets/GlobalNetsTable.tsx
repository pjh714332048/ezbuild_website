import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface MarketItem {
  number: string;
  country: string;
  description: string;
}

const marketData: MarketItem[] = [
  { number: '01', country: 'USA', description: '木结构公寓' },
  { number: '02', country: 'BRAZIL', description: '度假屋与住宅' },
  { number: '03', country: 'PORTUGAL', description: '附属住宅' },
  { number: '04', country: 'CHINA', description: '设计与制造中枢' },
  { number: '05', country: 'JAPAN', description: '规模化交付' },
  { number: '06', country: 'CAMBODIA', description: '轻钢酒店' },
  { number: '07', country: 'MALAYSIA', description: '批量住宅社区' },
  { number: '08', country: 'PHILIPPINES', description: '别墅社区' },
  { number: '09', country: 'AUSTRALIA', description: '轻钢住宅' },
];

const GlobalNetsTable: React.FC = () => (
  <Grid container sx={{ width: '100%', minHeight: 0 }}>
    {marketData.map(item => (
      <Grid
        container
        size={12}
        key={item.number}
        sx={{
          alignItems: 'center',
          py: 2,
          px: 2.5,
          borderTop: '1px solid #3f3f3f',
          borderLeft: '1px solid #3f3f3f',
          borderRight: '1px solid #3f3f3f',
          ['&:last-child']: { borderBottom: '1px solid #3f3f3f' },
        }}
      >
        <Grid size='auto' sx={{ minWidth: 32, mr: 2 }}>
          <Typography
            variant='body2'
            sx={{
              color: '#FF6B1A',
              fontWeight: 600,
              fontFamily: '"Courier New", Courier, monospace',
            }}
          >
            {item.number}
          </Typography>
        </Grid>
        <Grid size='grow'>
          <Typography
            variant='body1'
            sx={{
              color: '#1a1a1a',
              fontWeight: 700,
              letterSpacing: 1.5,
              lineHeight: 1.4,
            }}
          >
            {item.country}
          </Typography>
          <Typography
            variant='body2'
            sx={{
              color: '#999',
              lineHeight: 1.4,
            }}
          >
            {item.description}
          </Typography>
        </Grid>
      </Grid>
    ))}
  </Grid>
);

export default GlobalNetsTable;
