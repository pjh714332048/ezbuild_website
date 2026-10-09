import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import PageGrid from 'components/PageGrid';
import PageSubtitle from 'components/PageSubtitle';
import { useTranslation } from 'providers/useTranslation';

const timelineSteps = [
  { number: '01', zhKey: 'step1Zh', enKey: 'step1En' },
  { number: '02', zhKey: 'step2Zh', enKey: 'step2En' },
  { number: '03', zhKey: 'step3Zh', enKey: 'step3En' },
  { number: '04', zhKey: 'step4Zh', enKey: 'step4En' },
  { number: '05', zhKey: 'step5Zh', enKey: 'step5En' },
] as const;

const bulletKeys = ['bullet1', 'bullet2', 'bullet3'] as const;

const FullCycleDelivery: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  return (
    <Box id='full_cycle_delivery'>
      <PageGrid
        pageBackground='#F5F0EBFF'
        content={
          <Box>
            <PageSubtitle number='08' title={t('projectExamples.fullCycleDelivery.subtitle')} />
            <Grid container sx={{ mt: { xs: 2, md: 4 }, alignItems: 'flex-end' }}>
              <Grid size={{ xs: 12, md: 7 }}>
                <Typography
                  sx={{
                    fontSize: 'clamp(2.1333rem, 3.3333vw, 4rem)',
                    fontWeight: 700,
                    color: '#1A1A2EFF',
                    lineHeight: 1.15,
                  }}
                >
                  {t('projectExamples.fullCycleDelivery.title')}
                </Typography>
              </Grid>
              <Grid size={{ xs: 0, md: 1 }} sx={{ display: { xs: 'none', md: 'block' } }} />
              <Grid size={{ xs: 12, md: 4 }}>
                <Typography
                  sx={{
                    fontSize: 'clamp(0.75rem, 0.8333vw, 1rem)',
                    color: '#637080FF',
                    lineHeight: 1.7,
                  }}
                >
                  {t('projectExamples.fullCycleDelivery.description')}
                </Typography>
              </Grid>
            </Grid>

            {/* Timeline */}
            <Stepper
              activeStep={timelineSteps.length}
              orientation={isMobile ? 'vertical' : 'horizontal'}
              {...(isMobile ? {} : { alternativeLabel: true })}
              sx={{
                mt: { xs: 3, md: 5, lg: 8 },
                px: '5%',
                ['& .MuiStepConnector-line']: {
                  borderColor: '#C8CDD3FF',
                },
              }}
            >
              {timelineSteps.map(step => (
                <Step key={step.number} completed>
                  <StepLabel
                    slots={{
                      stepIcon: () => (
                        <Box
                          sx={{
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            bgcolor: '#FF6B1AFF',
                          }}
                        />
                      ),
                    }}
                    sx={{
                      ['& .MuiStepLabel-labelContainer']: {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 0.5,
                      },
                    }}
                    optional={
                      <>
                        <Typography
                          sx={{
                            fontSize: 'clamp(0.75rem, 0.8333vw, 1rem)',
                            fontWeight: 700,
                            color: '#1A1A2EFF',
                            mt: 1,
                          }}
                        >
                          {t(`projectExamples.fullCycleDelivery.${step.zhKey}`)}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: 'clamp(0.625rem, 0.5729vw, 0.6875rem)',
                            color: '#9BA3AEFF',
                            letterSpacing: '0.1042vw',
                            fontWeight: 500,
                          }}
                        >
                          {t(`projectExamples.fullCycleDelivery.${step.enKey}`)}
                        </Typography>
                      </>
                    }
                  >
                    <Typography
                      sx={{
                        fontSize: 'clamp(0.625rem, 0.6771vw, 0.8125rem)',
                        color: '#9BA3AEFF',
                        fontWeight: 500,
                      }}
                    >
                      {step.number}
                    </Typography>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>

            {/* Content Card */}
            <Grid
              container
              sx={{
                mt: { xs: 2, md: 5, lg: 8 },
                borderRadius: 2,
                overflow: 'hidden',
              }}
            >
              <Grid size={{ xs: 12, md: 7.2 }} sx={{ overflow: 'hidden' }}>
                <img
                  src='/project_examples/factory.jpeg'
                  alt={t('projectExamples.fullCycleDelivery.subtitle')}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Grid>
              <Grid
                size={{ xs: 12, md: 4.8 }}
                sx={{ bgcolor: '#0A1628FF', p: { xs: 2, md: 3, lg: 5 } }}
              >
                <Grid container sx={{ height: '100%', alignItems: 'center' }}>
                  <Grid size={12}>
                    <Typography
                      sx={{
                        fontSize: 'clamp(0.625rem, 0.7292vw, 0.875rem)',
                        color: '#E87722FF',
                        fontWeight: 600,
                        mb: 2,
                      }}
                    >
                      {t('projectExamples.fullCycleDelivery.cardTitle')}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 'clamp(0.9333rem, 1.4583vw, 1.75rem)',
                        fontWeight: 700,
                        color: '#FFFFFFFF',
                        lineHeight: 1.4,
                        mb: 4,
                      }}
                    >
                      {t('projectExamples.fullCycleDelivery.cardSubtitle')}
                    </Typography>

                    {bulletKeys.map((key, index) => (
                      <Grid
                        key={key}
                        container
                        sx={{
                          alignItems: 'flex-start',
                          gap: 1.5,
                          py: 2,
                          borderBottom:
                            index < bulletKeys.length - 1 ? '1px solid #FFFFFF1F' : 'none',
                        }}
                      >
                        <Grid size='auto' sx={{ mt: 1 }}>
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              bgcolor: '#FF6B1AFF',
                            }}
                          />
                        </Grid>
                        <Grid size='grow'>
                          <Typography
                            sx={{
                              fontSize: 'clamp(0.625rem, 0.7292vw, 0.875rem)',
                              color: '#FFFFFFCC',
                              lineHeight: 1.6,
                            }}
                          >
                            {t(`projectExamples.fullCycleDelivery.${key}`)}
                          </Typography>
                        </Grid>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        }
      />
    </Box>
  );
};

export default FullCycleDelivery;
