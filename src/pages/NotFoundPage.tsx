import type { CSSProperties } from "react";
import { Link } from "react-router-dom";

const wrapperStyle: CSSProperties = {
  padding: "24px 16px",
};

const NotFoundPage = () => {
  return (
    <section style={wrapperStyle}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are trying to access does not exist.</p>
      <Link to="/">Back to Home</Link>
    </section>
  );
};

export default NotFoundPage;
