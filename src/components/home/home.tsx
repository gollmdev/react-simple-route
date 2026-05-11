import type { FC } from "react";
import { useTranslation } from "react-i18next";

interface HomeProps {
    name: string;
}

const Home: FC<HomeProps> = ({ name }) => {
    const { t } = useTranslation();

    return <>{t("home.greeting", { name })}</>;
};
export default Home;