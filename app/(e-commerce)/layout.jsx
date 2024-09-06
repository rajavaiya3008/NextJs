import React from "react";
import ECommerceLayout from "./ECommerceLayout";
import Navbar from "../components/Navbar";
import CategoryTab from "../components/CategoryTab";

const layout = ({ children }) => {
  return (
    <>
    <Navbar />
    <CategoryTab />
      <ECommerceLayout>{children}</ECommerceLayout>
      {/* {user ? (<div>{children}</div> ): null} */}
    </>
  );
};

export default layout;
