import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import PageGrid from 'components/PageGrid';
import { HOME_PAGE_KEY } from 'models/navigators/HOME_PAGE_KEY';
import { NAVIGATOR_ITEMS } from 'models/navigators/NAVIGATOR_ITEMS';

const footerLinks: { key: string; label: string }[] = [
  { key: 'about', label: NAVIGATOR_ITEMS.about.cnLabel },
  { key: 'intelligence_design', label: NAVIGATOR_ITEMS.intelligence_design.cnLabel },
  { key: 'business_capability', label: NAVIGATOR_ITEMS.business_capability.cnLabel },
  { key: 'project_examples', label: NAVIGATOR_ITEMS.project_examples.cnLabel },
];

const Footer: React.FC = () => {
  const handleNavigate = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerContent = (
    <>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            component='img'
            src='/ezbuild-ai-logo-transparent.svg'
            alt='ezBuild.ai'
            sx={{
              height: 36,
              display: 'block',
              mb: 2,
              cursor: 'pointer',
              filter: 'brightness(0) invert(1)',
            }}
            onClick={() => handleNavigate(HOME_PAGE_KEY)}
          />
          <Typography
            sx={{
              color: '#8899AABB',
              fontSize: 13,
              lineHeight: 1.7,
              maxWidth: '100%',
            }}
          >
            智能设计与模块化建造综合解决方案提供商
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 6, sm: 3 }} offset='auto'>
              <Typography
                sx={{
                  color: '#8899AAFF',
                  fontSize: 12,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: 1.5,
                  mb: 2,
                }}
              >
                浏览
              </Typography>
              <Grid container spacing={1.5}>
                {footerLinks.map(link => (
                  <Grid key={link.key} size={12}>
                    <Link
                      component='button'
                      type='button'
                      underline='none'
                      onClick={() => handleNavigate(link.key)}
                      sx={{
                        color: '#CCDDEEFF',
                        fontSize: 14,
                        textAlign: 'left',
                        transition: 'color 0.2s ease',
                        ['&:hover']: {
                          color: '#FF6B1AFF',
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid size={{ xs: 6, sm: 3 }}>
              <Typography
                sx={{
                  color: '#8899AAFF',
                  fontSize: 12,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: 1.5,
                  mb: 2,
                }}
              >
                联系
              </Typography>
              <Grid container spacing={1.5}>
                <Grid size={12}>
                  <Link
                    href='mailto:mkt@ezbuild.design'
                    underline='none'
                    sx={{
                      color: '#CCDDEEFF',
                      fontSize: 14,
                      transition: 'color 0.2s ease',
                      ['&:hover']: { color: '#FF6B1AFF' },
                    }}
                  >
                    mkt@ezbuild.design
                  </Link>
                </Grid>
                <Grid size={12}>
                  <Link
                    href='tel:+8615800877849'
                    underline='none'
                    sx={{
                      color: '#CCDDEEFF',
                      fontSize: 14,
                      transition: 'color 0.2s ease',
                      ['&:hover']: { color: '#FF6B1AFF' },
                    }}
                  >
                    +86 15800877849
                  </Link>
                </Grid>
                <Grid size={12}>
                  <Link
                    component='button'
                    type='button'
                    underline='none'
                    onClick={handleBackToTop}
                    sx={{
                      color: '#CCDDEEFF',
                      fontSize: 14,
                      textAlign: 'left',
                      transition: 'color 0.2s ease',
                      ['&:hover']: { color: '#FF6B1AFF' },
                    }}
                  >
                    返回顶部 ↑
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Divider */}
      <Divider sx={{ borderColor: '#FFFFFF12', my: 4 }} />

      {/* Bottom section */}
      <Grid container sx={{ alignItems: 'center' }}>
        <Grid size='grow'>
          <Typography sx={{ color: '#8899AA99', fontSize: 12 }}>
            © 2026 ezBuild.ai. 保留所有权利。
          </Typography>
        </Grid>
        <Grid>
          <Typography
            sx={{
              color: '#8899AA99',
              fontSize: 12,
              letterSpacing: 2,
            }}
          >
            CHINA · JAPAN · GLOBAL
          </Typography>
        </Grid>
      </Grid>
    </>
  );

  return (
    <Box component='footer' sx={{ width: '100%' }}>
      <PageGrid content={footerContent} pageBackground='#0A1628FF' />
    </Box>
  );
};

export default Footer;
