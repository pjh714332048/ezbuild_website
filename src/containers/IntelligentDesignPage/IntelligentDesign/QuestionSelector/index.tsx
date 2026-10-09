import { useState } from 'react';

import ChevronRight from '@mui/icons-material/ChevronRight';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { QUESTION_NODES } from 'models/question/QUESTION_NODES';
import { QUESTION_ROOT_ID } from 'models/question/QUESTION_ROOT_ID';
import type { QuestionOption } from 'models/question/QuestionOption';
import { RESULT_PREFIX } from 'models/question/RESULT_PREFIX';
import { useTranslation } from 'providers/useTranslation';

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
  readonly onFinishedChange?: (isFinished: boolean) => void;
};

const QuestionSelector: React.FC<QuestionProps> = ({ onModelChange, onFinishedChange }) => {
  const { t, language } = useTranslation();
  const [history, setHistory] = useState<readonly string[]>([QUESTION_ROOT_ID]);
  const currentId = history[history.length - 1];
  const currentNode = QUESTION_NODES[currentId];
  const currentStep = history.length;
  const totalSteps = getMaxDepth(QUESTION_ROOT_ID);

  const handleSelect = (option: QuestionOption) => {
    if (option.next.startsWith(RESULT_PREFIX)) {
      const resultId = option.next.slice(RESULT_PREFIX.length);
      onModelChange(resultModels[resultId] ?? null);
      onFinishedChange?.(true);
      return;
    }

    setHistory(previous => [...previous, option.next]);
  };

  const handleBack = () => {
    onModelChange(null);
    onFinishedChange?.(false);
    setHistory(previous => (previous.length > 1 ? previous.slice(0, -1) : previous));
  };

  const handleReset = () => {
    onModelChange(null);
    onFinishedChange?.(false);
    setHistory([QUESTION_ROOT_ID]);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ mb: 3 }}>
        <Grid container sx={{ gap: 1, mb: 1 }}>
          {Array.from({ length: totalSteps }, (_, i) => (
            <Grid
              key={i}
              size='grow'
              sx={{
                height: 3,
                borderRadius: 1,
                bgcolor: i < currentStep ? '#FF6B1AFF' : '#4A5568FF',
              }}
            />
          ))}
        </Grid>
        <Typography
          sx={{
            color: '#FF6B1AFF',
            fontSize: 'clamp(0.625rem, 0.7292vw, 0.875rem)',
            fontWeight: 700,
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {String(currentStep).padStart(2, '0')} / {String(totalSteps).padStart(2, '0')}
        </Typography>
      </Box>
      <Typography variant='h3' sx={{ fontWeight: 700, mb: 2, color: '#FFFFFFFF' }}>
        {language === 'en' ? (currentNode.enTitle ?? currentNode.title) : currentNode.title}
      </Typography>
      <Grid container sx={{ gap: 1.5, width: '100%' }}>
        {currentNode.options.map(option => (
          <Grid
            key={option.label}
            container
            size={12}
            onClick={() => handleSelect(option)}
            sx={{
              alignItems: 'center',
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
              ['&:hover']: { borderColor: 'white', bgcolor: '#FFFFFF14' },
            }}
          >
            <Grid size='grow'>
              <Typography sx={{ color: 'white' }}>
                {language === 'en' ? option.enLabel : option.label}
              </Typography>
            </Grid>
            <ChevronRight sx={{ color: 'white' }} />
          </Grid>
        ))}
      </Grid>
      <Stack direction='row' spacing={1} sx={{ mt: 2 }}>
        <Button
          onClick={handleBack}
          disabled={history.length === 1}
          sx={{
            color: 'white',
            ['&:disabled']: {
              color: '#3F3F3FFF',
              pointerEvents: 'auto',
              ['&:hover']: { cursor: 'not-allowed' },
            },
          }}
        >
          {t('intelligentDesign.back')}
        </Button>
        {currentStep > 1 && (
          <Button onClick={handleReset} sx={{ color: 'white' }}>
            {t('intelligentDesign.startOver')}
          </Button>
        )}
      </Stack>
    </Box>
  );
};

export default QuestionSelector;
