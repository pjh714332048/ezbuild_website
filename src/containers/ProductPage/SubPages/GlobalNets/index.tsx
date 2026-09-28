import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PageSubtitle from 'components/PageSubtitle';
import { useTranslation } from 'providers/useTranslation';

import GlobalNetsContent from './GlobalNetsContent';

const GlobalNets: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box id='global_nets' sx={{ height: '100%', py: { xs: 5, md: 10 }, scrollMarginTop: '64px' }}>
      <Grid container sx={{ alignItems: 'stretch' }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <PageSubtitle number='06' title={t('products.globalNetsSubtitle')} />
          <Typography variant='h2' sx={{ color: '#000', mt: 3, fontWeight: 'bold' }}>
            {t('products.globalNetsTitleLine1')}
          </Typography>
          <Typography variant='h2' sx={{ color: '#000', fontWeight: 'bold' }}>
            {t('products.globalNetsTitleLine2')}
          </Typography>
        </Grid>
        <Grid size={{ md: 1 }} sx={{ display: { xs: 'none', md: 'block' } }} />
        <Grid size={{ xs: 12, md: 'grow' }} sx={{ alignSelf: 'flex-end', color: '#52616B' }}>
          {t('products.globalNetsDescription')}
        </Grid>
      </Grid>
      <Box
        sx={{
          my: 2,
          py: 2,
        }}
      >
        <GlobalNetsContent />
      </Box>
    </Box>
  );
};

export default GlobalNets;
