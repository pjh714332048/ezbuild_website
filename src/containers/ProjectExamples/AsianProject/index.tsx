import Box from '@mui/material/Box';
import ProjectExamplesImageGrid from 'containers/ProjectExamples/ProjectExamplesImageGrid';
import ProjectExamplesSubTitle from 'containers/ProjectExamples/ProjectExamplesSubTitle';
import { useTranslation } from 'providers/useTranslation';

const AsianProject: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <ProjectExamplesSubTitle
        index={5}
        location={t('projectExamples.asianLocation')}
        title={t('projectExamples.asianTitle')}
        description={t('projectExamples.asianDescription')}
        imageCount={5}
      />
      <ProjectExamplesImageGrid
        leftBigImageSrc='/project_examples/asia/1.webp'
        rightSmallImagesSrc={[
          '/project_examples/asia/2.webp',
          '/project_examples/asia/3.webp',
          '/project_examples/asia/4.webp',
          '/project_examples/asia/5.webp',
        ]}
      />
    </Box>
  );
};

export default AsianProject;
