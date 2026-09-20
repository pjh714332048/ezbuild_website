import LanguageIcon from '@mui/icons-material/Language';
import IconButton from '@mui/material/IconButton';
import { useAppSelector } from 'store/hooks';
import { selectLanguage } from 'store/slices/locale/selectors';

const LocaleButton: React.FC = () => {
  const language = useAppSelector(selectLanguage);

  return (
    <IconButton>
      <LanguageIcon sx={{ mx: 0.5 }} />
      {language}
    </IconButton>
  );
};

export default LocaleButton;
