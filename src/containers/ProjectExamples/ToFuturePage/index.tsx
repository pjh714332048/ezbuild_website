import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PageSubtitle from 'components/PageSubtitle';

const ToFuturePage: React.FC = () => (
  <Box
    sx={{
      width: '100%',
      aspectRatio: '16 / 9',
      backgroundImage: 'url(/to_futrue_background.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'flex-end',
    }}
  >
    <Box
      sx={{
        width: { xs: '100%', md: '42%' },
        height: '100%',
        bgcolor: '#0F322DD9',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        px: { xs: 4, md: 6 },
        py: 8,
      }}
    >
      <PageSubtitle number='09' title='面向未来' />
      <Typography
        sx={{
          fontSize: { xs: 32, md: 40 },
          fontWeight: 700,
          color: '#FFFFFF',
          lineHeight: 1.3,
          my: 3,
        }}
      >
        更轻的足迹，
        <br />
        更长的
        <Box component='span' sx={{ color: '#FF6B1A' }}>
          价值周期
        </Box>
      </Typography>

      {/* 描述文字 */}
      <Typography
        sx={{
          fontSize: 14,
          color: '#FFFFFFBF',
          lineHeight: 1.8,
          mb: 4,
        }}
      >
        干法施工、精准用料、可循环材料与被动式节能设计，共同降低建造和运营阶段的环境负担。
      </Typography>

      {/* 分隔线 */}
      <Divider sx={{ borderColor: '#FFFFFF33', mb: 4 }} />

      {/* 数据统计 */}
      <Grid container sx={{ width: '100%' }}>
        <Grid size='grow'>
          <Typography
            sx={{
              fontSize: 36,
              fontWeight: 700,
              color: '#FF6B1A',
              lineHeight: 1.2,
            }}
          >
            80%
          </Typography>
          <Typography
            sx={{
              fontSize: 13,
              color: '#FFFFFF',
              mt: 0.5,
            }}
          >
            最高减少建筑垃圾
          </Typography>
        </Grid>
        <Grid size='grow'>
          <Typography
            sx={{
              fontSize: 36,
              fontWeight: 700,
              color: '#FF6B1A',
              lineHeight: 1.2,
            }}
          >
            30-50%
          </Typography>
          <Typography
            sx={{
              fontSize: 13,
              color: '#FFFFFF',
              mt: 0.5,
            }}
          >
            缩短建设周期
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Box>
);

export default ToFuturePage;
