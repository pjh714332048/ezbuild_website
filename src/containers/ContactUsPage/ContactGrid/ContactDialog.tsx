import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useAppDispatch } from 'store/hooks';
import { useAppSelector } from 'store/hooks';
import { setIsContactUsModelOpen } from 'store/slices/dialogController/dialogControllerSlice';
import { selectIsContactUsModelOpen } from 'store/slices/dialogController/selectors';

const ContactDialog: React.FC = () => {
  const dispatch = useAppDispatch();
  const isContactUsModelOpen = useAppSelector(selectIsContactUsModelOpen);

  return (
    <Dialog
      open={isContactUsModelOpen}
      onClose={() => {
        dispatch(setIsContactUsModelOpen(false));
      }}
    >
      <DialogTitle>我是标题</DialogTitle>
      <DialogContent>我是内容</DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch(setIsContactUsModelOpen(false))}>提交</Button>
        <Button onClick={() => dispatch(setIsContactUsModelOpen(false))}>关闭</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ContactDialog;
