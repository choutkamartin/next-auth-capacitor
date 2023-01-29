import Header from "./header";
import Footer from "./footer";
import type { ReactNode } from "react";
import NetworkStatus from "./network-status";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <NetworkStatus />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
