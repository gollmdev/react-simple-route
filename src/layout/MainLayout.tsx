import type { CSSProperties } from "react";
import { Link, Outlet } from "react-router-dom";

const containerStyle: CSSProperties = {
  minHeight: "100vh",
};

const navStyle: CSSProperties = {
  display: "flex",
  gap: "12px",
  padding: "12px 16px",
  borderBottom: "1px solid #f0f0f0",
};

const contentStyle: CSSProperties = {
  padding: "12px 0",
};

const MainLayout = () => {
  return (
    <div style={containerStyle}>
      <nav style={navStyle}>
        <Link to="/">Home</Link>
        <Link to="/router-test">Router Test</Link>
      </nav>

      <main style={contentStyle}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
