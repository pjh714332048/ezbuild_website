import Box from '@mui/material/Box';
import ProjectExamplesImageGrid from 'containers/ProjectExamples/ProjectExamplesImageGrid';
import ProjectExamplesSubTitle from 'containers/ProjectExamples/ProjectExamplesSubTitle';
import { useTranslation } from 'providers/useTranslation';

const JapaneseProject: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <ProjectExamplesSubTitle
        index={2}
        location={t('projectExamples.japaneseLocation')}
        title={t('projectExamples.japaneseTitle')}
        description={t('projectExamples.japaneseDescription')}
        imageCount={9}
      />
      <ProjectExamplesImageGrid
        leftBigImageSrc='/project_examples/japan/1.webp'
        rightSmallImagesSrc={[
          '/project_examples/japan/2.webp',
          '/project_examples/japan/3.webp',
          '/project_examples/japan/4.webp',
          '/project_examples/japan/5.webp',
        ]}
        bottomSmallImagesSrc={[
          '/project_examples/japan/6.webp',
          '/project_examples/japan/7.webp',
          '/project_examples/japan/8.webp',
          '/project_examples/japan/9.webp',
        ]}
      />
    </Box>
  );
};

export default JapaneseProject;
