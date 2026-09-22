import Box from '@mui/material/Box';
import ProjectExamplesImageGrid from 'containers/ProjectExamples/ProjectExamplesImageGrid';
import ProjectExamplesSubTitle from 'containers/ProjectExamples/ProjectExamplesSubTitle';

const CambodianProject: React.FC = () => (
  <Box>
    <ProjectExamplesSubTitle
      index={3}
      location='柬埔寨'
      title='轻钢酒店'
      description='客房、公共空间与现场施工'
      imageCount={5}
    />
    <ProjectExamplesImageGrid
      leftBigImageSrc='/project_examples/cambodia/1.webp'
      rightSmallImagesSrc={[
        '/project_examples/cambodia/2.webp',
        '/project_examples/cambodia/3.webp',
        '/project_examples/cambodia/4.webp',
        '/project_examples/cambodia/5.webp',
      ]}
    />
  </Box>
);

export default CambodianProject;
