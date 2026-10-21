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
import { RESULT_MODELS } from 'models/question/RESULT_MODELS';
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

export type QuestionProps = {
  readonly onModelChange: (modelSrc: string | null) => void;
  readonly onFinishedChange?: (isFinished: boolean) => void;
};

const QuestionSelector: React.FC<QuestionProps> = ({ onModelChange, onFinishedChange }) => {
  const { t, language } = useTranslation();
  const [history, setHistory] = useState<readonly string[]>([QUESTION_ROOT_ID]);
  const [selections, setSelections] = useState<Readonly<Record<string, string>>>({});
  const currentId = history[history.length - 1];
  const currentNode = QUESTION_NODES[currentId];
  const currentStep = history.length;
  const totalSteps = getMaxDepth(QUESTION_ROOT_ID);

  const handleSelect = (option: QuestionOption) => {
    setSelections(previous => ({
      ...Object.fromEntries(history.map(id => [id, previous[id]])),
      [currentId]: option.next,
    }));
    if (option.next.startsWith(RESULT_PREFIX)) {
      const resultId = option.next.slice(RESULT_PREFIX.length);
      onModelChange(RESULT_MODELS[resultId] ?? null);
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
    setSelections({});
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ mb: 3, ['@media (max-height: 750px)']: { mb: 2 } }}>
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
            fontSize: 'var(--font-small)',
            fontWeight: 700,
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {String(currentStep).padStart(2, '0')} / {String(totalSteps).padStart(2, '0')}
        </Typography>
      </Box>
      <Typography
        variant='h3'
        sx={{
          fontWeight: 700,
          mb: 2,
          color: '#FFFFFFFF',
          fontSize: 'clamp(1.5rem, 2vw, 2rem)',
          overflowWrap: 'anywhere',
        }}
      >
        {language === 'en' ? (currentNode.enTitle ?? currentNode.title) : currentNode.title}
      </Typography>
      <Grid container sx={{ gap: 1.5, width: '100%' }}>
        {currentNode.options.map(option => (
          <Grid
            key={option.label}
            container
            size={12}
            component='button'
            type='button'
            aria-pressed={selections[currentId] === option.next}
            onClick={() => handleSelect(option)}
            sx={{
              alignItems: 'center',
              flexWrap: 'nowrap',
              gap: 1,
              py: 1.25,
              px: 2,
              width: '100%',
              border: '1px solid',
              borderColor: selections[currentId] === option.next ? '#FF6B1AFF' : 'white',
              borderRadius: 1,
              bgcolor: selections[currentId] === option.next ? '#FF6B1AFF' : 'transparent',
              color: 'white',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: 'inherit',
              textAlign: 'left',
              transition: 'background-color 150ms, border-color 150ms',
              ['&:hover']: {
                borderColor: selections[currentId] === option.next ? '#FF6B1AFF' : 'white',
                bgcolor: selections[currentId] === option.next ? '#FF6B1AFF' : '#FFFFFF14',
              },
            }}
          >
            <Grid size='grow' sx={{ minWidth: 0, overflowWrap: 'anywhere' }}>
              <Typography sx={{ color: 'white' }}>
                {language === 'en' ? option.enLabel : option.label}
              </Typography>
            </Grid>
            <ChevronRight sx={{ color: 'white', flexShrink: 0 }} />
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
