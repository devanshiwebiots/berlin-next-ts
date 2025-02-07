import { Poppins, Roboto } from "next/font/google";
import "../../src/index.scss";
import NoSsr from "@/utils/NoSsr";
import { RootLayoutProps } from "@/Types/Layout.type";
import MainProvider from "./MainProvider";
import { I18nProvider } from "./i18n/i18n-context";
import { detectLanguage } from "./i18n/server";
import SessionWrapper from "@/CommonComponent/SessionWrapper";
import { getServerSession } from "next-auth";
import { authoption } from "./api/auth/[...nextauth]/authOption";
import { ToastContainer } from "react-toastify";
import ErrorBoundary from "@/CommonComponent/ErrorBoundry";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--poppins",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--roboto",
});

export default async function RootLayout({ children }: RootLayoutProps) {
  const lng = await detectLanguage();
  const session = await getServerSession(authoption);

  return (
    <I18nProvider language={lng}>
      <html lang='en'>
        <head>
          <link rel='icon' href='/assets/images/favicon.png' type='image/x-icon' />
          <link rel='shortcut icon' href='/assets/images/favicon.png' type='image/x-icon' />
          <title>Berlin - Premium Admin Template</title>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
        </head>
        <body suppressHydrationWarning={true} className={`${roboto.variable} ${poppins.variable} `}>
          <ErrorBoundary>
            <NoSsr>
              <SessionWrapper session={session}>
                <MainProvider>{children}</MainProvider>
                <ToastContainer />
              </SessionWrapper>
            </NoSsr>
          </ErrorBoundary>
        </body>
      </html>
    </I18nProvider>
  );
}
