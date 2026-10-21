import { useState } from 'react';

import CheckIcon from '@mui/icons-material/Check';
import LanguageIcon from '@mui/icons-material/Language';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import type { LanguageKeys } from 'models/locale/LanguageKeys';
import { LANGUAGE_SECTION_LIST } from 'models/locale/LanguageSectionList';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setLanguage } from 'store/slices/locale/localeSlice';
import { selectLanguage } from 'store/slices/locale/selectors';

const LocaleButton: React.FC = () => {
  const language = useAppSelector(selectLanguage);
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleSelectLanguage = (key: LanguageKeys) => {
    dispatch(setLanguage(key));
    handleCloseMenu();
  };

  const languageEntries = Object.entries(LANGUAGE_SECTION_LIST) as [LanguageKeys, string][];

  return (
    <>
      <IconButton
        size='small'
        onClick={handleOpenMenu}
        sx={{ gap: 0.25, px: 0.75, py: 0.5, color: '#000000DE' }}
      >
        <LanguageIcon sx={{ fontSize: 16 }} />
        <Typography sx={{ fontSize: 'var(--font-small)', fontWeight: 500, lineHeight: 1 }}>
          {LANGUAGE_SECTION_LIST[language]}
        </Typography>
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
        {languageEntries.map(([key, label]) => (
          <MenuItem key={key} selected={key === language} onClick={() => handleSelectLanguage(key)}>
            {label}
            {key === language && <CheckIcon sx={{ ml: 1, fontSize: 18, color: '#1976D2FF' }} />}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LocaleButton;
