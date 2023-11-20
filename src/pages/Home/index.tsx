import { Helmet } from "react-helmet";
import { BaseLayout } from "../../components/BaseLayout";
import logoIcon from "../../assets/logo.ico";

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Patinhas Livres - Feed</title>
        <link rel="icon" href={logoIcon} type="image/png" sizes="16x16" />
      </Helmet>
      <BaseLayout />
    </>
  );
};
