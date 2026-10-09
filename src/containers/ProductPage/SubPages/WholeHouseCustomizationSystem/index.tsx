import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PageSubtitle from 'components/PageSubtitle';
import { useTranslation } from 'providers/useTranslation';

import WholeHouseCustomizationSystemList from './WholeHouseCustomizationSystemList';

const WholeHouseCustomizationSystem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: { xs: 5, md: 10 } }}>
      <Grid container sx={{ alignItems: 'stretch' }}>
        <Grid size={{ xs: 12, md: 5.5 }}>
          <PageSubtitle number='05' title={t('products.wholeHouseSubtitle')} />
          <Typography variant='h2' sx={{ color: '#FFFFFFFF', mt: 3, whiteSpace: 'nowrap' }}>
            {t('products.wholeHouseTitleLine1')}
          </Typography>
          <Typography variant='h2' sx={{ color: '#F4C544FF', mb: 3, whiteSpace: 'nowrap' }}>
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
        <Grid size={{ md: 0.5 }} sx={{ display: { xs: 'none', md: 'block' } }} />
        <Grid size={{ xs: 12, md: 'grow' }} container>
          <WholeHouseCustomizationSystemList />
        </Grid>
      </Grid>
    </Box>
  );
};

export default WholeHouseCustomizationSystem;
