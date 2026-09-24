import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import PageGrid from 'components/PageGrid';
import PageSubtitle from 'components/PageSubtitle';

const timelineSteps = [
  { number: '01', zh: '需求与研判', en: 'DISCOVER' },
  { number: '02', zh: '方案与配置', en: 'DESIGN' },
  { number: '03', zh: '深化与生产', en: 'MANUFACTURE' },
  { number: '04', zh: '物流与装配', en: 'ASSEMBLE' },
  { number: '05', zh: '交付与运维', en: 'OPERATE' },
];

const bulletItems = [
  '工厂端精准下料与标准化质量管理',
  '设计、生产、运输、安装数据协同',
  '减少返工、材料损耗与多工种等待',
];

const FullCycleDelivery: React.FC = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  return (
    <Box id='full_cycle_delivery'>
      <PageGrid
        pageBackground='#F5F0EB'
        content={
          <Box>
            <PageSubtitle number='08' title='全周期交付' />
            <Grid container sx={{ mt: { xs: 2, md: 4 }, alignItems: 'flex-end' }}>
              <Grid size={{ xs: 12, md: 7 }}>
                <Typography
                  sx={{
                    fontSize: 'clamp(2.25rem, 4.5vw, 4.5rem)',
                    fontWeight: 700,
                    color: '#1A1A2E',
                    lineHeight: 1.15,
                  }}
                >
                  一次协同，全程可控
                </Typography>
              </Grid>
              <Grid size={{ xs: 0, md: 1 }} sx={{ display: { xs: 'none', md: 'block' } }} />
              <Grid size={{ xs: 12, md: 4 }}>
                <Typography
                  sx={{
                    fontSize: 16,
                    color: '#637080',
                    lineHeight: 1.7,
                  }}
                >
                  把现场的不确定性前置到设计与工厂，用清晰节点管理时间、成本与品质。
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
                  borderColor: '#C8CDD3',
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
                            bgcolor: '#FF6B1A',
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
                            fontSize: 16,
                            fontWeight: 700,
                            color: '#1A1A2E',
                            mt: 1,
                          }}
                        >
                          {step.zh}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: 11,
                            color: '#9BA3AE',
                            letterSpacing: 2,
                            fontWeight: 500,
                          }}
                        >
                          {step.en}
                        </Typography>
                      </>
                    }
                  >
                    <Typography
                      sx={{
                        fontSize: 13,
                        color: '#9BA3AE',
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
                  alt='全周期交付'
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Grid>
              <Grid
                size={{ xs: 12, md: 4.8 }}
                sx={{ bgcolor: '#0A1628', p: { xs: 2, md: 3, lg: 5 } }}
              >
                <Grid container sx={{ height: '100%', alignItems: 'center' }}>
                  <Grid size={12}>
                    <Typography
                      sx={{
                        fontSize: 14,
                        color: '#E87722',
                        fontWeight: 600,
                        mb: 2,
                      }}
                    >
                      制造确定性
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 'clamp(1.25rem, 1.8vw, 1.75rem)',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        lineHeight: 1.4,
                        mb: 4,
                      }}
                    >
                      更少现场变量，更多交付把握。
                    </Typography>

                    {bulletItems.map((item, index) => (
                      <Grid
                        key={item}
                        container
                        sx={{
                          alignItems: 'flex-start',
                          gap: 1.5,
                          py: 2,
                          borderBottom:
                            index < bulletItems.length - 1 ? '1px solid #FFFFFF1F' : 'none',
                        }}
                      >
                        <Grid size='auto' sx={{ mt: 1 }}>
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              bgcolor: '#FF6B1A',
                            }}
                          />
                        </Grid>
                        <Grid size='grow'>
                          <Typography
                            sx={{
                              fontSize: 14,
                              color: '#FFFFFFCC',
                              lineHeight: 1.6,
                            }}
                          >
                            {item}
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
