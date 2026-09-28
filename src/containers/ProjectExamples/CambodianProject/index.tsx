import Box from '@mui/material/Box';
import ProjectExamplesImageGrid from 'containers/ProjectExamples/ProjectExamplesImageGrid';
import ProjectExamplesSubTitle from 'containers/ProjectExamples/ProjectExamplesSubTitle';
import { useTranslation } from 'providers/useTranslation';

const CambodianProject: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <ProjectExamplesSubTitle
        index={3}
        location={t('projectExamples.cambodianLocation')}
        title={t('projectExamples.cambodianTitle')}
        description={t('projectExamples.cambodianDescription')}
        imageCount={5}
      />
      <ProjectExamplesImageGrid
        leftBigImageSrc='/project_examples/cambodia/1.webp'
        rightSmallImagesSrc={[
          '/project_examples/cambodia/2.webp',
          '/project_examples/cambodia/3.webp',
          '/project_examples/cambodia/4.webp',
          '/project_examples/cambodia/5.webp',
        ]}
      />
    </Box>
  );
};

export default CambodianProject;
