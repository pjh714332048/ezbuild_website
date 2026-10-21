import { useState } from 'react';

import ArrowForward from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import type { ProjectInquiry } from 'models/email/ProjectInquiry';
import { useTranslation } from 'providers/useTranslation';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { useSendProjectInquiryMutation } from 'store/services/emailService';
import { setIsContactUsModelOpen } from 'store/slices/dialogController/dialogControllerSlice';
import { selectIsContactUsModelOpen } from 'store/slices/dialogController/selectors';

type ContactFormField = {
  id: keyof ProjectInquiry;
  labelKey: string;
  placeholderKey: string;
  errorKey?:
    | 'contactUs.dialog.errorRequired'
    | 'contactUs.dialog.errorEmail'
    | 'contactUs.dialog.errorPhone'
    | 'contactUs.dialog.errorDate';
  multiline?: boolean;
  type?: string;
  halfWidth?: boolean;
  required?: boolean;
};

type FormErrors = Partial<Record<keyof ProjectInquiry, string>>;

const initialContactFormValues: ProjectInquiry = {
  name: '',
  company: '',
  email: '',
  phone: '',
  address: '',
  requirements: '',
  siteVisitDate: '',
};

const contactFormFields: ContactFormField[] = [
  {
    id: 'name',
    labelKey: 'contactUs.dialog.fieldName',
    placeholderKey: 'contactUs.dialog.placeholderName',
    errorKey: 'contactUs.dialog.errorRequired',
    required: true,
    halfWidth: true,
  },
  {
    id: 'company',
    labelKey: 'contactUs.dialog.fieldCompany',
    placeholderKey: 'contactUs.dialog.placeholderCompany',
    halfWidth: true,
  },
  {
    id: 'email',
    labelKey: 'contactUs.dialog.fieldEmail',
    placeholderKey: 'contactUs.dialog.placeholderEmail',
    errorKey: 'contactUs.dialog.errorEmail',
    required: true,
    halfWidth: true,
  },
  {
    id: 'phone',
    labelKey: 'contactUs.dialog.fieldPhone',
    placeholderKey: 'contactUs.dialog.placeholderPhone',
    errorKey: 'contactUs.dialog.errorPhone',
    required: true,
    halfWidth: true,
  },
  {
    id: 'address',
    labelKey: 'contactUs.dialog.fieldAddress',
    placeholderKey: 'contactUs.dialog.placeholderAddress',
    errorKey: 'contactUs.dialog.errorRequired',
    required: true,
  },
  {
    id: 'requirements',
    labelKey: 'contactUs.dialog.fieldRequirements',
    placeholderKey: 'contactUs.dialog.placeholderRequirements',
    errorKey: 'contactUs.dialog.errorRequired',
    required: true,
    multiline: true,
  },
  {
    id: 'siteVisitDate',
    labelKey: 'contactUs.dialog.fieldSiteVisitDate',
    placeholderKey: 'contactUs.dialog.placeholderSiteVisitDate',
    errorKey: 'contactUs.dialog.errorDate',
    required: true,
    type: 'date',
  },
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+\d][\d\s-()]{6,19}$/;
const datePattern = /^\d{4}-\d{2}-\d{2}$/;

const isValidEmail = (value: string): boolean => emailPattern.test(value);
const isValidPhone = (value: string): boolean => phonePattern.test(value);
const isValidDate = (value: string): boolean =>
  datePattern.test(value) && !Number.isNaN(new Date(value).getTime());

