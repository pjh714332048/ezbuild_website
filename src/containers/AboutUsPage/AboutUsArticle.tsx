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
            <Grid size={{ xs: 12, lg: 'grow' }}>
              <Typography
                variant='h1'
                sx={{
                  fontWeight: 'bold',
                }}
              >
                {t('about.headingWhite')}
              </Typography>
              <Typography variant='h1' sx={{ color: '#E87722', fontWeight: 'bold' }}>
                {t('about.headingAccent')}
              </Typography>
              <Typography
                variant='body1'
                sx={{
                  my: { xs: 2, md: 4 },
                  color: '#555555',
                  fontSize: 'clamp(1.125rem, 1.6vw, 1.5rem)',
                }}
              >
                {t('about.body')}
              </Typography>
              <Typography sx={{ color: '#637080', fontSize: 'clamp(0.95rem, 1.1vw, 1.125rem)' }}>
                {t('about.bodySecondary')}
              </Typography>
              <Grid container spacing={2} sx={{ mt: { xs: 1, md: 2 } }}>
                {articleTags.map(tag => (
                  <Grid key={tag} size={{ xs: 6, sm: 3, lg: 2 }}>
                    <Box
                      sx={{
                        border: '1px solid #3f3f3f44',
                        py: 1,
                        textAlign: 'center',
                        fontSize: '12px',
                        color: '#637080',
                      }}
                    >
                      {tag}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid size={{ lg: 'grow' }} sx={{ display: { xs: 'none', lg: 'block' } }}></Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AboutUsArticle;
