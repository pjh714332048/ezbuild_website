import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import { HOME_PAGE_KEY } from 'models/navigators/HOME_PAGE_KEY';
import { NAVIGATOR_ITEMS } from 'models/navigators/NAVIGATOR_ITEMS';

import LocaleButton from './LocaleButton';

const NavigatorHeader: React.FC = () => {
  const handleClick = (key: string) => {
    const el = document.getElementById(key);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppBar
      position='fixed'
      sx={{
        background: '#FFFFFFF5',
      }}
    >
      <Toolbar>
        <Grid
          container
          sx={{
            alignItems: 'center',
            width: 1,
          }}
        >
          <Grid size='grow'>
            <Box
              component='img'
              src='/ezbuild-ai-logo-transparent.svg'
              alt='ezBuild.ai'
              sx={{ m: 2, height: 32, display: 'block', cursor: 'pointer' }}
              onClick={() => handleClick(HOME_PAGE_KEY)}
            />
          </Grid>
          <Grid>
            {Object.entries(NAVIGATOR_ITEMS).map(([key, item]) => {
              return (
                <Button
                  key={item.enLabel}
                  onClick={() => handleClick(key)}
                  sx={{
                    mr: 4,
                    position: 'relative',
                    color: '#000000',

                    ['&::after']: {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '2px',
                      backgroundColor: '#FF6B1A',
                      transform: 'scaleX(0)',
                      transition: 'transform 0.3s ease',
                    },

                    ['&:hover::after']: {
                      transform: 'scaleX(1)',
                    },
                  }}
                >
                  {item.cnLabel}
                </Button>
              );
            })}
            <LocaleButton />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default NavigatorHeader;
