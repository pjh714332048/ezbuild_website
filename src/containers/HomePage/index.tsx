import ArrowForward from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { HOME_PAGE_KEY } from 'models/navigators/HOME_PAGE_KEY';

import HeadTitle from './HeadTitle';

const HomePage: React.FC = () => (
  <Box
    id={HOME_PAGE_KEY}
    sx={{
      backgroundImage: 'url(/home/hero-modular.jpeg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Grid container spacing={2} sx={{ width: '100%' }}>
      <Grid size={3} />
      <Grid size={6}>
        <HeadTitle />
        <Box sx={{ display: 'flex', gap: 3, mt: 4, alignItems: 'center' }}>
          <Button
            variant='contained'
            endIcon={<ArrowForward />}
            onClick={() => {
              const el = document.getElementById('intelligent-design');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            sx={{
              backgroundColor: '#FF6B1A',
              color: 'white',
              px: 4,
              py: 2,
              fontSize: '1.1rem',
              ['&:hover']: {
                backgroundColor: '#e55d10',
              },
            }}
          >
            体验智能设计
          </Button>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Button
              endIcon={<ArrowForward />}
              sx={{
                color: 'white',
                fontSize: '1.1rem',
                textTransform: 'none',
              }}
            >
              查看全球项目
            </Button>
            <Box
              sx={{
                width: '100%',
                height: '1px',
                backgroundColor: 'rgba(255,255,255,0.5)',
                mt: 0.5,
              }}
            />
          </Box>
        </Box>
      </Grid>
      <Grid size={3} />
    </Grid>
  </Box>
);

export default HomePage;
