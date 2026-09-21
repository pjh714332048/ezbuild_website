import { useState } from 'react';

import ChevronRight from '@mui/icons-material/ChevronRight';
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

const getMaxDepth = (nodeId: string): number => {
  const node = QUESTION_NODES[nodeId];
  if (!node) return 1;
  const childDepths = node.options
    .filter(option => !option.next.startsWith(RESULT_PREFIX))
    .map(option => getMaxDepth(option.next));
  return childDepths.length > 0 ? 1 + Math.max(...childDepths) : 1;
};

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
  const currentStep = history.length;
  const totalSteps = getMaxDepth(QUESTION_ROOT_ID);

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
    <Box sx={{ width: '100%' }}>
      <Box sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
          {Array.from({ length: totalSteps }, (_, i) => (
            <Box
              key={i}
              sx={{
                flex: 1,
                height: 3,
                borderRadius: 1,
                bgcolor: i < currentStep ? '#FF6B1A' : '#4A5568',
              }}
            />
          ))}
        </Box>
        <Typography
          sx={{
            color: '#FF6B1A',
            fontSize: 14,
            fontWeight: 700,
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {String(currentStep).padStart(2, '0')} / {String(totalSteps).padStart(2, '0')}
        </Typography>
      </Box>
      <Typography variant='h3' sx={{ fontWeight: 700, mb: 2, color: '#FFFFFF' }}>
        {currentNode.title}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, width: '100%' }}>
        {currentNode.options.map(option => (
          <Box
            key={option.label}
            onClick={() => handleSelect(option)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              py: 1.25,
              px: 2,
              width: '100%',
              border: '1px solid',
              borderColor: 'white',
              borderRadius: 1,
              bgcolor: 'transparent',
              color: 'white',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: 'inherit',
              ['&:hover']: { borderColor: 'white', bgcolor: 'rgba(255, 255, 255, 0.08)' },
            }}
          >
            <Typography sx={{ color: 'white' }}>{option.label}</Typography>
            <ChevronRight sx={{ color: 'white' }} />
          </Box>
        ))}
      </Box>
      <Stack direction='row' spacing={1} sx={{ mt: 2 }}>
        <Button
          onClick={handleBack}
          disabled={history.length === 1}
          sx={{
            color: 'white',
            ['&:disabled']: {
              color: '#3F3F3F',
              pointerEvents: 'auto',
              ['&:hover']: { cursor: 'not-allowed' },
            },
          }}
        >
          {language === 'en' ? 'Back' : '返回'}
        </Button>
        <Button onClick={handleReset} sx={{ color: 'white' }}>
          {language === 'en' ? 'Start over' : '重新选择'}
        </Button>
      </Stack>
    </Box>
  );
};

export default QuestionSelector;
