import { EN_ABOUT } from './about/en';
import { ZH_ABOUT } from './about/zh';
import { EN_COMMON } from './common/en';
import { ZH_COMMON } from './common/zh';
import { EN_CONTACT_US } from './contactUs/en';
import { ZH_CONTACT_US } from './contactUs/zh';
import { EN_FOOTER } from './footer/en';
import { ZH_FOOTER } from './footer/zh';
import { EN_HOME } from './home/en';
import { ZH_HOME } from './home/zh';
import { EN_INTELLIGENT_DESIGN } from './intelligentDesign/en';
import { ZH_INTELLIGENT_DESIGN } from './intelligentDesign/zh';
import { EN_NAV } from './nav/en';
import { ZH_NAV } from './nav/zh';
import { EN_PRODUCTS } from './products/en';
import { ZH_PRODUCTS } from './products/zh';
import { EN_PROJECT_EXAMPLES } from './projectExamples/en';
import { ZH_PROJECT_EXAMPLES } from './projectExamples/zh';

export const TRANSLATIONS = {
  zh: {
    nav: ZH_NAV,
    home: ZH_HOME,
    about: ZH_ABOUT,
    intelligentDesign: ZH_INTELLIGENT_DESIGN,
    products: ZH_PRODUCTS,
    projectExamples: ZH_PROJECT_EXAMPLES,
    contactUs: ZH_CONTACT_US,
    footer: ZH_FOOTER,
    common: ZH_COMMON,
  },
  en: {
    nav: EN_NAV,
    home: EN_HOME,
    about: EN_ABOUT,
    intelligentDesign: EN_INTELLIGENT_DESIGN,
    products: EN_PRODUCTS,
    projectExamples: EN_PROJECT_EXAMPLES,
    contactUs: EN_CONTACT_US,
    footer: EN_FOOTER,
    common: EN_COMMON,
  },
} as const;
