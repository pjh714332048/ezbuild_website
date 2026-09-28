import Box from '@mui/material/Box';
import ProjectExamplesImageGrid from 'containers/ProjectExamples/ProjectExamplesImageGrid';
import ProjectExamplesSubTitle from 'containers/ProjectExamples/ProjectExamplesSubTitle';
import { useTranslation } from 'providers/useTranslation';

const PortugueseProject: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <ProjectExamplesSubTitle
        index={7}
        location={t('projectExamples.portugueseLocation')}
        title={t('projectExamples.portugueseTitle')}
        description={t('projectExamples.portugueseDescription')}
        imageCount={4}
      />
      <ProjectExamplesImageGrid
        leftBigImageSrc='/project_examples/Portugue/1.webp'
        rightSmallImagesSrc={[
          '/project_examples/Portugue/2.webp',
          '/project_examples/Portugue/3.webp',
          '/project_examples/Portugue/4.webp',
        ]}
      />
    </Box>
  );
};

export default PortugueseProject;
