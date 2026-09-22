import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PageSubtitle from 'components/PageSubtitle';

import ContactGrid from './ContactGrid';

const ContactUsContent: React.FC = () => (
  <>
    <PageSubtitle number='10' title='开启对话' numberColor='#FFFFFF' titleColor='#FFFFFF' />
    <Grid container sx={{ my: 4 }}>
      <Grid size={{ xs: 12, md: 5, lg: 'grow' }}>
        <Typography variant='h1' sx={{ color: '#FFFFFF', fontWeight: 'bold' }}>
          下一座建筑，
        </Typography>
        <Typography variant='h1' sx={{ color: '#FFFFFF', fontWeight: 'bold' }}>
          <span>从一个</span>
          <span style={{ color: '#000' }}>清晰问题</span>
          <span>开始</span>
        </Typography>
      </Grid>
      <Grid size={{ md: 0.5, lg: 2 }} sx={{ display: { xs: 'none', md: 'block' } }} />
      <Grid size={{ xs: 12, md: 5.5, lg: 4 }}>
        <ContactGrid />
      </Grid>
    </Grid>
  </>
);

export default ContactUsContent;
