import ArrowForward from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ContentContainer from 'components/ContentContainer';
import { HOME_PAGE_KEY } from 'models/navigators/HOME_PAGE_KEY';
import { useTranslation } from 'providers/useTranslation';

import HeadTitle from './HeadTitle';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Grid
      container
      id={HOME_PAGE_KEY}
      sx={{
        backgroundColor: '#102B3A',
        backgroundImage: 'url(/home/hero-modular.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        ['@supports (height: 100svh)']: { minHeight: '100svh' },
        pt: 'calc(var(--header-height) + var(--hero-spacing))',
        pb: 'var(--hero-spacing)',
        ['@media (max-aspect-ratio: 4/3)']: { backgroundPosition: '60% center' },
        alignItems: 'center',
      }}
    >
      <ContentContainer>
        <HeadTitle />
        <Grid
          container
          sx={{
            gap: { xs: 2, md: 3 },
            mt: { xs: 2, md: 4 },
            alignItems: 'center',
            ['@media (max-height: 750px)']: { mt: 2, gap: 2 },
          }}
        >
          <Grid size='auto'>
            <Button
              variant='contained'
              endIcon={<ArrowForward />}
              onClick={() => {
                const el = document.getElementById('intelligence_design');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              sx={{
                backgroundColor: '#FF6B1AFF',
                color: 'white',
                px: { xs: 2.5, md: 4 },
                py: { xs: 1.25, md: 2 },
                ['@media (max-height: 750px)']: { py: 1.25 },
                fontSize: 'var(--font-body)',
                ['&:hover']: {
                  backgroundColor: '#E55D10FF',
                },
              }}
            >
              {t('home.experienceDesign')}
            </Button>
          </Grid>
          <Grid container size='auto' sx={{ alignItems: 'flex-start' }}>
            <Grid size={12}>
              <Button
                endIcon={<ArrowForward />}
                onClick={() => {
                  const el = document.getElementById('global_nets');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                sx={{
                  color: 'white',
                  fontSize: 'var(--font-body)',
                  textTransform: 'none',
                  px: { xs: 1, md: 2 },
                }}
              >
                {t('home.viewGlobalProjects')}
              </Button>
            </Grid>
            <Grid size={12}>
              <Box
                sx={{
                  width: '100%',
                  height: '1px',
                  backgroundColor: '#FFFFFF80',
                  mt: 0.5,
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </ContentContainer>
    </Grid>
  );
};

export default HomePage;
