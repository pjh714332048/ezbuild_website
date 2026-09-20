import { ThemeProvider, createTheme } from '@mui/material/styles';

import './App.css';
import AboutUs from './containers/AboutUs';
import HomePage from './containers/HomePage';
import IntelligentDesign from './containers/IntelligentDesign';
import NavigatorHeader from './containers/NavigatorHeader';
import TodoSection from './containers/TodoSection';

const theme = createTheme();

/** 主应用组件 */
const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <NavigatorHeader />
    <HomePage />
    <AboutUs />
    <IntelligentDesign />
    <TodoSection />
  </ThemeProvider>
);

export default App;
