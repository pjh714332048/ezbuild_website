import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PageSubtitle from 'components/PageSubtitle';

const ModulePlatformPageTitle: React.FC = () => (
  <>
    <PageSubtitle number='04' title='自研产品' />

    <Grid container sx={{ width: '100%', mt: 3 }}>
      <Grid size={6}>
        <Typography variant='h2' sx={{ color: '#000000', fontWeight: 'bold' }}>
          三个产品族，
        </Typography>
        <Typography variant='h2' sx={{ color: '#E87722', fontWeight: 'bold' }}>
          一套模块平台
        </Typography>
      </Grid>
      <Grid size={2}></Grid>
      <Grid size='grow' sx={{ textAlign: 'left', alignSelf: 'flex-end' }}>
        <Typography variant='body1' sx={{ color: '#637080' }}>
          以共享的模块逻辑缩短设计与生产周期，同时针对应急居住、长期住宅和高变化商业空间形成差异化产品。
        </Typography>
      </Grid>
    </Grid>
  </>
);

export default ModulePlatformPageTitle;
