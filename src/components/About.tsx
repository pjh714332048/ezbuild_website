import Typography from '@mui/material/Typography';

/** 关于区块 — 纯 UI 组件 */
const About: React.FC = () => (
  <section
    id='about'
    style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 24px 40px',
      background: '#fff',
    }}
  >
    <div style={{ maxWidth: 480, textAlign: 'center' }}>
      <Typography variant='h5' gutterBottom>
        关于我们
      </Typography>
      <Typography color='text.secondary'>
        这是一个使用 React + TypeScript + Redux 构建的单页导航示例。
      </Typography>
    </div>
  </section>
);

export default About;
