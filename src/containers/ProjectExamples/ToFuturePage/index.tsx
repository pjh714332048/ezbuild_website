import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PageSubtitle from 'components/PageSubtitle';
import { useTranslation } from 'providers/useTranslation';

const ToFuturePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Grid
      container
      sx={{
        width: '100%',
        aspectRatio: { xs: 'auto', md: '16 / 9' },
        minHeight: { xs: 480, md: 0 },
        backgroundImage: 'url(/to_futrue_background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Grid
        size={{ xs: 12, md: 5 }}
        offset={{ xs: 0, md: 7 }}
        sx={{
          height: '100%',
          bgcolor: '#0F322DD9',
          px: { xs: 2, md: 6 },
          py: { xs: 4, md: 8 },
        }}
      >
        <Grid container sx={{ height: '100%', alignItems: 'center' }}>
          <Grid size={12}>
            <PageSubtitle
              number='09'
              title={t('projectExamples.toFuture.subtitle')}
              titleColor='#FFFFFFCC'
            />
            <Typography
              sx={{
                fontSize: { xs: 32, md: 'clamp(1.3333rem, 2.0833vw, 2.5rem)' },
                fontWeight: 700,
                color: '#FFFFFFFF',
                lineHeight: 1.3,
                my: 3,
              }}
            >
              {t('projectExamples.toFuture.titleWhite')}
              <br />
              {t('projectExamples.toFuture.titleLine2')}
              <Box component='span' sx={{ color: '#FF6B1AFF' }}>
                {t('projectExamples.toFuture.titleAccent')}
              </Box>
            </Typography>

            {/* 描述文字 */}
            <Typography
              sx={{
                fontSize: 'var(--font-small)',
                color: '#FFFFFFBF',
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              {t('projectExamples.toFuture.description')}
            </Typography>

            {/* 分隔线 */}
            <Divider sx={{ borderColor: '#FFFFFF33', mb: 4 }} />

            {/* 数据统计 */}
            <Grid container sx={{ width: '100%' }}>
              <Grid size='grow'>
                <Typography
                  sx={{
                    fontSize: 'clamp(1.2rem, 1.875vw, 2.25rem)',
                    fontWeight: 700,
                    color: '#FF6B1AFF',
                    lineHeight: 1.2,
                  }}
                >
                  {t('projectExamples.toFuture.wasteReductionValue')}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 'var(--font-caption)',
                    color: '#FFFFFFFF',
                    mt: 0.5,
                  }}
                >
                  {t('projectExamples.toFuture.wasteReduction')}
                </Typography>
              </Grid>
              <Grid size='grow'>
                <Typography
                  sx={{
                    fontSize: 'clamp(1.2rem, 1.875vw, 2.25rem)',
                    fontWeight: 700,
                    color: '#FF6B1AFF',
                    lineHeight: 1.2,
                  }}
                >
                  {t('projectExamples.toFuture.scheduleReductionValue')}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 'var(--font-caption)',
                    color: '#FFFFFFFF',
                    mt: 0.5,
                  }}
                >
                  {t('projectExamples.toFuture.scheduleReduction')}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ToFuturePage;
