import { ThemeProvider, createTheme } from '@mui/material/styles';

import './App.css';
import AboutUsPage from './containers/AboutUsPage';
import HomePage from './containers/HomePage';
import IntelligentDesignPage from './containers/IntelligentDesignPage';
import NavigatorHeader from './containers/NavigatorHeader';
import ProductPage from './containers/ProductPage';

const theme = createTheme();

/** 主应用组件 */
const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <NavigatorHeader />
    <HomePage />
    <AboutUsPage />
    <IntelligentDesignPage />
    <ProductPage />
  </ThemeProvider>
);

export default App;
