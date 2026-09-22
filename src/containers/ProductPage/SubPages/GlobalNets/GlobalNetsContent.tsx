import Grid from '@mui/material/Grid';

import GlobalNetsMap from './GlobalNetsMap';
import GlobalNetsTable from './GlobalNetsTable';

const GlobalNetsContent: React.FC = () => (
  <Grid container sx={{ width: '100%', height: '100%', alignItems: 'stretch' }}>
    <Grid size={{ md: 7, lg: 8 }} sx={{ display: 'flex', flexDirection: 'column', minHeight: 0 }}>
      <GlobalNetsMap />
    </Grid>
    <Grid size={{ md: 5, lg: 4 }} sx={{ display: 'flex', flexDirection: 'column', minHeight: 0 }}>
      <GlobalNetsTable />
    </Grid>
  </Grid>
);

export default GlobalNetsContent;
