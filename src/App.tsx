import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import './App.css';
import About from './components/About';
import HomePage from './containers/HomePage';
import NavigatorHeader from './containers/NavigatorHeader';
import TodoSection from './containers/TodoSection';

const theme = createTheme();

/** 主应用组件 */
const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <NavigatorHeader />
    <HomePage />
    <TodoSection />
    <About />
  </ThemeProvider>
);

export default App;
