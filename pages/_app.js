import "../styles/global.css";
import MainNavigation from "@/components/layout/main-navigation";

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainNavigation>
        <Component {...pageProps} />
      </MainNavigation>
    </>
  );
}
