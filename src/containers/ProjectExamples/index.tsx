import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import PageGrid from 'components/PageGrid';
import PageSubtitle from 'components/PageSubtitle';

import AmericanProject from './AmericanProject';
import AsianProject from './AsianProject';
import AustralianProject from './AustralianProject';
import BrazilianProject from './BrazilianProject';
import CambodianProject from './CambodianProject';
import FullCycleDelivery from './FullCycleDelivery';
import JapaneseProject from './JapaneseProject';
import MalaysianProject from './MalaysianProject';
import PhilippineProject from './PhilippineProject';
import PortugueseProject from './PortugueseProject';
import ProjectExamplesTitle from './ProjectExamplesTitle';
import ToFuturePage from './ToFuturePage';
import TochigiProject from './TochigiProject';
import TokyoProject from './TokyoProject';

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
            <Divider sx={{ mt: 5 }} />
            <BrazilianProject />
            <Divider sx={{ mt: 5 }} />
            <JapaneseProject />
            <Divider sx={{ mt: 5 }} />
            <CambodianProject />
            <Divider sx={{ mt: 5 }} />
            <PhilippineProject />
            <Divider sx={{ mt: 5 }} />
            <AsianProject />
            <Divider sx={{ mt: 5 }} />
            <AustralianProject />
            <Divider sx={{ mt: 5 }} />
            <PortugueseProject />
            <Divider sx={{ mt: 5 }} />
            <TokyoProject />
            <Divider sx={{ mt: 5 }} />
            <TochigiProject />
            <Divider sx={{ mt: 5 }} />
            <MalaysianProject />
            <Divider sx={{ mt: 5 }} />
          </Box>
        }
      />
      <FullCycleDelivery />
      <ToFuturePage />
    </Box>
  );
};
export default ProjectExamples;
