import { type KeyboardEvent, useCallback } from 'react';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'providers/useTranslation';

interface ProjectExamplesImageLightboxProps {
  open: boolean;
  images: readonly string[];
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

const controlButtonSx = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  color: '#FFFFFFFF',
  backgroundColor: '#00000066',
  ['&:hover']: {
    backgroundColor: '#000000B3',
  },
} as const;

const ProjectExamplesImageLightbox: React.FC<ProjectExamplesImageLightboxProps> = ({
  open,
  images,
  index,
  onIndexChange,
  onClose,
}) => {
  const { t } = useTranslation();
  const total = images.length;

  const showPrev = useCallback(() => {
    onIndexChange((index - 1 + total) % total);
  }, [index, onIndexChange, total]);

  const showNext = useCallback(() => {
    onIndexChange((index + 1) % total);
  }, [index, onIndexChange, total]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showPrev();
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      showNext();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen
      onKeyDown={handleKeyDown}
      slotProps={{
        backdrop: {
          sx: { backgroundColor: '#000000E6' },
        },
        paper: {
          sx: {
            backgroundColor: 'transparent',
            backgroundImage: 'none',
            boxShadow: 'none',
            display: 'grid',
            placeItems: 'center',
            overflow: 'hidden',
            px: '80px',
            py: '72px',
          },
        },
      }}
    >
      <Box
        component='img'
        src={images[index]}
        alt={`Project image ${index + 1}`}
        sx={{
          maxWidth: '100%',
          maxHeight: 'calc(100vh - 144px)',
          ['@supports (height: 100dvh)']: { maxHeight: 'calc(100dvh - 144px)' },
          width: 'auto',
          height: 'auto',
          objectFit: 'contain',
          display: 'block',
        }}
      />

      {total > 1 && (
        <>
          <IconButton
            aria-label={t('common.previousImage')}
            size='large'
            onClick={showPrev}
            sx={{ ...controlButtonSx, left: 16 }}
          >
            <ChevronLeftIcon sx={{ fontSize: 36 }} />
          </IconButton>
          <IconButton
            aria-label={t('common.nextImage')}
            size='large'
            onClick={showNext}
            sx={{ ...controlButtonSx, right: 16 }}
          >
            <ChevronRightIcon sx={{ fontSize: 36 }} />
          </IconButton>
        </>
      )}

      <IconButton
        aria-label={t('common.close')}
        size='large'
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          color: '#FFFFFFFF',
          backgroundColor: '#00000066',
          ['&:hover']: {
            backgroundColor: '#000000B3',
          },
        }}
      >
        <CloseIcon sx={{ fontSize: 28 }} />
      </IconButton>

      {total > 1 && (
        <Typography
          sx={{
            position: 'absolute',
            bottom: 24,
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#FFFFFFCC',
            fontSize: 'var(--font-small)',
            letterSpacing: '0.1042vw',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </Typography>
      )}
    </Dialog>
  );
};

export default ProjectExamplesImageLightbox;
