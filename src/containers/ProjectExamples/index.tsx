import Box from '@mui/material/Box';
import PageGrid from 'components/PageGrid';
import PageSubtitle from 'components/PageSubtitle';

import AmericanProject from './AmericanProject';
import ProjectExamplesTitle from './ProjectExamplesTitle';

const ProjectExamples: React.FC = () => {
  return (
    <Box id='project_examples'>
      <PageGrid
        pageBackground='#FFFFFF'
        content={
          <Box>
            <PageSubtitle number='07' title='项目图库' />
            <ProjectExamplesTitle />
            <AmericanProject />
          </Box>
        }
      />
    </Box>
  );
};
export default ProjectExamples;
