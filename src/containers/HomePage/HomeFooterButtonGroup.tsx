import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const HomeFooterButtonGroup: React.FC = () => {
  return (
    <Grid container spacing={2} sx={{ width: '100%' }}>
      <Grid>
        <Button>体验智能设计</Button>
      </Grid>
      <Grid>
        <Button>查看全球项目</Button>
      </Grid>
    </Grid>
  );
};

export default HomeFooterButtonGroup;
