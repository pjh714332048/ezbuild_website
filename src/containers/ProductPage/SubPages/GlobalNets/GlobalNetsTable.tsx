import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'providers/useTranslation';

const marketDescriptionKeys = [
  'products.globalNetsMarketDescriptions.0',
  'products.globalNetsMarketDescriptions.1',
  'products.globalNetsMarketDescriptions.2',
  'products.globalNetsMarketDescriptions.3',
  'products.globalNetsMarketDescriptions.4',
  'products.globalNetsMarketDescriptions.5',
  'products.globalNetsMarketDescriptions.6',
  'products.globalNetsMarketDescriptions.7',
  'products.globalNetsMarketDescriptions.8',
] as const;

const marketCountries = [
  'USA',
  'BRAZIL',
  'PORTUGAL',
  'CHINA',
  'JAPAN',
  'CAMBODIA',
  'MALAYSIA',
  'PHILIPPINES',
  'AUSTRALIA',
];

const marketNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09'];

const GlobalNetsTable: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Grid container sx={{ width: '100%', minHeight: 0 }}>
      {marketNumbers.map((number, index) => (
        <Grid
          container
          size={12}
          key={number}
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
              {number}
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
              {marketCountries[index]}
            </Typography>
            <Typography
              variant='body2'
              sx={{
                color: '#999',
                lineHeight: 1.4,
              }}
            >
              {t(marketDescriptionKeys[index])}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default GlobalNetsTable;
