import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
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

const FullCycleDelivery: React.FC = () => (
  <Box id='full_cycle_delivery'>
    <PageGrid
      pageBackground='#F5F0EB'
      content={
        <Box>
          <PageSubtitle number='08' title='全周期交付' />
          <Grid container sx={{ mt: 4 }}>
            <Grid size={7}>
              <Typography
                sx={{
                  fontSize: 72,
                  fontWeight: 700,
                  color: '#1A1A2E',
                  lineHeight: 1.15,
                }}
              >
                一次协同，全程可控
              </Typography>
            </Grid>
            <Grid size={1} />
            <Grid size={4} sx={{ display: 'flex', alignItems: 'flex-end' }}>
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
            alternativeLabel
            sx={{
              mt: 8,
              px: '5%',
              '& .MuiStepConnector-line': {
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
                    '& .MuiStepLabel-labelContainer': {
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
          <Box
            sx={{
              mt: 8,
              display: 'flex',
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <Box sx={{ flex: '0 0 60%', overflow: 'hidden' }}>
              <img
                src='/project_examples/factory.jpeg'
                alt='全周期交付'
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
            <Box
              sx={{
                flex: '0 0 40%',
                bgcolor: '#0A1628',
                p: 5,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
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
                  fontSize: 28,
                  fontWeight: 700,
                  color: '#FFFFFF',
                  lineHeight: 1.4,
                  mb: 4,
                }}
              >
                更少现场变量，更多交付把握。
              </Typography>

              {bulletItems.map((item, index) => (
                <Box
                  key={item}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1.5,
                    py: 2,
                    borderBottom: index < bulletItems.length - 1 ? '1px solid #FFFFFF1F' : 'none',
                  }}
                >
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      bgcolor: '#FF6B1A',
                      flexShrink: 0,
                      mt: 1,
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: 14,
                      color: '#FFFFFFCC',
                      lineHeight: 1.6,
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      }
    />
  </Box>
);

export default FullCycleDelivery;
