import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PageSubtitle from 'components/PageSubtitle';

import GlobalNetsContent from './GlobalNetsContent';

const GlobalNets: React.FC = () => (
  <Box sx={{ height: '100%', py: 10 }}>
    <Grid container sx={{ alignItems: 'stretch' }}>
      <Grid size={{ xs: 12, md: 6 }}>
        <PageSubtitle number='06' title='全球网络' />
        <Typography variant='h2' sx={{ color: '#000', mt: 3, fontWeight: 'bold' }}>
          跨越边界
        </Typography>
        <Typography variant='h2' sx={{ color: '#000', fontWeight: 'bold' }}>
          协同建造
        </Typography>
      </Grid>
      <Grid size={{ md: 1 }} sx={{ display: { xs: 'none', md: 'block' } }} />
      <Grid
        size={{ xs: 12, md: 'grow' }}
        sx={{ display: 'flex', alignItems: 'flex-end', color: '#52616B' }}
      >
        成熟制造能力与当地建筑、审批、施工资源协同，让方案真正适配法规、气候、场地与运营需求。海外项目已覆盖亚洲、美洲、欧洲与澳洲。
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

export default GlobalNets;
