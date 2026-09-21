import List from '@mui/material/List';

import CapabilityListItem from './CapabilityListItem';

const capabilityList = [
  {
    title: '智能设计与项目策划',
    description:
      '从可行性研判、概念设计到 AI 辅助配置与模块化深化，让建造逻辑从第一张图纸开始就清晰可控。',
  },
  {
    title: '模块化产品与系统',
    description:
      '覆盖高端住宅、文旅度假、集体生活、商业与公共空间，在标准化效率与柔性定制之间取得平衡。',
  },
  {
    title: '工程与生产协调',
    description: '统筹结构、机电、材料、数字化生产与质量管理，打通设计端、工厂端和现场端。',
  },
  {
    title: '全球项目落地支持',
    description: '连接当地建筑师、顾问与施工团队，协同法规适配、审批、跨境运输、安装与验收。',
  },
];

const CapabilityList: React.FC = () => (
  <List sx={{ my: 2, py: 4 }}>
    {capabilityList.map((capability, index) => (
      <CapabilityListItem
        index={index}
        title={capability.title}
        description={capability.description}
        isLastItem={index === capabilityList.length - 1}
      />
    ))}
  </List>
);

export default CapabilityList;
