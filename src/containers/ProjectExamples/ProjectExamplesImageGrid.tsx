import { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import ProjectExamplesImageLightbox from './ProjectExamplesImageLightbox';

interface ProjectExamplesImageGridProps {
  leftBigImageSrc: string;
  rightSmallImagesSrc?: string[];
  bottomSmallImagesSrc?: string[];
}

const ProjectExamplesImageGrid: React.FC<ProjectExamplesImageGridProps> = ({
  leftBigImageSrc,
  rightSmallImagesSrc = [],
  bottomSmallImagesSrc = [],
}) => {
  const allImages = [leftBigImageSrc, ...rightSmallImagesSrc, ...bottomSmallImagesSrc];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const imageSx = {
    width: '100%',
    aspectRatio: '16/9',
    objectFit: 'cover',
    borderRadius: 1,
    display: 'block',
    cursor: 'pointer',
  } as const;

  const badgeSx = {
    position: 'absolute',
    bottom: 8,
    left: 8,
    zIndex: 1,
    px: 'clamp(6px, 0.4167vw, 8px)',
    py: 'clamp(3px, 0.2083vw, 4px)',
    borderRadius: 1,
    bgcolor: '#00000099',
    color: 'common.white',
    fontSize: 'var(--font-small)',
  } as const;

  return (
    <Grid container rowSpacing={1} sx={{ width: '100%' }}>
      <Grid
        size={12}
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'minmax(0, 1fr)', lg: 'repeat(2, minmax(0, 1fr))' },
          gap: 1,
          width: '100%',
        }}
      >
        <Box sx={{ position: 'relative', height: 'fit-content' }}>
          <Box
            component='img'
            src={leftBigImageSrc}
            onClick={() => handleImageClick(0)}
            sx={imageSx}
          />
          <Box sx={badgeSx}>01</Box>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: 1,
            alignContent: 'start',
          }}
        >
          {rightSmallImagesSrc.map(
            (src, i) =>
              src && (
                <Box key={src} sx={{ position: 'relative', height: 'fit-content' }}>
                  <Box
                    component='img'
                    src={src}
                    onClick={() => handleImageClick(i + 1)}
                    sx={imageSx}
                  />
                  <Box sx={badgeSx}>{String(i + 2).padStart(2, '0')}</Box>
                </Box>
              ),
          )}
        </Box>
      </Grid>

      {/* 底部 1x4 小图格子 */}
      <Grid
        size={12}
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: 1,
          width: '100%',
        }}
      >
        {bottomSmallImagesSrc.map((src, i) => (
          <Box key={src} sx={{ position: 'relative', height: 'fit-content' }}>
            <Box
              component='img'
              src={src}
              onClick={() => handleImageClick(rightSmallImagesSrc.length + i + 1)}
              sx={imageSx}
            />
            <Box sx={badgeSx}>{String(i + 6).padStart(2, '0')}</Box>
          </Box>
        ))}
      </Grid>

      <ProjectExamplesImageLightbox
        open={lightboxIndex !== null}
        images={allImages}
        index={lightboxIndex ?? 0}
        onIndexChange={setLightboxIndex}
        onClose={handleCloseLightbox}
      />
    </Grid>
  );
};

export default ProjectExamplesImageGrid;