const ContactDialog: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isContactUsModelOpen = useAppSelector(selectIsContactUsModelOpen);
  const [formValues, setFormValues] = useState<ProjectInquiry>(initialContactFormValues);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [sendProjectInquiry, sendResult] = useSendProjectInquiryMutation();

  const validateFieldValue = (field: ContactFormField, value: string): boolean => {
    if (!field.required) return true;
    const trimmed = value.trim();
    if (trimmed === '') return false;
    if (field.id === 'email') return isValidEmail(trimmed);
    if (field.id === 'phone') return isValidPhone(trimmed);
    if (field.id === 'siteVisitDate') return isValidDate(trimmed);
    return true;
  };

  const validateForm = (): boolean => {
    const errors = contactFormFields.reduce<FormErrors>((acc, field) => {
      if (!validateFieldValue(field, formValues[field.id])) {
        return { ...acc, [field.id]: t(field.errorKey ?? 'contactUs.dialog.errorRequired') };
      }
      return acc;
    }, {});
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const resetForm = () => {
    setFormValues(initialContactFormValues);
    setFormErrors({});
    sendResult.reset();
  };

  const handleClose = () => {
    dispatch(setIsContactUsModelOpen(false));
    resetForm();
  };

  const handleSendEmail = () => {
    if (!validateForm()) return;
    void sendProjectInquiry(formValues).then(result => {
      if ('error' in result) {
        console.error('发送项目咨询邮件失败', result.error);
        return;
      }
      window.setTimeout(() => {
        dispatch(setIsContactUsModelOpen(false));
        resetForm();
      }, 2000);
    });
  };

  return (
    <Dialog
      open={isContactUsModelOpen}
      onClose={handleClose}
      fullWidth
      maxWidth='sm'
      scroll='paper'
      aria-labelledby='contact-dialog-title'
      slotProps={{
        paper: {
          sx: {
            backgroundColor: '#F9F7F4FF',
            borderRadius: 2,
            px: 3,
            py: 2.5,
            m: 2,
            width: 'calc(100% - 32px)',
            maxHeight: 'calc(100vh - 32px)',
            ['@supports (height: 100dvh)']: { maxHeight: 'calc(100dvh - 32px)' },
            ['@media (max-height: 750px)']: { px: 2, py: 1.5 },
          },
        },
      }}
    >
      <DialogTitle
        id='contact-dialog-title'
        sx={{
          px: 0,
          pt: 0,
          pb: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          flexShrink: 0,
        }}
      >
        <Typography variant='h6' sx={{ fontWeight: 700, color: '#1A1A2EFF', fontSize: 20 }}>
          {t('contactUs.dialog.title')}
        </Typography>
        <IconButton onClick={handleClose} aria-label={t('common.close')} size='small'>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        sx={{ px: 0, py: 0, minHeight: 0, overflowY: 'auto', scrollbarGutter: 'stable' }}
      >
        <Typography sx={{ fontSize: 13, color: '#666666FF' }}>
          {t('contactUs.dialog.requiredNote')}
        </Typography>
        <Grid
          container
          sx={{
            columnSpacing: 2,
            rowGap: 2.5,
            mt: 2,
            ['@media (max-height: 750px)']: { rowGap: 1.5, mt: 1 },
          }}
        >
          {contactFormFields.map(field => {
            const label = t(field.labelKey as 'contactUs.dialog.fieldName');
            return (
              <Grid key={field.id} size={{ xs: 12, sm: field.halfWidth ? 6 : 12 }}>
                <Typography
                  sx={{
                    mb: 0.5,
                    fontSize: 14,
                    color: '#1A1A2EFF',
                    fontWeight: label.includes('*') ? 700 : 400,
                  }}
                >
                  {label}
                </Typography>
                <TextField
                  fullWidth
                  multiline={field.multiline}
                  rows={field.multiline ? 3 : undefined}
                  type={field.type}
                  placeholder={t(field.placeholderKey as 'contactUs.dialog.placeholderName')}
                  value={formValues[field.id]}
                  error={formErrors[field.id] !== undefined}
                  helperText={formErrors[field.id]}
                  onChange={event => {
                    setFormValues(prev => ({ ...prev, [field.id]: event.target.value }));
                    if (formErrors[field.id] !== undefined) {
                      setFormErrors(
                        prev =>
                          Object.fromEntries(
                            Object.entries(prev).filter(([key]) => key !== field.id),
                          ) as FormErrors,
                      );
                    }
                  }}
                  sx={{
                    backgroundColor: '#FFFFFFFF',
                    borderRadius: 1,
                    ['& .MuiOutlinedInput-notchedOutline']: {
                      borderColor: '#E0E0E0FF',
                    },
                  }}
                />
              </Grid>
            );
          })}
        </Grid>
      </DialogContent>
      <DialogActions
        sx={{
          px: 0,
          pt: 2,
          pb: 0,
          display: 'block',
          flexShrink: 0,
          ['@media (max-height: 750px)']: { pt: 1.5 },
        }}
      >
        <Button
          fullWidth
          disabled={sendResult.isLoading}
          endIcon={<ArrowForward />}
          sx={{
            py: 1.25,
            backgroundColor: '#0D2C5AFF',
            color: '#FFFFFFFF',
            borderRadius: 1,
            textTransform: 'none',
            fontSize: '1rem',
            ['&:hover']: {
              backgroundColor: '#0D2C5ACC',
            },
          }}
          onClick={handleSendEmail}
        >
          {sendResult.isLoading ? t('contactUs.dialog.sending') : t('contactUs.dialog.submit')}
        </Button>
        {sendResult.isSuccess && (
          <Typography sx={{ mt: 1.5, fontSize: 13, color: '#2E7D32FF', textAlign: 'center' }}>
            {t('contactUs.dialog.sentSuccess')}
          </Typography>
        )}
        {sendResult.isError && (
          <Typography sx={{ mt: 1.5, fontSize: 13, color: '#C62828FF', textAlign: 'center' }}>
            {t('contactUs.dialog.sentError')}
          </Typography>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default ContactDialog;
