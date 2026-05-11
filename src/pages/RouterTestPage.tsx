import type { CSSProperties } from "react";

const wrapperStyle: CSSProperties = {
  padding: "24px 16px",
};

const RouterTestPage = () => {
  return (
    <section style={wrapperStyle}>
      <h1>React Router v7 Test Page</h1>
      <p>Routing is active. You are now viewing the /router-test route.</p>
    </section>
  );
};

export default RouterTestPage;
