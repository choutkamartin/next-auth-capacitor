import "./styles.css";

import type { AppProps } from "next/app";
import type { Session } from "next-auth";
import { UseSession } from "../utils/session";

/**
 * Usage of a custom UseSession provider is necessary as the default provider does not allow the configuration of request credentials mode
 */
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <UseSession>
      <Component {...pageProps} />
    </UseSession>
  );
}
