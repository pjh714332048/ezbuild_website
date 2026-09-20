import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/** 首页标题 — 纯 UI 组件 */
const HeadTitle: React.FC = () => (
  <Box>
    <Typography variant='h1' component='h1' sx={{ fontWeight: 'bold', color: '#FFFFFF' }}>
      把复杂建造
    </Typography>
    <Typography variant='h1' component='h1' sx={{ fontWeight: 'bold' }}>
      <span style={{ color: '#FFFFFF' }}>变成</span>
      <span style={{ color: '#FF6B1A' }}>确定交付</span>
    </Typography>
    <Typography variant='body1' component='p' sx={{ color: '#FFFFFFC2' }}>
      连接智能设计、自研模块产品、先进制造与本地交付资源，为住宅、文旅、商业与公共
    </Typography>
    <Typography variant='body1' component='p' sx={{ color: '#FFFFFFC2' }}>
      项目提供灵活、高效、可持续的完整解决方案。
    </Typography>
  </Box>
);

export default HeadTitle;
