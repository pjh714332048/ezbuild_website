import Box from '@mui/material/Box';
import ProjectExamplesImageGrid from 'containers/ProjectExamples/ProjectExamplesImageGrid';
import ProjectExamplesSubTitle from 'containers/ProjectExamples/ProjectExamplesSubTitle';

const PhilippineProject: React.FC = () => (
  <Box>
    <ProjectExamplesSubTitle
      index={4}
      location='菲律宾'
      title='轻钢别墅社区'
      description='社区化批量建设'
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

export default PhilippineProject;
