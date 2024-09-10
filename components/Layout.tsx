import { PropsWithChildren } from "react";
import BreadCrumbs from "./BreadCrumbs";
import Footer from "./Footer";
import NavBar from "./NavBar";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <NavBar />
      <BreadCrumbs />
      {children}
      <Footer />
    </>
  );
};
