import { useTranslation } from "react-i18next";
import "./pages.css";

// Placeholder-component for the Help Center page
export const HelpCenter = () => {
    const { t } = useTranslation();

    return (
        <section className="main-wrapper">
            <h1>{t("otherPages.helpCenter")}</h1>
        </section>
    )
}
