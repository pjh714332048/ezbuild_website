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
      <Typography variant='h6' sx={{ color: '#FFFFFFD1', fontSize: 14 }}>
        {t('contactUs.contactGrid.description')}
      </Typography>
      <ContactUsInfo />
      <Button
        endIcon={<ArrowForward />}
        fullWidth
        sx={{
          backgroundColor: '#0D1B2A',
          color: '#FFFFFFFF',
          borderRadius: '24px',
          my: 4,
          py: 1.5,
          textTransform: 'none',
          fontSize: '1rem',
          ['&:hover']: {
            backgroundColor: '#1A2D42',
          },
        }}
        onClick={() => {
          dispatch(setIsContactUsModelOpen(true));
        }}
      >
        {t('contactUs.contactGrid.sendButton')}
      </Button>
      <Typography variant='body1' sx={{ fontSize: 12, color: '#3f3f3f' }}>
        {t('contactUs.contactGrid.cooperationNote')}
      </Typography>
    </>
  );
};

export default ContactGrid;
