import Box from '@mui/material/Box';
import ProjectExamplesImageGrid from 'containers/ProjectExamples/ProjectExamplesImageGrid';
import ProjectExamplesSubTitle from 'containers/ProjectExamples/ProjectExamplesSubTitle';
import { useTranslation } from 'providers/useTranslation';

const BrazilianProject: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <ProjectExamplesSubTitle
        index={1}
        location={t('projectExamples.brazilianLocation')}
        title={t('projectExamples.brazilianTitle')}
        description={t('projectExamples.brazilianDescription')}
        imageCount={7}
      />
      <ProjectExamplesImageGrid
        leftBigImageSrc='/project_examples/brazil/1.webp'
        rightSmallImagesSrc={[
          '/project_examples/brazil/2.webp',
          '/project_examples/brazil/3.webp',
          '/project_examples/brazil/4.webp',
          '/project_examples/brazil/5.webp',
        ]}
        bottomSmallImagesSrc={[
          '/project_examples/brazil/6.webp',
          '/project_examples/brazil/7.webp',
        ]}
      />
    </Box>
  );
};

export default BrazilianProject;
