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
    <Box>
      <Grid container sx={{ height: '100vh', width: '100%', pt: 12 }}>
        <Grid size={3} />
        <Grid size={6}>
          <IntelligentDesignTitle />
          <Grid container sx={{ alignItems: 'stretch', minHeight: 0, height: 600 }}>
            <Grid size={4} sx={{ py: 3, display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  gap: 2,
                }}
              >
                <QuestionSelector onModelChange={handleModelChange} />
                <Button
                  className='design-btn'
                  disableElevation
                  variant='contained'
                  disabled={!selectedModelSrc}
                  onClick={() => setRenderedModelSrc(selectedModelSrc)}
                  sx={{
                    color: 'white',
                    backgroundColor: '#007bff',
                    ['&:disabled']: {
                      backgroundColor: '#c0c0c',
                    },
                  }}
                >
                  开始设计
                </Button>
              </Box>
            </Grid>
            <Grid size={8} sx={{ py: 3, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
              <Box
                className='design-right'
                sx={{
                  flexGrow: 1,
                  width: '100%',
                  minHeight: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  mx: 2,
                }}
              >
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
                      height='100%'
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
            </Grid>
          </Grid>
        </Grid>
        <Grid size={3} />
      </Grid>
    </Box>
  );
};
export default IntelligentDesign;
