import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'providers/useTranslation';

interface DotInfoCardProps {
  open: boolean;
  title: string;
  content: string;
  anchorEl: HTMLElement | null;
  onClose: () => void;
}

const cardWidth = 300;
const cardViewportMargin = 16;

const DotInfoCard: React.FC<DotInfoCardProps> = ({ open, title, content, anchorEl, onClose }) => {
  const { t } = useTranslation();
  return (
    <Popover
      open={open}
      onClose={onClose}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'center', horizontal: 'right' }}
      transformOrigin={{ vertical: 'center', horizontal: 'left' }}
      marginThreshold={cardViewportMargin}
      slotProps={{
        paper: {
          sx: {
            width: { xs: 'calc(100vw - 32px)', sm: cardWidth },
            maxWidth: `calc(100vw - ${cardViewportMargin * 2}px)`,
            margin: 0,
            borderRadius: 3,
            maxHeight: 'calc(100vh - 32px)',
            ['@supports (height: 100dvh)']: { maxHeight: 'calc(100dvh - 32px)' },
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            border: '1px solid #D0D0D0FF',
            boxShadow: '0 8px 32px 0 #00000040',
            backgroundColor: '#FFFFFFFF',
          },
        },
      }}
    >
      <Box
        sx={{
          px: 2,
          py: 1.5,
          flexShrink: 0,
          borderBottom: '1px solid #D0D0D0FF',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              fontSize: 15,
              fontWeight: 700,
              color: '#1A1A1AFF',
              lineHeight: 1.3,
            }}
          >
            {title}
          </Typography>
          <IconButton
            aria-label={t('common.close')}
            size='small'
            onClick={onClose}
            sx={{
              ml: 0.5,
              padding: 0.25,
              color: '#999999FF',
              ['&:hover']: {
                color: '#333333FF',
                backgroundColor: '#0000000D',
              },
            }}
          >
            <CloseIcon sx={{ fontSize: 16 }} />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ px: 2, py: 1.5, minHeight: 0, overflowY: 'auto', overflowWrap: 'anywhere' }}>
        <Typography
          sx={{
            fontSize: 14,
            color: '#333333FF',
            lineHeight: 1.7,
          }}
        >
          {content}
        </Typography>
      </Box>
    </Popover>
  );
};

export default DotInfoCard;
