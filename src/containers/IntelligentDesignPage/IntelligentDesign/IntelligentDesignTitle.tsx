import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PageSubtitle from 'components/PageSubtitle';

const IntelligentDesignTitle: React.FC = () => (
  <>
    <PageSubtitle number='02' title='智能设计' />
    <Grid container sx={{ width: '100%', mt: 3 }}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography variant='h2' sx={{ color: '#FFFFFF', fontWeight: 'bold' }}>
          先选择需求，
        </Typography>
        <Typography variant='h2' sx={{ fontWeight: 'bold' }}>
          <span style={{ color: '#FFFFFF' }}>再生成</span>
          <span style={{ color: '#E87722' }}>可建造方案</span>
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 2 }} sx={{ display: { xs: 'none', md: 'block' } }} />
      <Grid size={{ xs: 12, md: 'grow' }} sx={{ textAlign: 'left', alignSelf: 'flex-end' }}>
        <Typography variant='body1' sx={{ color: '#FFFFFF94' }}>
          以建筑类型、面积、房间数量和设计风格为起点，快速匹配模块、材料与生产逻辑，并进入 ezBuild
          智能设计平台继续深化。
        </Typography>

        {/* <Box>
          <Button
            endIcon={<ArrowForward />}
            sx={{
              color: 'white',
              fontSize: '1.1rem',
              textTransform: 'none',
              mt: 2,
            }}
          >
            查看全球项目
          </Button>
          <Box
            sx={{
              width: '100%',
              height: '1px',
              backgroundColor: '#FFFFFF80',
              mt: 0.5,
            }}
          />
        </Box> */}
      </Grid>
    </Grid>
  </>
);

export default IntelligentDesignTitle;
