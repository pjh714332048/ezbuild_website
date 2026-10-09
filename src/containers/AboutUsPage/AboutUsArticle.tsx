import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PageSubtitle from 'components/PageSubtitle';
import { useTranslation } from 'providers/useTranslation';

const AboutUsArticle: React.FC = () => {
  const { t } = useTranslation();
  const articleTags = [t('about.tags.0'), t('about.tags.1'), t('about.tags.2'), t('about.tags.3')];

  return (
    <Grid container sx={{ height: 1, alignItems: 'center' }}>
      <Grid size={12}>
        <PageSubtitle number='01' title={t('about.subtitle')} />
        <Box>
          <Grid container sx={{ width: 1 }}>
            <Grid size={{ xs: 12, md: 10, lg: 10 }}>
              <Typography
                variant='h1'
                sx={{
                  fontWeight: 'bold',
                }}
              >
                {t('about.headingWhite')}
              </Typography>
              <Typography variant='h1' sx={{ color: '#E87722FF', fontWeight: 'bold' }}>
                {t('about.headingAccent')}
              </Typography>
              <Typography
                variant='body1'
                sx={{
                  my: { xs: 2, md: 4 },
                  color: '#555555FF',
                  fontSize: 'clamp(0.8rem, 1.25vw, 1.5rem)',
                }}
              >
                {t('about.body')}
              </Typography>
              <Typography
                sx={{ color: '#637080FF', fontSize: 'clamp(0.7rem, 0.9375vw, 1.125rem)' }}
              >
                {t('about.bodySecondary')}
              </Typography>
              <Grid container spacing={2} sx={{ mt: { xs: 2, md: 3, lg: 4 } }}>
                {articleTags.map(tag => (
                  <Grid key={tag} size={{ xs: 6, sm: 3, lg: 3 }}>
                    <Box
                      sx={{
                        border: '1px solid #3F3F3F44',
                        py: 1,
                        px: { xs: 1, md: 2 },
                        textAlign: 'center',
                        fontSize: 'clamp(0.625rem, 0.7292vw, 0.875rem)',
                        color: '#637080FF',
                      }}
                    >
                      {tag}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid size={{ md: 2, lg: 2 }} sx={{ display: { xs: 'none', md: 'block' } }}></Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AboutUsArticle;
