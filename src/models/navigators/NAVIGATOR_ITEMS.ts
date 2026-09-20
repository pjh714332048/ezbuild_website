type navigatorKeys =
  'about' | 'intelligence_design' | 'business_capability' | 'project_examples' | 'contact_us';

interface NavigatorItem {
  enLabel: string;
  cnLabel: string;
}

export const NAVIGATOR_ITEMS: Record<navigatorKeys, NavigatorItem> = {
  about: { enLabel: 'About', cnLabel: '关于我们' },
  ['intelligence_design']: { enLabel: 'Intelligence Design', cnLabel: '智能设计' },
  ['business_capability']: { enLabel: 'Business Capability', cnLabel: '自研产品' },
  ['project_examples']: { enLabel: 'Project Examples', cnLabel: '项目案例' },
  ['contact_us']: { enLabel: 'Contact Us', cnLabel: '联系我们' },
};
