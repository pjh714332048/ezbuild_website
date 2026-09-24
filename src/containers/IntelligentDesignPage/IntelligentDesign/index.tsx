import { Suspense, lazy, useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';

import IntelligentDesignTitle from './IntelligentDesignTitle';
import QuestionSelector from './QuestionSelector';

const ModelRenderer = lazy(() => import('components/ModelRenderer'));

const designBgSrc = '/intelligent_design/p68.webp';

const IntelligentDesign: React.FC = () => {
  const [selectedModelSrc, setSelectedModelSrc] = useState<string | null>(null);
  const [renderedModelSrc, setRenderedModelSrc] = useState<string | null>(null);

  const handleModelChange = (modelSrc: string | null) => {
    setSelectedModelSrc(modelSrc);
    setRenderedModelSrc(null);
  };
  return (
    <Box>
      <Grid container sx={{ minHeight: '100vh', width: '100%', pt: { md: 8, lg: 12 } }}>
        <Grid
          size={{ xs: 12, md: 2, lg: 3 }}
          sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
        />
        <Grid size={{ xs: 12, sm: 12, md: 8, lg: 6 }}>
          <IntelligentDesignTitle />
          <Grid
            container
            sx={{ alignItems: 'stretch', minHeight: 0, height: 'clamp(280px, 42vw, 600px)' }}
          >
            <Grid
              size={{ xs: 12, md: 5, lg: 4 }}
              sx={{ py: 3, display: 'flex', alignItems: 'center' }}
            >
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
                      backgroundColor: '#3f3f3f',
                      color: '#f3f3f3',
                      cursor: 'not-allowed',
                      pointerEvents: 'auto',
                    },
                  }}
                >
                  开始设计
                </Button>
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, md: 7, lg: 8 }}
              sx={{ py: 3, display: 'flex', flexDirection: 'column', minHeight: 0, height: '100%' }}
            >
              <Box
                className='design-right'
                sx={{
                  flexGrow: 1,
                  height: '100%',
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
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: 0,
                    }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        maxWidth: '100%',
                        maxHeight: '100%',
                        display: 'inline-block',
                      }}
                    >
                      <img
                        src={designBgSrc}
                        alt='design background'
                        className='design-bg-img'
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          width: 'auto',
                          height: 'auto',
                        }}
                      />
                      <Box
                        className='design-overlay'
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          background: '#FFFFFF88',
                          pointerEvents: 'none',
                        }}
                      />
                    </Box>
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          size={{ xs: 12, md: 2, lg: 3 }}
          sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
        />
      </Grid>
    </Box>
  );
};
export default IntelligentDesign;
