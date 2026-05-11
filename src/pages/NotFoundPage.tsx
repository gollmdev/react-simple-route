import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const wrapperStyle: CSSProperties = {
  padding: "24px 16px",
};

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <section style={wrapperStyle}>
      <h1>{t("page.notFoundTitle")}</h1>
      <p>{t("page.notFoundDescription")}</p>
      <Link to="/">{t("page.backHome")}</Link>
    </section>
  );
};

export default NotFoundPage;
