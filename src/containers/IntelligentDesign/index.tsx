import { Suspense, lazy, useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';

import IntelligentDesignTitle from './IntelligentDesignTitle';
import QuestionSelector from './QuestionSelector';

const ModelRenderer = lazy(() => import('components/ModelRenderer'));

const IntelligentDesign: React.FC = () => {
  const [selectedModelSrc, setSelectedModelSrc] = useState<string | null>(null);
  const [renderedModelSrc, setRenderedModelSrc] = useState<string | null>(null);

  const handleModelChange = (modelSrc: string | null) => {
    setSelectedModelSrc(modelSrc);
    setRenderedModelSrc(null);
  };
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
      }}
    >
      <Grid container sx={{ background: '#0b1c31', height: '100vh', width: '100vw' }}>
        <Grid size={3} />
        <Grid size={6}>
          <IntelligentDesignTitle />
          <QuestionSelector onModelChange={handleModelChange} />
          <Button
            className='design-btn'
            disableElevation
            variant='contained'
            disabled={!selectedModelSrc}
            onClick={() => setRenderedModelSrc(selectedModelSrc)}
          >
            开始设计
          </Button>
        </Grid>
        <Grid size={3} />
      </Grid>
      <Box className='design-right'>
        {renderedModelSrc ? (
          <Suspense
            fallback={
              <Box sx={{ display: 'grid', placeItems: 'center', width: '100%' }}>
                <CircularProgress aria-label='Loading model' />
              </Box>
            }
          >
            <ModelRenderer
              key={renderedModelSrc}
              src={renderedModelSrc}
              height='300px'
              background='#fff'
            />
          </Suspense>
        ) : (
          <>
            {/* <img src={DESIGN_BG.src} alt={DESIGN_BG.alt} className='design-bg-img' /> */}
            <Box className='design-overlay' />
          </>
        )}
      </Box>
    </Box>
  );
};
export default IntelligentDesign;
