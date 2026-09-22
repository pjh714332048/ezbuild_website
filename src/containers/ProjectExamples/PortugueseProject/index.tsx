import Box from '@mui/material/Box';
import ProjectExamplesImageGrid from 'containers/ProjectExamples/ProjectExamplesImageGrid';
import ProjectExamplesSubTitle from 'containers/ProjectExamples/ProjectExamplesSubTitle';

const PortugueseProject: React.FC = () => (
  <Box>
    <ProjectExamplesSubTitle
      index={7}
      location='葡萄牙'
      title='花园附属住宅'
      description='紧凑户型·全屋内装'
      imageCount={4}
    />
    <ProjectExamplesImageGrid
      leftBigImageSrc='/project_examples/Portugue/1.webp'
      rightSmallImagesSrc={[
        '/project_examples/Portugue/2.webp',
        '/project_examples/Portugue/3.webp',
        '/project_examples/Portugue/4.webp',
      ]}
    />
  </Box>
);

export default PortugueseProject;
