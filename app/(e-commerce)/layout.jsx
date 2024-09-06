import React from "react";
import ECommerceLayout from "./ECommerceLayout";
import Navbar from "../components/Navbar";

const layout = ({ children }) => {
  return (
    <>
    <Navbar />
      <ECommerceLayout>{children}</ECommerceLayout>
      {/* {user ? (<div>{children}</div> ): null} */}
    </>
  );
};

export default layout;
