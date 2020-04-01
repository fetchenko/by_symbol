import React from "react";
import Header from "../navigation/header";
import Footer from "../navigation/footer";

const Layout = props => {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
