import Box from '@mui/material/Box';
import ProjectExamplesImageGrid from 'containers/ProjectExamples/ProjectExamplesImageGrid';
import ProjectExamplesSubTitle from 'containers/ProjectExamples/ProjectExamplesSubTitle';

const TokyoProject: React.FC = () => (
  <Box>
    <ProjectExamplesSubTitle
      index={10}
      location='日本·东京'
      title='东中野装配式公寓'
      description='7套城市住宅·木结构模块化交付'
      imageCount={3}
    />
    <ProjectExamplesImageGrid
      leftBigImageSrc='/project_examples/tokyo/1.webp'
      rightSmallImagesSrc={['/project_examples/tokyo/2.webp', '/project_examples/tokyo/3.webp']}
    />
  </Box>
);

export default TokyoProject;
