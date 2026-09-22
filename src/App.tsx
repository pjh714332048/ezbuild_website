import { ThemeProvider, createTheme } from '@mui/material/styles';
import ContactUsPage from 'containers/ContactUsPage';
import Footer from 'containers/Footer';

import './App.css';
import AboutUsPage from './containers/AboutUsPage';
import HomePage from './containers/HomePage';
import IntelligentDesignPage from './containers/IntelligentDesignPage';
import NavigatorHeader from './containers/NavigatorHeader';
import ProductPage from './containers/ProductPage';
import ProjectExamples from './containers/ProjectExamples';

const theme = createTheme({
  typography: {
    h1: { fontSize: 'clamp(2.5rem, 5vw, 6rem)' },
    h2: { fontSize: 'clamp(1.75rem, 3.5vw, 3.75rem)' },
    h3: { fontSize: 'clamp(1.5rem, 2.5vw, 3rem)' },
    h4: { fontSize: 'clamp(1.25rem, 2vw, 2.125rem)' },
    h5: { fontSize: 'clamp(1.125rem, 1.6vw, 1.5rem)' },
    h6: { fontSize: 'clamp(1rem, 1.2vw, 1.25rem)' },
    body1: { fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' },
    body2: { fontSize: 'clamp(0.8125rem, 2vw, 0.875rem)' },
  },
});

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <NavigatorHeader />
    <HomePage />
    <AboutUsPage />
    <IntelligentDesignPage />
    <ProductPage />
    <ProjectExamples />
    <ContactUsPage />
    <Footer />
  </ThemeProvider>
);

export default App;
