import { ThemeProvider, createTheme } from '@mui/material/styles';
import ContactUsPage from 'containers/ContactUsPage';

import './App.css';
import AboutUsPage from './containers/AboutUsPage';
import HomePage from './containers/HomePage';
import IntelligentDesignPage from './containers/IntelligentDesignPage';
import NavigatorHeader from './containers/NavigatorHeader';
import ProductPage from './containers/ProductPage';
import ProjectExamples from './containers/ProjectExamples';

const theme = createTheme();

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <NavigatorHeader />
    <HomePage />
    <AboutUsPage />
    <IntelligentDesignPage />
    <ProductPage />
    <ProjectExamples />
    <ContactUsPage />
  </ThemeProvider>
);

export default App;
