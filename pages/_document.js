import { Html, Head, Main, NextScript } from "next/document";
import MainNavigation from "@/components/layout/main-navigation";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <MainNavigation />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
