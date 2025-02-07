import { useTranslation } from "react-i18next";
import "./pages.css";

// Placeholder-component for the My Pages page
export const MyPages = () => {
    const { t } = useTranslation();

    return (
        <section className="main-wrapper">
            <h1>{t("otherPages.myPages")}</h1>
        </section>
    )
}
