import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

interface DotInfoCardProps {
  open: boolean;
  title: string;
  content: string;
  anchorPosition: { left: number; top: number };
  onClose: () => void;
}

const cardWidth = 300;
const dotOffset = 14 + 10;
const cardViewportMargin = 16;

const getCardLeft = (anchorLeft: number): number => {
  const viewportWidth = window.innerWidth;
  const actualCardWidth = viewportWidth < 600 ? viewportWidth - cardViewportMargin * 2 : cardWidth;
  return Math.max(
    cardViewportMargin,
    Math.min(anchorLeft + dotOffset, viewportWidth - actualCardWidth - cardViewportMargin),
  );
};

const DotInfoCard: React.FC<DotInfoCardProps> = ({
  open,
  title,
  content,
  anchorPosition,
  onClose,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      hideBackdrop
      slotProps={{
        paper: {
          sx: {
            position: 'fixed',
            left: getCardLeft(anchorPosition.left),
            top: anchorPosition.top,
            transform: 'translateY(-50%)',
            width: { xs: 'calc(100vw - 32px)', sm: cardWidth },
            maxWidth: `calc(100vw - ${cardViewportMargin * 2}px)`,
            margin: 0,
            borderRadius: 3,
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
      <Box sx={{ px: 2, py: 1.5 }}>
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
    </Dialog>
  );
};

export default DotInfoCard;
