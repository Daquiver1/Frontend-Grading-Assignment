import React from "react";
import { ReactNode } from "react";
import NavBar from "../NavBar";
import Header from "../Header";
import Footer from "../Footer";

interface Props {
  children: ReactNode;
}

function MainLayout({ children }: Props) {
  return (
    <div className="container col-lg-12">
      <Header />

      <div className="row">
        <div className="col-3">
          <NavBar></NavBar>
        </div>
        <div className="col-9">
          <div>{children}</div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MainLayout;
