import type { CSSProperties } from "react";
import { useTranslation } from "react-i18next";

const wrapperStyle: CSSProperties = {
  padding: "24px 16px",
};

const RouterTestPage = () => {
  const { t } = useTranslation();

  return (
    <section style={wrapperStyle}>
      <h1>{t("page.routerTestTitle")}</h1>
      <p>{t("page.routerTestDescription")}</p>
    </section>
  );
};

export default RouterTestPage;
