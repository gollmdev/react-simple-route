import "@/core/component-registry/module-auto-loader";
import { useEffect } from "react";
import { ConfigProvider, theme as antdTheme } from "antd";
import { HashRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter.tsx";
import { useThemeStore } from "@/store/theme.store";

function App() {
  const mode = useThemeStore((state) => state.mode);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    // 移除全局 loading
    const loading = document.getElementById("global-loading");
    if (loading) {
      loading.remove();
    }
  }, [mode]);

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
