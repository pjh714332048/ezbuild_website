import Box from '@mui/material/Box';
import ProjectExamplesImageGrid from 'containers/ProjectExamples/ProjectExamplesImageGrid';
import ProjectExamplesSubTitle from 'containers/ProjectExamples/ProjectExamplesSubTitle';

const BrazilianProject: React.FC = () => (
  <Box>
    <ProjectExamplesSubTitle
      index={1}
      location='巴西'
      title='装配式度假屋集群'
      description='一期50+套·多户型可拓展系统'
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
      bottomSmallImagesSrc={['/project_examples/brazil/6.webp', '/project_examples/brazil/7.webp']}
    />
  </Box>
);

export default BrazilianProject;
