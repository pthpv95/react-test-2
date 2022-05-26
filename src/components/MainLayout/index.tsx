import React, { FC } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = (props: any) => {
  return (
    <div id="container">
      {props.children}
      <Outlet />
    </div>
  );
};
export default MainLayout;
