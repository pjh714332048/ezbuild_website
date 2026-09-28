import Box from '@mui/material/Box';
import ProjectExamplesImageGrid from 'containers/ProjectExamples/ProjectExamplesImageGrid';
import ProjectExamplesSubTitle from 'containers/ProjectExamples/ProjectExamplesSubTitle';
import { useTranslation } from 'providers/useTranslation';

const TochigiProject: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <ProjectExamplesSubTitle
        index={9}
        location={t('projectExamples.tochigiLocation')}
        title={t('projectExamples.tochigiTitle')}
        description={t('projectExamples.tochigiDescription')}
        imageCount={4}
      />
      <ProjectExamplesImageGrid
        leftBigImageSrc='/project_examples/tochigi/1.webp'
        rightSmallImagesSrc={[
          '/project_examples/tochigi/2.webp',
          '/project_examples/tochigi/3.webp',
          '/project_examples/tochigi/4.webp',
        ]}
      />
    </Box>
  );
};

export default TochigiProject;
