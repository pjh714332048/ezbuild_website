import ArrowForward from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAppDispatch } from 'store/hooks';
import { setIsContactUsModelOpen } from 'store/slices/dialogController/dialogControllerSlice';

import ContactDialog from './ContactDialog';
import ContactUsInfo from './ContactUsInfo';

const ContactGrid: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <ContactDialog />
      <Typography variant='h6' sx={{ color: '#FFFFFFD1', fontSize: 14 }}>
        告诉我们项目所在地、用途、规模与目标时间。ezBuild
        团队将从模块化适配与交付路径开始，为你梳理下一步。
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
        发送项目需求
      </Button>
      <Typography variant='body1' sx={{ fontSize: 12, color: '#3f3f3f' }}>
        全球项目合作 · 模块化方案咨询
      </Typography>
    </>
  );
};

export default ContactGrid;
