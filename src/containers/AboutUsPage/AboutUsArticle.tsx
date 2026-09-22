import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PageSubtitle from 'components/PageSubtitle';

const articleTags = ['数字化设计', '柔性制造', '全球供应链', '本地化交付'];

const AboutUsArticle: React.FC = () => {
  return (
    <Box
      sx={{
        height: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <PageSubtitle number='01' title='我们是谁' />
      <Box>
        <Grid container sx={{ width: 1 }}>
          <Grid size={{ xs: 12, lg: 'grow' }}>
            <Typography
              variant='h1'
              sx={{
                fontWeight: 'bold',
              }}
            >
              全球能力，
            </Typography>
            <Typography variant='h1' sx={{ color: '#E87722', fontWeight: 'bold' }}>
              本地落地。
            </Typography>
            <Typography
              variant='body1'
              sx={{
                my: { xs: 2, md: 4 },
                color: '#555555',
                fontSize: 'clamp(1.125rem, 1.6vw, 1.5rem)',
              }}
            >
              ezBuild
              是由清华大学背景团队创立的智能建造企业。我们以模块化设计为核心，整合标准化产品、先进制造、供应链与项目交付能力。
            </Typography>
            <Typography sx={{ color: '#637080', fontSize: 'clamp(0.95rem, 1.1vw, 1.125rem)' }}>
              我们不只提供建筑产品，更从前期规划一路参与到工厂预制、跨境物流、现场装配与后期运维，让每个环节更透明、更高效、更可控。
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
    </Box>
  );
};

export default AboutUsArticle;
