import Box from '@mui/material/Box';
import ProjectExamplesImageGrid from 'containers/ProjectExamples/ProjectExamplesImageGrid';
import ProjectExamplesSubTitle from 'containers/ProjectExamples/ProjectExamplesSubTitle';

const JapaneseProject: React.FC = () => (
  <Box>
    <ProjectExamplesSubTitle
      index={2}
      location='日本'
      title='规模化生产与交付项目'
      description='筑波 · 葛饰 · 千叶 · 琦玉学校'
      imageCount={9}
    />
    <ProjectExamplesImageGrid
      leftBigImageSrc='/project_examples/japan/1.webp'
      rightSmallImagesSrc={[
        '/project_examples/japan/2.webp',
        '/project_examples/japan/3.webp',
        '/project_examples/japan/4.webp',
        '/project_examples/japan/5.webp',
      ]}
      bottomSmallImagesSrc={[
        '/project_examples/japan/6.webp',
        '/project_examples/japan/7.webp',
        '/project_examples/japan/8.webp',
        '/project_examples/japan/9.webp',
      ]}
    />
  </Box>
);

export default JapaneseProject;
