import ArrowForward from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
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
        backgroundImage: 'url(/home/hero-modular.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        alignItems: 'center',
      }}
    >
      <Grid container spacing={2} size={12} sx={{ width: '100%' }}>
        <Grid
          size={{ xs: 12, md: 3, lg: 3 }}
          sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
        />
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ px: { xs: 2, md: 0 } }}>
          <HeadTitle />
          <Grid
            container
            sx={{
              gap: { xs: 2, md: 3 },
              mt: { xs: 2, md: 4 },
              alignItems: 'center',
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
                  fontSize: { xs: '0.95rem', md: 'clamp(0.6875rem, 0.9167vw, 1.1rem)' },
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
                    fontSize: { xs: '0.95rem', md: 'clamp(0.6875rem, 0.9167vw, 1.1rem)' },
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
        </Grid>
        <Grid
          size={{ xs: 12, md: 3, lg: 3 }}
          sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
        />
      </Grid>
    </Grid>
  );
};

export default HomePage;
