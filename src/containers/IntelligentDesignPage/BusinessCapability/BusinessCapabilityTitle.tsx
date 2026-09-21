import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PageSubtitle from 'components/PageSubtitle';

const BusinessCapabilityTitle: React.FC = () => (
  <>
    <PageSubtitle number='03' title='业务能力' />
    <Grid container sx={{ width: '100%', mt: 3 }}>
      <Grid size={6}>
        <Typography variant='h2' sx={{ color: '#FFFFFF' }}>
          <span style={{ color: '#FFFFFF', fontWeight: 'bold' }}>从一张草图，到一座</span>
          <span style={{ color: '#FF6B1A', fontWeight: 'bold' }}>真实建筑</span>
        </Typography>
      </Grid>
      <Grid size={2} />
      <Grid size='grow' sx={{ textAlign: 'left', alignSelf: 'flex-end' }}>
        <Typography variant='body1' sx={{ color: '#FFFFFF94' }}>
          一套贯穿设计、生产与交付的全周期协同体系。
        </Typography>
      </Grid>
    </Grid>
  </>
);
export default BusinessCapabilityTitle;
