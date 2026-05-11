import type { CSSProperties } from "react";
import { Select, Switch } from "antd";
import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useThemeStore } from "@/store/theme.store";
import { useLocaleStore } from "@/store/locale.store";
import { type AppLocale } from "@/i18n/resources";

const containerStyle: CSSProperties = {
  minHeight: "100vh",
  backgroundColor: "var(--app-bg)",
  color: "var(--app-text)",
  transition: "background-color 0.2s ease, color 0.2s ease",
};

const navStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "12px 16px",
  borderBottom: "1px solid var(--app-border)",
};

const contentStyle: CSSProperties = {
  padding: "12px 0",
};

const linkStyle: CSSProperties = {
  color: "var(--app-text)",
};

const spacerStyle: CSSProperties = {
  flex: 1,
};

const MainLayout = () => {
  const { t } = useTranslation();
  const mode = useThemeStore((state) => state.mode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const locale = useLocaleStore((state) => state.locale);
  const setLocale = useLocaleStore((state) => state.setLocale);

  const languageOptions = [
    { label: t("language.en"), value: "en" },
    { label: t("language.zhCN"), value: "zh-CN" },
  ];

  return (
    <div style={containerStyle}>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>
          {t("nav.home")}
        </Link>
        <Link to="/router-test" style={linkStyle}>
          {t("nav.routerTest")}
        </Link>
        <div style={spacerStyle} />
        <Select
          value={locale}
          onChange={(value) => setLocale(value as AppLocale)}
          options={languageOptions}
          style={{ minWidth: 120 }}
          aria-label={t("language.label")}
        />
        <Switch
          checked={mode === "dark"}
          onChange={toggleTheme}
          checkedChildren={t("nav.themeDark")}
          unCheckedChildren={t("nav.themeLight")}
        />
      </nav>

      <main style={contentStyle}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
