import ArrowForward from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PageSubtitle from 'components/PageSubtitle';

import WholeHouseCustomizationSystemList from './WholeHouseCustomizationSystemList';

const WholeHouseCustomizationSystem = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Grid container sx={{ alignItems: 'stretch' }}>
        <Grid size='grow'>
          <PageSubtitle number='05' title='全屋选装系统' />
          <Typography variant='h2' sx={{ color: '#FFFFFF', mt: 3 }}>
            从结构到软装，
          </Typography>
          <Typography variant='h2' sx={{ color: '#F4C544', mb: 3 }}>
            全屋材料均可选装
          </Typography>
          <Typography sx={{ color: '#FFFFFFAD' }}>
            所有产品都可根据预算、气候、当地法规与审美偏好进行材料配置。标准模块决定效率，选装体系决定每个项目的个性。
          </Typography>
          <Box sx={{ display: 'inline-block', mt: 10 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Button
                endIcon={<ArrowForward />}
                sx={{
                  color: 'white',
                  fontSize: '1.1rem',
                  textTransform: 'none',
                }}
              >
                获取项目选装清单
              </Button>
              <Box
                sx={{
                  width: '100%',
                  height: '1px',
                  backgroundColor: '#FFFFFF80',
                  mt: 0.5,
                }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid size={1} />
        <Grid size='grow' sx={{ display: 'flex', flexDirection: 'column' }}>
          <WholeHouseCustomizationSystemList />
        </Grid>
      </Grid>
    </Box>
  );
};

export default WholeHouseCustomizationSystem;
