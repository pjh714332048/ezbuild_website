import ArrowForward from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'providers/useTranslation';
import { useAppDispatch } from 'store/hooks';
import { setIsContactUsModelOpen } from 'store/slices/dialogController/dialogControllerSlice';

import ContactDialog from './ContactDialog';
import ContactUsInfo from './ContactUsInfo';

const ContactGrid: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  return (
    <>
      <ContactDialog />
      <Typography
        variant='h6'
        sx={{ color: '#FFFFFFD1', fontSize: 'clamp(0.625rem, 0.7292vw, 0.875rem)' }}
      >
        {t('contactUs.contactGrid.description')}
      </Typography>
      <ContactUsInfo />
      <Button
        endIcon={<ArrowForward />}
        fullWidth
        sx={{
          backgroundColor: '#0D1B2AFF',
          color: '#FFFFFFFF',
          borderRadius: '24px',
          my: 4,
          py: 1.5,
          textTransform: 'none',
          fontSize: 'clamp(0.75rem, 0.8333vw, 1rem)',
          ['&:hover']: {
            backgroundColor: '#1A2D42FF',
          },
        }}
        onClick={() => {
          dispatch(setIsContactUsModelOpen(true));
        }}
      >
        {t('contactUs.contactGrid.sendButton')}
      </Button>
      <Typography
        variant='body1'
        sx={{ fontSize: 'clamp(0.625rem, 0.625vw, 0.75rem)', color: '#3F3F3FFF' }}
      >
        {t('contactUs.contactGrid.cooperationNote')}
      </Typography>
    </>
  );
};

export default ContactGrid;
