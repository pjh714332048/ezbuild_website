import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';

/** 导航项配置 */
const navItems = [
  { key: 'home', label: '首页' },
  { key: 'todo', label: '待办' },
  { key: 'about', label: '关于' },
];

/** 顶部固定导航栏 — 纯 UI 组件 */
const Navbar: React.FC = () => {
  const handleClick = (key: string) => {
    const el = document.getElementById(key);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppBar
      position='fixed'
      sx={{
        background: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 1px 0 rgba(0, 0, 0, 0.08)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'center', gap: 1 }}>
        {navItems.map(item => (
          <Button key={item.key} color='inherit' onClick={() => handleClick(item.key)}>
            {item.label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
