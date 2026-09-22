import Box from '@mui/material/Box';
import ProjectExamplesImageGrid from 'containers/ProjectExamples/ProjectExamplesImageGrid';
import ProjectExamplesSubTitle from 'containers/ProjectExamples/ProjectExamplesSubTitle';

const AustralianProject: React.FC = () => (
  <Box>
    <ProjectExamplesSubTitle
      index={6}
      location='澳大利亚'
      title='轻钢住宅'
      description='多套住宅·从结构到交付'
      imageCount={5}
    />
    <ProjectExamplesImageGrid
      leftBigImageSrc='/project_examples/australia/1.webp'
      rightSmallImagesSrc={[
        '/project_examples/australia/2.webp',
        '/project_examples/australia/3.webp',
        '/project_examples/australia/4.webp',
        '/project_examples/australia/5.webp',
      ]}
    />
  </Box>
);

export default AustralianProject;
