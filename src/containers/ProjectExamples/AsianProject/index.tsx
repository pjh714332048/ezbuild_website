import Box from '@mui/material/Box';
import ProjectExamplesImageGrid from 'containers/ProjectExamples/ProjectExamplesImageGrid';
import ProjectExamplesSubTitle from 'containers/ProjectExamples/ProjectExamplesSubTitle';

const AsianProject: React.FC = () => (
  <Box>
    <ProjectExamplesSubTitle
      index={5}
      location='越南'
      title='三层轻钢别墅'
      description='结构施工·外立面·室内完成面'
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

export default AsianProject;
