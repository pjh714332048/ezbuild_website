import { Suspense, lazy, useEffect, useRef, useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import ContentContainer from 'components/ContentContainer';
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
  const questionPanelRef = useRef<HTMLDivElement>(null);
  const [previewHeight, setPreviewHeight] = useState(320);

  useEffect(() => {
    const panel = questionPanelRef.current;
    if (!panel) return;

    const observer = new ResizeObserver(() => {
      setPreviewHeight(panel.getBoundingClientRect().height);
    });
    observer.observe(panel);
    return () => observer.disconnect();
  }, []);

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
      <Box
        sx={{
          width: '100%',
          pt: 'var(--design-spacing)',
          pb: { xs: 3, md: 4 },
        }}
      >
        <ContentContainer>
          <IntelligentDesignTitle />
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr)',
              ['@media (min-width: 1024px)']: {
                gridTemplateColumns: 'minmax(300px, 340px) minmax(0, 1fr)',
              },
              alignItems: 'start',
              gap: { xs: 3, lg: 4 },
              mt: 3,
            }}
          >
            <Grid
              ref={questionPanelRef}
              container
              sx={{ minWidth: 0, alignContent: 'start', gap: 2 }}
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
            <Box
              sx={{
                minWidth: 0,
                minHeight: 0,
                height: previewHeight,
                borderRadius: 3,
                overflow: 'hidden',
              }}
            >
              <Grid
                container
                className='design-right'
                sx={{
                  width: '100%',
                  height: '100%',
                  minHeight: 0,
                }}
              >
                <Grid size={12} sx={{ height: '100%', minHeight: 0 }}>
                  {renderedModelSrc ? (
                    <Suspense
                      fallback={
                        <Box
                          sx={{
                            display: 'grid',
                            placeItems: 'center',
                            width: '100%',
                            height: '100%',
                          }}
                        >
                          <CircularProgress aria-label='Loading model' />
                        </Box>
                      }
                    >
                      <ModelRenderer
                        key={renderedModelSrc}
                        src={renderedModelSrc}
                        mtlSrc={renderedModelSrc.replace(/\.obj$/, '.mtl')}
                        height='100%'
                        background='#FFFFFFFF'
                      />
                    </Suspense>
                  ) : (
                    <Box
                      sx={{
                        width: '100%',
                        height: '100%',
                        minHeight: 0,
                        display: 'grid',
                        placeItems: 'center',
                        position: 'relative',
                      }}
                    >
                      <img
                        src={designBgSrc}
                        alt='design background'
                        className='design-bg-img'
                        style={{
                          display: 'block',
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          minHeight: 0,
                        }}
                      />
                      <Box
                        className='design-overlay'
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          background: 'rgba(255, 255, 255, 0.45)',
                          pointerEvents: 'none',
                        }}
                      />
                    </Box>
                  )}
                </Grid>
              </Grid>
            </Box>
          </Box>
        </ContentContainer>
      </Box>
    </Box>
  );
};
export default IntelligentDesign;
