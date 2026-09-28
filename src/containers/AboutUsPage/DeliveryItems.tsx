import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'providers/useTranslation';

interface DeliveryItem {
  value: string;
  suffix: string;
  labelKey: string;
}

const deliveryItems: DeliveryItem[] = [
  { value: '500', suffix: '+', labelKey: 'about.delivery.buildingsDelivered' },
  { value: '8', suffix: '+', labelKey: 'about.delivery.overseasMarkets' },
  { value: '30-50', suffix: '%', labelKey: 'about.delivery.scheduleReduction' },
  { value: '80', suffix: '%', labelKey: 'about.delivery.wasteReduction' },
];

const DeliveryItems: React.FC = () => {
  const { t } = useTranslation();

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
            {t(item.labelKey as 'about.delivery.buildingsDelivered')}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default DeliveryItems;
