import Grid from '@mui/material/Grid';

import ModulePlatformGridContent from './ModulePlatformGridContent';
import ModulePlatformGridImage from './ModulePlatformGridImage';
import ModulePlatformPageTitle from './ModulePlatformPageTitle';

const ModulePlatformPage: React.FC = () => {
  return (
    <>
      <ModulePlatformPageTitle />
      <Grid container spacing={2} sx={{ width: '100%', my: 2 }}>
        <Grid size='grow' sx={{ p: 2, background: '#FFFFFF' }}>
          <ModulePlatformGridImage badge='01' imageSrc='/module_platform_images/1.webp' />
          <ModulePlatformGridContent
            smallTitle='NOAH'
            title='快速部署应急住宅'
            content='面向应急救援与临时社区安置的半永久木结构模块，厨房和卫浴可一体化集成，满足 5 年以上舒适使用。'
            numberString='50%'
            numberDescription='目标工期较永久建筑缩短'
          />
        </Grid>
        <Grid size='grow' sx={{ p: 2, background: '#FFFFFF' }}>
          <ModulePlatformGridImage badge='02' imageSrc='/module_platform_images/2.webp' />
          <ModulePlatformGridContent
            smallTitle='HEMUDU'
            title='河姆渡模块化住宅系统'
            content='15+ 标准与功能单元自由组合，覆盖 80–200㎡住宅、民宿、康养与度假场景，支持线性、环形、异形与多层布局。'
            numberString='20 - 30'
            numberDescription='天现场装配周期'
          />
        </Grid>
        <Grid size='grow' sx={{ p: 2, background: '#FFFFFF' }}>
          <ModulePlatformGridImage badge='03' imageSrc='/module_platform_images/3.webp' />
          <ModulePlatformGridContent
            smallTitle='PANDORA'
            title='潘多拉可变空间系统'
            content='榫卯逻辑与无钉快速装配结合，模块可拆卸、迁移、扩展和重组，适配商业、共享空间、文旅与临时设施。'
            numberString='4×'
            numberDescription='目标工期较永久建筑缩短'
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ModulePlatformPage;
