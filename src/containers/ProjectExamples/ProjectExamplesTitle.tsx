import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'providers/useTranslation';

const ProjectExamplesTitle: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Grid
      container
      sx={{
        width: '100%',
        mt: 3,
        borderBottom: '1px solid #E0E0E0',
        pb: { md: 3, lg: 5 },
        rowGap: 2,
      }}
    >
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography
          variant='h1'
          sx={{ color: '#000000', fontSize: 'clamp(2.25rem, 4.5vw, 4.5rem)', fontWeight: 'bold' }}
        >
          {t('projectExamples.titleLine1')}
        </Typography>
        <Typography
          variant='h1'
          sx={{ color: '#E87722', fontSize: 'clamp(2.25rem, 4.5vw, 4.5rem)', fontWeight: 'bold' }}
        >
          {t('projectExamples.titleLine2')}
        </Typography>
      </Grid>
      <Grid size={{ md: 2 }} sx={{ display: { xs: 'none', md: 'block' } }}></Grid>
      <Grid
        size={{ xs: 12, md: 'grow' }}
        sx={{ textAlign: 'left', alignSelf: { xs: 'flex-start', md: 'flex-end' } }}
      >
        <Typography variant='body1' sx={{ color: '#637080' }}>
          {t('projectExamples.description')}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProjectExamplesTitle;
