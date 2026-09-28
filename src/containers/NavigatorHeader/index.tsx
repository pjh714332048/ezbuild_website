import { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { HOME_PAGE_KEY } from 'models/navigators/HOME_PAGE_KEY';
import { NAVIGATOR_ITEMS } from 'models/navigators/NAVIGATOR_ITEMS';
import { useTranslation } from 'providers/useTranslation';

import LocaleButton from './LocaleButton';

const drawerWidth = 280;

const NavigatorHeader: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { language } = useTranslation();
  const getLabel = (item: (typeof NAVIGATOR_ITEMS)[keyof typeof NAVIGATOR_ITEMS]) =>
    language === 'en' ? item.enLabel : item.cnLabel;

  const handleClick = (key: string) => {
    const el = document.getElementById(key);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDrawerNav = (key: string) => {
    setDrawerOpen(false);
    setTimeout(() => handleClick(key), 200);
  };

  return (
    <>
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
            {isMobile ? (
              <Grid container sx={{ alignItems: 'center', gap: 1 }}>
                <LocaleButton />
                <IconButton
                  edge='end'
                  aria-label='open navigation menu'
                  onClick={() => setDrawerOpen(true)}
                  sx={{ color: '#000000DE', mr: 1 }}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            ) : (
              <Grid>
                {Object.entries(NAVIGATOR_ITEMS).map(([key, item]) => {
                  return (
                    <Button
                      key={item.enLabel}
                      onClick={() => handleClick(key)}
                      sx={{
                        mr: { md: 2, lg: 4 },
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
                      {getLabel(item)}
                    </Button>
                  );
                })}
                <LocaleButton />
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor='right'
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            background: '#FFFFFFFA',
          },
        }}
      >
        <Grid container sx={{ pt: 2, pb: 1, px: 2, alignItems: 'center' }}>
          <Grid size='auto'>
            <Box
              component='img'
              src='/ezbuild-ai-logo-transparent.svg'
              alt='ezBuild.ai'
              sx={{ height: 28, display: 'block' }}
            />
          </Grid>
          <Grid size='auto' offset='auto'>
            <LocaleButton />
          </Grid>
        </Grid>
        <Divider sx={{ mx: 2, borderColor: '#0000001A' }} />
        <List sx={{ pt: 1 }}>
          {Object.entries(NAVIGATOR_ITEMS).map(([key, item]) => (
            <ListItemButton
              key={item.enLabel}
              onClick={() => handleDrawerNav(key)}
              sx={{
                mx: 2,
                mb: 0.5,
                borderRadius: 2,
                py: 1.5,
                ['&:hover']: {
                  backgroundColor: '#FF6B1A14',
                },
              }}
            >
              <ListItemText
                primary={getLabel(item)}
                secondary={language === 'en' ? item.cnLabel : item.enLabel}
                slotProps={{
                  primary: { sx: { fontSize: '1rem', fontWeight: 500, color: '#000000DE' } },
                  secondary: { sx: { fontSize: '0.75rem', color: '#00000099' } },
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
};
export default NavigatorHeader;
