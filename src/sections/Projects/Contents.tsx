import FCS6350SImage from '../../assets/images/projects/fcs-6350-s.png';
import SC100Image from '../../assets/images/projects/sc-100.png';
import SPA1050Image from '../../assets/images/projects/spa-1050.png';
import VDM4051Image from '../../assets/images/projects/vdm-4051.png';
import HDR731Image from '../../assets/images/projects/hdr-731.png';
import CityPassImage from '../../assets/images/projects/citypass.png';
import CityPassMemberImage from '../../assets/images/projects/citypass-member.png';
import CityPassVendorImage from '../../assets/images/projects/citypass-vendor.png';

interface Project {
  id: number;
  title: string;
  category: string;
  company: "高盛大" | "卡訊電子";
  imageUrl: string;
  skills: string[];
  description: string;
}

const projects: Project[] = [
  { 
    id: 1, 
    title: "數位會議系統主機", 
    category: "會議系統", 
    company: "卡訊電子",
    imageUrl: FCS6350SImage,
    skills: ["Vue3", "Vite", "Pinia", "Fabric.js"],
    description: "參與數位會議系統主機的產品需求規劃、專案流程管理、前端架構規劃與功能開發，包含操作主頁會議管理、麥克風單體管理、會議錄音管理、錄音檔下載與播放等功能，提升使用者在會議紀錄管理上的操作效率與便利性。"
  },
  { 
    id: 2, 
    title: "智慧影音物聯網控制器", 
    category: "環境控制系統", 
    company: "卡訊電子",
    imageUrl: SC100Image,
    skills: ["Vue3", "Vite", "Vuex","Fabric.js"],
    description: "參與智慧影音物聯網控制器的產品需求規劃、專案流程管理、前端架構規劃、功能開發與後續維護，包含設備管理、IO 控制、情境管理、環控模組編輯器及系統管理等功能，並持續優化操作介面與使用流程，提升系統整體穩定性與使用體驗。"
  },
  { 
    id: 3, 
    title: "串流廣播主機", 
    category: "廣播系統", 
    company: "卡訊電子",
    imageUrl: SPA1050Image,
    skills: ["Vue2", "Vue Cli", "Vuex", "Electron", "Fabric.js", "Web Audio API"],
    description: "負責串流廣播主機系統前端功能開發與後續維護，核心聚焦於即時廣播與多媒體顯示功能，運用 Web Audio API 實作即時音訊串流播放、監聽與錄音功能，並使用 Fabric.js 提供使用者自定義即時看板編輯功能，結合 Electron 透過 HDMI 輸出畫面，提升廣播操作效率與資訊展示的靈活性。"
  },
  { 
    id: 4, 
    title: "網路分佈式多媒體發布系統", 
    category: "電視牆控制系統", 
    company: "卡訊電子",
    imageUrl: VDM4051Image,
    skills: ["Vue2", "Vue Cli", "Vuex", "Draggable"],
    description: "負責網路分佈式多媒體發布系統前端開發與後續維護，涵蓋電視牆控制、來源裁切、版面配置及操作流程優化，提升多媒體內容發布的靈活性與系統操作效率。"
  },
  { 
    id: 5, 
    title: "串流媒體處理器", 
    category: "直錄播系統", 
    company: "卡訊電子",
    imageUrl: HDR731Image,
    skills: ["Vue2", "Vue Cli", "Vuex", "Fabric.js"],
    description: "負責串流媒體處理器前端介面開發與後續維護，針對直播、錄影與串流管理相關功能進行操作流程設計與介面優化，提升使用者在影音處理與設備控制上的效率。"
  },
  { 
    id: 6, 
    title: "CityPass 都會通", 
    category: "電商平台", 
    company: "高盛大",
    imageUrl: CityPassImage,
    skills: ["Vue2", "Nuxt", "MapBox", "Gulp", "PHP", "Laravel"],
    description: ""
  },
  { 
    id: 7, 
    title: "CityPass 管理後台", 
    category: "管理後台", 
    company: "高盛大",
    imageUrl: CityPassMemberImage,
    skills: ["jQuery", "PHP", "CodeIgniter"],
    description: ""
  },
  { 
    id: 8, 
    title: "CityPass 供應商管理平台", 
    category: "管理後台", 
    company: "高盛大",
    imageUrl: CityPassVendorImage,
    skills: ["Vue2", "PHP", "Laravel"],
    description: ""
  },
];

export default projects