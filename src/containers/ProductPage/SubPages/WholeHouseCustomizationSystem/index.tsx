import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PageSubtitle from 'components/PageSubtitle';
import { useTranslation } from 'providers/useTranslation';

import WholeHouseCustomizationSystemList from './WholeHouseCustomizationSystemList';

const WholeHouseCustomizationSystem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: 'var(--section-spacing)' }}>
      <Grid container spacing={3} sx={{ alignItems: 'stretch' }}>
        <Grid size={{ xs: 12, lg: 6 }} sx={{ minWidth: 0 }}>
          <PageSubtitle
            number='05'
            title={t('products.wholeHouseSubtitle')}
            titleColor='#FFFFFFCC'
          />
          <Typography variant='h2' sx={{ color: '#FFFFFFFF', mt: 3, overflowWrap: 'anywhere' }}>
            {t('products.wholeHouseTitleLine1')}
          </Typography>
          <Typography variant='h2' sx={{ color: '#F4C544FF', mb: 3, overflowWrap: 'anywhere' }}>
            {t('products.wholeHouseTitleLine2')}
          </Typography>
          <Typography sx={{ color: '#FFFFFFAD' }}>{t('products.wholeHouseDescription')}</Typography>
          <Box sx={{ display: 'inline-block', mt: 10 }}>
            <Box
              sx={{
                width: '100%',
                height: '1px',
                backgroundColor: '#FFFFFF80',
                mt: 0.5,
              }}
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }} container sx={{ minWidth: 0 }}>
          <WholeHouseCustomizationSystemList />
        </Grid>
      </Grid>
    </Box>
  );
};

export default WholeHouseCustomizationSystem;
