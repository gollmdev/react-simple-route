import type { CSSProperties } from "react";
import { Link, Route, Routes } from "react-router-dom";
import ViewResolver from "@/core/ui-renderer/ViewResolver";
import RouterTestPage from "@/pages/RouterTestPage.tsx";

const navStyle: CSSProperties = {
  display: "flex",
  gap: "12px",
  padding: "12px 16px",
  borderBottom: "1px solid #f0f0f0",
};

const AppRouter = () => {
  return (
    <>
      <nav style={navStyle}>
        <Link to="/">Home</Link>
        <Link to="/router-test">Router Test</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ViewResolver view="home" name="test" />} />
        <Route path="/router-test" element={<RouterTestPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
