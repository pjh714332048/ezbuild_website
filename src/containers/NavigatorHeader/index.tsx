import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
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
        <Grid container sx={{ alignItems: 'center', width: 1 }}>
          <Grid size='grow'>
            <Typography variant='h6' noWrap component='div' sx={{ m: 2, color: '' }}>
              <span style={{ color: '#000000' }}>ez</span>
              <span style={{ color: '#FF6B1A' }}>B</span>
              <span style={{ color: '#000000' }}>uild.ai</span>
            </Typography>
          </Grid>
          <Grid>
            {Object.values(NAVIGATOR_ITEMS).map(item => (
              <Button
                key={item.enLabel}
                onClick={() => handleClick(item.enLabel)}
                sx={{
                  mr: 4,
                  position: 'relative',
                  color: '#000000',
                  // eslint-disable-next-line @typescript-eslint/naming-convention
                  '&::after': {
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
                  // eslint-disable-next-line @typescript-eslint/naming-convention
                  '&:hover::after': {
                    transform: 'scaleX(1)',
                  },
                }}
              >
                {item.cnLabel}
              </Button>
            ))}
            <LocaleButton />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default NavigatorHeader;
