import Box from '@mui/material/Box';
import ProjectExamplesImageGrid from 'containers/ProjectExamples/ProjectExamplesImageGrid';
import ProjectExamplesSubTitle from 'containers/ProjectExamples/ProjectExamplesSubTitle';
import { useTranslation } from 'providers/useTranslation';

const AmericanProject: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <ProjectExamplesSubTitle
        index={0}
        location={t('projectExamples.americanLocation')}
        title={t('projectExamples.americanTitle')}
        description={t('projectExamples.americanDescription')}
        imageCount={3}
      />
      <ProjectExamplesImageGrid
        leftBigImageSrc='/project_examples/america/1.webp'
        rightSmallImagesSrc={[
          '/project_examples/america/2.webp',
          '/project_examples/america/3.webp',
        ]}
      />
    </Box>
  );
};

export default AmericanProject;
