import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'providers/useTranslation';

/** 首页标题 — 纯 UI 组件 */
const HeadTitle: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Grid container direction='row' wrap='nowrap' sx={{ alignItems: 'center', mb: 1.5 }}>
        <Grid size='auto'>
          <Box sx={{ width: 32, height: 3, bgcolor: '#FF6B1ACC', borderRadius: 1 }} />
        </Grid>
        <Grid size='grow' sx={{ pl: 1.5 }}>
          <Typography
            variant='body2'
            component='span'
            sx={{
              color: '#FFFFFFBF',
              letterSpacing: 1.5,
              whiteSpace: { xs: 'normal', sm: 'nowrap' },
            }}
          >
            {t('home.designSubtitle')}
          </Typography>
        </Grid>
      </Grid>
      <Typography variant='h1' component='h1' sx={{ fontWeight: 'bold', color: '#FFFFFF' }}>
        {t('home.titleLine1')}
      </Typography>
      <Typography variant='h1' component='h1' sx={{ fontWeight: 'bold' }}>
        <span style={{ color: '#FFFFFF' }}>{t('home.titleLine2White')}</span>
        <span style={{ color: '#FF6B1A' }}>{t('home.titleLine2Accent')}</span>
      </Typography>
      <Typography variant='body1' component='p' sx={{ color: '#FFFFFFC2' }}>
        {t('home.description')}
      </Typography>
      <Typography variant='body1' component='p' sx={{ color: '#FFFFFFC2' }}>
        {t('home.descriptionLine2')}
      </Typography>
    </Box>
  );
};

export default HeadTitle;
