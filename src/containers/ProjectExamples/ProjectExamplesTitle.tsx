import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const ProjectExamplesTitle: React.FC = () => (
  <Grid
    container
    sx={{ width: '100%', mt: 3, borderBottom: '1px solid #E0E0E0', pb: { md: 3, lg: 5 } }}
  >
    <Grid size={6}>
      <Typography
        variant='h1'
        sx={{ color: '#000000', fontSize: 'clamp(2.25rem, 4.5vw, 4.5rem)', fontWeight: 'bold' }}
      >
        全球项目，
      </Typography>
      <Typography
        variant='h1'
        sx={{ color: '#E87722', fontSize: 'clamp(2.25rem, 4.5vw, 4.5rem)', fontWeight: 'bold' }}
      >
        完整图组
      </Typography>
    </Grid>
    <Grid size={2}></Grid>
    <Grid size='grow' sx={{ textAlign: 'left', alignSelf: 'flex-end' }}>
      <Typography variant='body1' sx={{ color: '#637080' }}>
        来自公司项目资料的完整图组，覆盖方案、生产、结构施工、现场安装与完工状态。点击任意图片可放大查看。
      </Typography>
    </Grid>
  </Grid>
);

export default ProjectExamplesTitle;
