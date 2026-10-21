import ArrowForward from '@mui/icons-material/ArrowForward';
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
  <Grid
    container
    sx={[
      {
        width: '100%',
        alignItems: 'center',
        gap: 3,
        p: { md: 3, lg: 5 },
        borderTop: '1px solid #2D2D2DFF',
        transition: 'padding 0.3s ease',
      },
      isLastItem && { borderBottom: '1px solid #2D2D2DFF' },
      {
        ['&:hover']: {
          py: { md: 4, lg: 7 },
          background: '#FFFFFF11',
          ['& .capability-icon-btn']: {
            border: '1px solid #FF6B1AFF',
            backgroundColor: '#FF6B1AFF',
            color: '#FFFFFFFF',
          },
        },
      },
    ]}
  >
    <Grid container size='grow' sx={{ minWidth: 0 }}>
      <Grid size={1}>
        <Typography
          variant='h4'
          sx={{
            color: '#FF6B1AFF',
            fontWeight: 700,
            minWidth: 48,
            fontSize: 'clamp(1.125rem, 1.25vw, 1.5rem)',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </Typography>
      </Grid>
      <Grid size={4}>
        <Typography
          variant='h4'
          sx={{ color: '#FFFFFFFF', fontWeight: 600, fontSize: 'clamp(1.125rem, 1.25vw, 1.5rem)' }}
        >
          {title}
        </Typography>
      </Grid>
      <Grid size='grow' sx={{ minWidth: 0 }}>
        <Typography variant='body2' sx={{ color: '#FFFFFF91' }}>
          {description}
        </Typography>
      </Grid>
    </Grid>

    <IconButton
      className='capability-icon-btn'
      sx={{
        border: '1px solid #FFFFFFFF',
        borderRadius: '50%',
        color: '#FFFFFFFF',
        transition: 'all 0.3s ease',
      }}
    >
      <ArrowForward />
    </IconButton>
  </Grid>
);

export default CapabilityListItem;
