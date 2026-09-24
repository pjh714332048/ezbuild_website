import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface DeliveryItem {
  value: string;
  suffix: string;
  label: string;
}

const deliveryItems: DeliveryItem[] = [
  { value: '500', suffix: '+', label: '中国及日本交付建筑' },
  { value: '8', suffix: '+', label: '海外项目市场' },
  { value: '30-50', suffix: '%', label: '较传统方式缩短工期' },
  { value: '80', suffix: '%', label: '最高可减少建筑垃圾' },
];

const DeliveryItems: React.FC = () => {
  return (
    <Grid container sx={{ width: 1, height: 1, alignItems: 'center' }}>
      {deliveryItems.map(item => (
        <Grid
          key={item.value}
          size={{ xs: 6, sm: 3, lg: 'grow' }}
          sx={{
            height: 1,
            border: '1px solid #3f3f3f44',
            p: 1,
            textAlign: 'left',
          }}
        >
          <Typography variant='h2' sx={{ fontWeight: 'bold' }}>
            {item.value}
            <Typography
              component='span'
              sx={{
                color: '#E87722',
                verticalAlign: 'super',
                fontSize: '0.6em',
                fontWeight: 'bold',
              }}
            >
              {item.suffix}
            </Typography>
          </Typography>
          <Typography variant='body2' sx={{ color: '#637080', fontWeight: 'bold' }}>
            {item.label}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default DeliveryItems;
