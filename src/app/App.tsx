import "@/core/component-registry/module-auto-loader";
import { useEffect } from "react";
import { ConfigProvider, theme as antdTheme } from "antd";
import { HashRouter } from "react-router-dom";
import AppRouter from "../routes/AppRouter.tsx";
import { useThemeStore } from "@/store/theme.store";
import { useLocaleStore } from "@/store/locale.store";
import i18n from "@/i18n/i18n";

function App() {
  const mode = useThemeStore((state) => state.mode);
  const locale = useLocaleStore((state) => state.locale);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    // 移除全局 loading
    const loading = document.getElementById("global-loading");
    if (loading) {
      loading.remove();
    }
  }, [mode]);

  useEffect(() => {
    void i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <ConfigProvider
      theme={{
        algorithm:
          mode === "dark"
            ? antdTheme.darkAlgorithm
            : antdTheme.defaultAlgorithm,
      }}
    >
      <HashRouter>
        <AppRouter />
      </HashRouter>
    </ConfigProvider>
  );
}

export default App;
