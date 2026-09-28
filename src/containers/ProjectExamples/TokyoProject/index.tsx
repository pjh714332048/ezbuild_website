import Box from '@mui/material/Box';
import ProjectExamplesImageGrid from 'containers/ProjectExamples/ProjectExamplesImageGrid';
import ProjectExamplesSubTitle from 'containers/ProjectExamples/ProjectExamplesSubTitle';
import { useTranslation } from 'providers/useTranslation';

const TokyoProject: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <ProjectExamplesSubTitle
        index={10}
        location={t('projectExamples.tokyoLocation')}
        title={t('projectExamples.tokyoTitle')}
        description={t('projectExamples.tokyoDescription')}
        imageCount={3}
      />
      <ProjectExamplesImageGrid
        leftBigImageSrc='/project_examples/tokyo/1.webp'
        rightSmallImagesSrc={['/project_examples/tokyo/2.webp', '/project_examples/tokyo/3.webp']}
      />
    </Box>
  );
};

export default TokyoProject;
