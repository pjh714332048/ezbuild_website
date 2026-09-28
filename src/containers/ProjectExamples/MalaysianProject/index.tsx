import Box from '@mui/material/Box';
import ProjectExamplesImageGrid from 'containers/ProjectExamples/ProjectExamplesImageGrid';
import ProjectExamplesSubTitle from 'containers/ProjectExamples/ProjectExamplesSubTitle';
import { useTranslation } from 'providers/useTranslation';

const MalaysianProject: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <ProjectExamplesSubTitle
        index={8}
        location={t('projectExamples.malaysianLocation')}
        title={t('projectExamples.malaysianTitle')}
        description={t('projectExamples.malaysianDescription')}
        imageCount={3}
      />
      <ProjectExamplesImageGrid
        leftBigImageSrc='/project_examples/malaysia/1.webp'
        rightSmallImagesSrc={[
          '/project_examples/malaysia/2.webp',
          '/project_examples/malaysia/3.webp',
        ]}
      />
    </Box>
  );
};

export default MalaysianProject;
