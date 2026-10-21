import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'providers/useTranslation';

const capabilityTags = ['AI', 'BIM', 'DMA', 'SCM'];

const BusinessCapabilityFooter: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Grid container sx={{ my: 4 }}>
      <Grid size='grow'>
        <Box>
          <Typography sx={{ color: '#FFFFFFCC' }}>
            <span style={{ marginRight: 10 }}>{t('intelligentDesign.bcFooterWhite')}</span>
            <span style={{ color: '#FF6B1A' }}>{t('intelligentDesign.bcFooterAccent')}</span>
            <span style={{ marginLeft: 10 }}>{t('intelligentDesign.bcFooterWhiteEnd')}</span>
          </Typography>
        </Box>
      </Grid>
      <Grid>
        <Grid container sx={{ gap: 1 }}>
          {capabilityTags.map(tag => (
            <Grid
              key={tag}
              size='auto'
              sx={{
                p: 1,
                color: '#FFFFFFCC',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid #FFFFFF80',
                borderRadius: 2,
                minWidth: 80,
                textAlign: 'center',
              }}
            >
              {tag}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BusinessCapabilityFooter;
