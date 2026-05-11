import type { CSSProperties } from "react";
import { Switch } from "antd";
import { Link, Outlet } from "react-router-dom";
import { useThemeStore } from "@/store/theme.store";

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
  const mode = useThemeStore((state) => state.mode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <div style={containerStyle}>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/router-test" style={linkStyle}>
          Router Test
        </Link>
        <div style={spacerStyle} />
        <Switch
          checked={mode === "dark"}
          onChange={toggleTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
      </nav>

      <main style={contentStyle}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
