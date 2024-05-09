import LocaleContext from "../context/LocaleContext";
import { useContext } from "react";

export default function Home() {
  const { locale, toggleLocale } = useContext(LocaleContext);

  return (
    <>
      <hr />
      <button onClick={toggleLocale}>
        {locale === "en" ? "Indonesia" : "English"}
      </button>
      <h1>{locale === "en" ? "Hello" : "Halo"}</h1>
    </>
  );
}
