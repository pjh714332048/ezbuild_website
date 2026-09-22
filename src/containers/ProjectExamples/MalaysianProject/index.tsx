import Box from '@mui/material/Box';
import ProjectExamplesImageGrid from 'containers/ProjectExamples/ProjectExamplesImageGrid';
import ProjectExamplesSubTitle from 'containers/ProjectExamples/ProjectExamplesSubTitle';

const MalaysianProject: React.FC = () => (
  <Box>
    <ProjectExamplesSubTitle
      index={8}
      location='巴西 / 马来西亚'
      title='船坞与保障性住宅'
      description='大跨度钢结构 · 批量标准住宅 · 首批 200 套'
      imageCount={3}
    />
    <ProjectExamplesImageGrid
      leftBigImageSrc='/project_examples/malaysia/1.webp'
      rightSmallImagesSrc={[
        '/project_examples/malaysia/2.webp',
        '/project_examples/malaysia/3.webp',
      ]}
    />
  </Box>
);

export default MalaysianProject;
