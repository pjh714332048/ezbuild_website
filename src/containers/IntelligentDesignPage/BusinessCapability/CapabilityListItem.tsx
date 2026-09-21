import ArrowForward from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

interface CapabilityListItemProps {
  index: number;
  title: string;
  description: string;
  isLastItem: boolean;
}

const CapabilityListItem: React.FC<CapabilityListItemProps> = ({
  index,
  title,
  description,
  isLastItem,
}) => (
  <Box
    sx={[
      {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
        p: 5,
        borderTop: '1px solid #2D2D2D',
        transition: 'padding 0.3s ease',
      },
      isLastItem && { borderBottom: '1px solid #2D2D2D' },
      {
        ['&:hover']: {
          py: 7,
          background: '#FFFFFF11',
          ['& .capability-icon-btn']: {
            border: '1px solid #FF6B1A',
            backgroundColor: '#FF6B1A',
            color: '#FFFFFF',
          },
        },
      },
    ]}
  >
    <Grid container sx={{ flex: 1, minWidth: 0 }}>
      <Grid size={1}>
        <Typography
          variant='h4'
          sx={{
            color: '#FF6B1A',
            fontWeight: 700,
            flexShrink: 0,
            minWidth: 48,
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </Typography>
      </Grid>
      <Grid size={4}>
        <Box
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', gap: 2, flex: 1 }}
        >
          <Typography variant='h4' sx={{ color: '#FFFFFF', fontWeight: 600, flexShrink: 0 }}>
            {title}
          </Typography>
        </Box>
      </Grid>
      <Grid size='grow'>
        <Box
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', gap: 2, flex: 1 }}
        >
          <Typography variant='body2' sx={{ color: '#FFFFFF91' }}>
            {description}
          </Typography>
        </Box>
      </Grid>
    </Grid>

    <IconButton
      className='capability-icon-btn'
      sx={{
        flexShrink: 0,
        border: '1px solid #FFFFFF',
        borderRadius: '50%',
        color: '#FFFFFF',
        transition: 'all 0.3s ease',
      }}
    >
      <ArrowForward />
    </IconButton>
  </Box>
);

export default CapabilityListItem;
