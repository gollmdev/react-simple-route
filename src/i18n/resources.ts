export const SUPPORTED_LOCALES = ["en", "zh-CN"] as const;

export type AppLocale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: AppLocale = "en";

export const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        routerTest: "Router Test",
        themeDark: "Dark",
        themeLight: "Light",
      },
      language: {
        label: "Language",
        en: "English",
        zhCN: "Chinese",
      },
      page: {
        notFoundTitle: "404 - Page Not Found",
        notFoundDescription: "The page you are trying to access does not exist.",
        backHome: "Back to Home",
        routerTestTitle: "React Router v7 Test Page",
        routerTestDescription:
          "Routing is active. You are now viewing the /router-test route.",
      },
      home: {
        greeting: "Home {{name}}",
      },
    },
  },
  "zh-CN": {
    translation: {
      nav: {
        home: "首页",
        routerTest: "路由测试",
        themeDark: "深色",
        themeLight: "浅色",
      },
      language: {
        label: "语言",
        en: "英文",
        zhCN: "中文",
      },
      page: {
        notFoundTitle: "404 - 页面未找到",
        notFoundDescription: "你访问的页面不存在。",
        backHome: "返回首页",
        routerTestTitle: "React Router v7 测试页",
        routerTestDescription: "路由已生效，你当前位于 /router-test。",
      },
      home: {
        greeting: "首页 {{name}}",
      },
    },
  },
} as const;
