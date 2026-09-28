import Box from '@mui/material/Box';
import ProjectExamplesImageGrid from 'containers/ProjectExamples/ProjectExamplesImageGrid';
import ProjectExamplesSubTitle from 'containers/ProjectExamples/ProjectExamplesSubTitle';
import { useTranslation } from 'providers/useTranslation';

const AustralianProject: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <ProjectExamplesSubTitle
        index={6}
        location={t('projectExamples.australianLocation')}
        title={t('projectExamples.australianTitle')}
        description={t('projectExamples.australianDescription')}
        imageCount={5}
      />
      <ProjectExamplesImageGrid
        leftBigImageSrc='/project_examples/australia/1.webp'
        rightSmallImagesSrc={[
          '/project_examples/australia/2.webp',
          '/project_examples/australia/3.webp',
          '/project_examples/australia/4.webp',
          '/project_examples/australia/5.webp',
        ]}
      />
    </Box>
  );
};

export default AustralianProject;
