import Box from '@mui/material/Box';
import ProjectExamplesImageGrid from 'containers/ProjectExamples/ProjectExamplesImageGrid';
import ProjectExamplesSubTitle from 'containers/ProjectExamples/ProjectExamplesSubTitle';

const AmericanProject: React.FC = () => (
  <Box>
    <ProjectExamplesSubTitle
      index={0}
      location='美国 · 加州'
      title='模块化木结构公寓'
      description='混合结构协调 · 完整设计图集'
      imageCount={3}
    />
    <ProjectExamplesImageGrid
      leftBigImageSrc='/project_examples/america/1.webp'
      rightSmallImagesSrc={['/project_examples/america/2.webp', '/project_examples/america/3.webp']}
    />
  </Box>
);

export default AmericanProject;
