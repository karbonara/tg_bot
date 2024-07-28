import { Outlet } from "react-router-dom";
import { NavMenu } from "./widgets/NavMenu/NavMenu";

const Layout = () => {
  return (
    <>
      <NavMenu />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
