import Box from '@mui/material/Box';

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
  const badgeSx = {
    position: 'absolute',
    bottom: 8,
    left: 8,
    zIndex: 1,
    px: 1,
    py: 0.5,
    borderRadius: 1,
    bgcolor: '#00000099',
    color: 'common.white',
    fontSize: 14,
  } as const;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 1,
          width: '100%',
        }}
      >
        <Box sx={{ position: 'relative', height: 'fit-content' }}>
          <Box
            component='img'
            src={leftBigImageSrc}
            sx={{
              width: '100%',
              aspectRatio: '16/9',
              objectFit: 'fill',
              borderRadius: 1,
              display: 'block',
            }}
          />
          <Box sx={badgeSx}>01</Box>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 1,
            alignContent: 'start',
          }}
        >
          {Array.from({ length: 4 }).map(
            (_, i) =>
              rightSmallImagesSrc[i] && (
                <Box key={i} sx={{ position: 'relative', height: 'fit-content' }}>
                  <Box
                    component='img'
                    src={rightSmallImagesSrc[i]}
                    sx={{
                      width: '100%',
                      aspectRatio: '16/9',
                      objectFit: 'fill',
                      borderRadius: 1,
                      display: 'block',
                    }}
                  />
                  <Box sx={badgeSx}>{String(i + 2).padStart(2, '0')}</Box>
                </Box>
              ),
          )}
        </Box>
      </Box>

      {/* 底部 1x4 小图格子 */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 1,
          width: '100%',
        }}
      >
        {bottomSmallImagesSrc.map((src, i) => (
          <Box key={src} sx={{ position: 'relative', height: 'fit-content' }}>
            <Box
              component='img'
              src={src}
              sx={{
                width: '100%',
                aspectRatio: '16/9',
                objectFit: 'fill',
                borderRadius: 1,
                display: 'block',
              }}
            />
            <Box sx={badgeSx}>{String(i + 6).padStart(2, '0')}</Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProjectExamplesImageGrid;
