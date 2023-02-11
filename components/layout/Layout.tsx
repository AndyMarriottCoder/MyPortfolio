import React, { PropsWithChildren } from "react";
import Header from "./Header";

const Layout = (props: PropsWithChildren) => {
  return (
    <div className="grid min-h-screen grid-rows-header">
        <header className="items-start bg-slate-800">
        <Header />
        </header>
      <div className="grid md:grid-cols-sidebar">
        <div>Sidebar</div>
        {props.children}
      </div>
    </div>
  );
};
export default Layout;