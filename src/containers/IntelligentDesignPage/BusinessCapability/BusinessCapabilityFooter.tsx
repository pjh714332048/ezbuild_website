import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const CapabilityTags = ['AI', 'BIM', 'DMA', 'SCM'];

const BusinessCapabilityFooter: React.FC = () => (
  <Grid container sx={{ my: 4 }}>
    <Grid size='grow'>
      <Box>
        <Typography sx={{ color: '#FFFFFF88' }}>
          <span style={{ marginRight: 10 }}>标准化效率</span>
          <span style={{ color: '#FF6B1A' }}>x</span>
          <span style={{ marginLeft: 10 }}>个性化体验</span>
        </Typography>
      </Box>
    </Grid>
    <Grid>
      <Grid container sx={{ gap: 1 }}>
        {CapabilityTags.map(tag => (
          <Grid
            key={tag}
            size='auto'
            sx={{
              p: 1,
              backgroundColor: 'transparent',
              border: '1px solid #FFFFFF88',
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

export default BusinessCapabilityFooter;
