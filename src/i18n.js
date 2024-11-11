// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 語系文件
const resources = {
   en: {
     translation: {
       title: "INDUSTRY 4.0, MES, AIOT, ESG",
       subTitle: `
          MES, AIOT, EMS, ESG, BI Dashboard, Traceability,<br />
          OEE, Performance, Quality, Reporting, Mobility
       `,
       learnMore: "Learn more",
       DEMO: "DEMO",
       Contact: "Contact",
     },
   },
   zh_tw: {
     translation: {
       title: "工業4.0, 製造執行系統, AIOT, ESG",
       subTitle: `
          製造執行系統, AIOT, 能源管理系統, ESG, 商業智能儀表板, 追溯性,<br />
          設備效率, 績效, 質量, 報告, 移動化
       `,
       learnMore: "了解更多",
       DEMO: "DEMO",
       Contact: "聯絡資訊",
     },
   },
   zh_cn: {
     translation: {
       title: "工业4.0, 制造执行系统, AIOT, ESG",
       subTitle: `
          制造执行系统, AIOT, 能源管理系统, ESG, 商业智能仪表板, 追溯性,<br />
          设备效率, 绩效, 质量, 报告, 移动化
       `,
       learnMore: "了解更多",
       DEMO: "演示",
       Contact: "联系",
     },
   },
   vi: {
     translation: {
       title: "CÔNG NGHIỆP 4.0, MES, AIOT, ESG",
       subTitle: `
          MES, AIOT, Hệ thống quản lý năng lượng, ESG, Bảng điều khiển BI, Truy xuất nguồn gốc,<br />
          OEE, Hiệu suất, Chất lượng, Báo cáo, Di động
       `,
       learnMore: "Tìm hiểu thêm",
       DEMO: "TRÌNH DIỄN",
       Contact: "Liên hệ",
     },
   },
   th: {
     translation: {
       title: "อุตสาหกรรม 4.0, MES, AIOT, ESG",
       subTitle: `
          MES, AIOT, ระบบจัดการพลังงาน, ESG, แผงควบคุม BI, การตรวจสอบย้อนกลับ,<br />
          OEE, ประสิทธิภาพ, คุณภาพ, รายงาน, การเคลื่อนที่
       `,
       learnMore: "เรียนรู้เพิ่มเติม",
       DEMO: "สาธิต",
       Contact: "ติดต่อ",
     },
   },
 };
 

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // 預設語言
  fallbackLng: "en", // 當指定語言無對應翻譯時使用的語言
  interpolation: {
    escapeValue: false, // React 自帶 XSS 防護，不需要額外處理
  },
});

export default i18n;
