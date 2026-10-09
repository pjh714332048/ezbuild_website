import { Suspense, lazy, useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'providers/useTranslation';

import IntelligentDesignTitle from './IntelligentDesignTitle';
import QuestionSelector from './QuestionSelector';

const ModelRenderer = lazy(() => import('components/ModelRenderer'));

const designBgSrc = '/intelligent_design/p68.webp';

const IntelligentDesign: React.FC = () => {
  const { t } = useTranslation();
  const [selectedModelSrc, setSelectedModelSrc] = useState<string | null>(null);
  const [renderedModelSrc, setRenderedModelSrc] = useState<string | null>(null);
  const [isQuestionFinished, setIsQuestionFinished] = useState(false);

  const handleModelChange = (modelSrc: string | null) => {
    setSelectedModelSrc(modelSrc);
    setRenderedModelSrc(null);
  };

  const handleContactUs = () => {
    const el = document.getElementById('contact_us');
    el?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <Box>
      <Grid container sx={{ minHeight: '100vh', width: '100%', pt: { xs: 10, md: 8, lg: 12 } }}>
        <Grid
          size={{ xs: 12, md: 3, lg: 3 }}
          sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
        />
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ px: { xs: 2, md: 0 } }}>
          <IntelligentDesignTitle />
          <Grid
            container
            sx={{
              alignItems: { xs: 'flex-start', md: 'stretch' },
              minHeight: 0,
              height: { xs: 'auto', md: 'clamp(280px, 42vw, 600px)' },
            }}
          >
            <Grid
              container
              size={{ xs: 12, md: 4, lg: 4 }}
              sx={{ py: { xs: 2, md: 3 }, alignItems: 'center', gap: 2 }}
            >
              <Grid size={12}>
                <QuestionSelector
                  onModelChange={handleModelChange}
                  onFinishedChange={setIsQuestionFinished}
                />
              </Grid>
              <Grid size={12}>
                <Button
                  className='design-btn'
                  disableElevation
                  variant='contained'
                  disabled={!selectedModelSrc}
                  onClick={() => setRenderedModelSrc(selectedModelSrc)}
                  sx={{
                    width: '100%',
                    color: 'white',
                    backgroundColor: '#007BFFFF',
                    ['&:disabled']: {
                      backgroundColor: '#3F3F3FFF',
                      color: '#F3F3F3FF',
                      cursor: 'not-allowed',
                      pointerEvents: 'auto',
                    },
                  }}
                >
                  {t('intelligentDesign.startDesign')}
                </Button>
              </Grid>
              {isQuestionFinished && (
                <Grid size={12}>
                  <Button
                    variant='outlined'
                    onClick={handleContactUs}
                    sx={{
                      width: '100%',
                      color: 'white',
                      borderColor: '#FFFFFF80',
                      ['&:hover']: {
                        borderColor: 'white',
                        backgroundColor: '#FFFFFF14',
                      },
                    }}
                  >
                    {t('intelligentDesign.contactUsAction')}
                  </Button>
                </Grid>
              )}
            </Grid>
            <Grid
              size={{ xs: 12, md: 8, lg: 8 }}
              sx={{
                py: { xs: 2, md: 3 },
                minHeight: 0,
                height: { xs: 320, md: '100%' },
              }}
            >
              <Grid
                container
                className='design-right'
                sx={{
                  width: '100%',
                  height: '100%',
                  minHeight: 0,
                  mx: 2,
                }}
              >
                <Grid size={12} sx={{ height: '100%', minHeight: 0 }}>
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
                        background='#FFFFFFFF'
                      />
                    </Suspense>
                  ) : (
                    <Grid
                      container
                      sx={{
                        width: '100%',
                        height: '100%',
                        minHeight: 0,
                        alignItems: 'center',
                      }}
                    >
                      <Grid size='grow' />
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
                      <Grid size='grow' />
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          size={{ xs: 12, md: 3, lg: 3 }}
          sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
        />
      </Grid>
    </Box>
  );
};
export default IntelligentDesign;
