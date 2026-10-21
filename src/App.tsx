import { useEffect } from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import ContactUsPage from 'containers/ContactUsPage';
import Footer from 'containers/Footer';
import { useTranslation } from 'providers/useTranslation';

import './App.css';
import AboutUsPage from './containers/AboutUsPage';
import HomePage from './containers/HomePage';
import IntelligentDesignPage from './containers/IntelligentDesignPage';
import NavigatorHeader from './containers/NavigatorHeader';
import ProductPage from './containers/ProductPage';
import ProjectExamples from './containers/ProjectExamples';

const theme = createTheme({
  typography: {
    fontFamily: "'Segoe UI', system-ui, sans-serif",
    h1: { fontSize: 'clamp(2.5rem, 5vw, 6rem)' },
    h2: { fontSize: 'clamp(2rem, 3.125vw, 3.75rem)' },
    h3: { fontSize: 'clamp(1.5rem, 2.5vw, 3rem)' },
    h4: { fontSize: 'clamp(1.1333rem, 1.7708vw, 2.125rem)' },
    h5: { fontSize: 'clamp(1.125rem, 1.25vw, 1.5rem)' },
    h6: { fontSize: 'clamp(1rem, 1.0417vw, 1.25rem)' },
    body1: { fontSize: 'var(--font-body)', lineHeight: 1.6 },
    body2: { fontSize: 'var(--font-small)', lineHeight: 1.6 },
    caption: { fontSize: 'var(--font-caption)', lineHeight: 1.5 },
    button: { fontSize: 'var(--font-small)' },
  },
});

const App: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('common.pageTitle');
  }, [t]);

  return (
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
};

export default App;
