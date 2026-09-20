import { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { QUESTION_NODES } from 'models/question/QUESTION_NODES';
import { QUESTION_ROOT_ID } from 'models/question/QUESTION_ROOT_ID';
import type { QuestionOption } from 'models/question/QuestionOption';
import { RESULT_PREFIX } from 'models/question/RESULT_PREFIX';
import { useAppSelector } from 'store/hooks';
import { selectLanguage } from 'store/slices/locale/selectors';

const resultModels: Readonly<Record<string, string>> = {
  bnb2008: '/architectural_models/homestay_8.obj',
  bnb20012: '/architectural_models/homestay_12.obj',
  houseSmall12: '/architectural_models/self_built_building_100m_1.obj',
  houseSmall34: '/architectural_models/self_built_building_100m_2.obj',
  houseMid12: '/architectural_models/self_built_building_200m_1.obj',
  houseMid34: '/architectural_models/self_built_building_200m_2.obj',
};

export type QuestionProps = {
  readonly onModelChange: (modelSrc: string | null) => void;
};

const QuestionSelector: React.FC<QuestionProps> = ({ onModelChange }) => {
  const language = useAppSelector(selectLanguage);
  const [history, setHistory] = useState<readonly string[]>([QUESTION_ROOT_ID]);
  const currentId = history[history.length - 1];
  const currentNode = QUESTION_NODES[currentId];

  const handleSelect = (option: QuestionOption) => {
    if (option.next.startsWith(RESULT_PREFIX)) {
      const resultId = option.next.slice(RESULT_PREFIX.length);
      onModelChange(resultModels[resultId] ?? null);
      return;
    }

    setHistory(previous => [...previous, option.next]);
  };

  const handleBack = () => {
    onModelChange(null);
    setHistory(previous => (previous.length > 1 ? previous.slice(0, -1) : previous));
  };

  const handleReset = () => {
    onModelChange(null);
    setHistory([QUESTION_ROOT_ID]);
  };

  return (
    <Box>
      <Typography component='h3' variant='h6' sx={{ fontWeight: 700, mb: 2 }}>
        {language === 'en' ? (currentNode.enTitle ?? currentNode.title) : currentNode.title}
      </Typography>
      <Stack spacing={1.5}>
        {currentNode.options.map(option => (
          <Button
            key={option.label}
            variant='outlined'
            onClick={() => handleSelect(option)}
            sx={{ py: 1.25, textTransform: 'none' }}
          >
            {language === 'en' ? option.enLabel : option.label}
          </Button>
        ))}
      </Stack>
      <Stack direction='row' spacing={1} sx={{ mt: 2 }}>
        <Button onClick={handleBack} disabled={history.length === 1}>
          {language === 'en' ? 'Back' : '上一步'}
        </Button>
        <Button onClick={handleReset}>{language === 'en' ? 'Start over' : '重新选择'}</Button>
      </Stack>
    </Box>
  );
};

export default QuestionSelector;
