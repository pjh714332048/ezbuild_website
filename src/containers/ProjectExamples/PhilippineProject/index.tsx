import Box from '@mui/material/Box';
import ProjectExamplesImageGrid from 'containers/ProjectExamples/ProjectExamplesImageGrid';
import ProjectExamplesSubTitle from 'containers/ProjectExamples/ProjectExamplesSubTitle';
import { useTranslation } from 'providers/useTranslation';

const PhilippineProject: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <ProjectExamplesSubTitle
        index={4}
        location={t('projectExamples.philippineLocation')}
        title={t('projectExamples.philippineTitle')}
        description={t('projectExamples.philippineDescription')}
        imageCount={5}
      />
      <ProjectExamplesImageGrid
        leftBigImageSrc='/project_examples/philippines/1.webp'
        rightSmallImagesSrc={[
          '/project_examples/philippines/2.webp',
          '/project_examples/philippines/3.webp',
          '/project_examples/philippines/4.webp',
          '/project_examples/philippines/5.webp',
        ]}
      />
    </Box>
  );
};

export default PhilippineProject;
