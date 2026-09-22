import Box from '@mui/material/Box';
import ProjectExamplesImageGrid from 'containers/ProjectExamples/ProjectExamplesImageGrid';
import ProjectExamplesSubTitle from 'containers/ProjectExamples/ProjectExamplesSubTitle';

const TochigiProject: React.FC = () => (
  <Box>
    <ProjectExamplesSubTitle
      index={9}
      location='日本 · 东京 / 栃木'
      title='钢木办公与酒店项目'
      description='约 800㎡办公 · 约 3,000㎡酒店'
      imageCount={4}
    />
    <ProjectExamplesImageGrid
      leftBigImageSrc='/project_examples/tochigi/1.webp'
      rightSmallImagesSrc={[
        '/project_examples/tochigi/2.webp',
        '/project_examples/tochigi/3.webp',
        '/project_examples/tochigi/4.webp',
      ]}
    />
  </Box>
);

export default TochigiProject;
