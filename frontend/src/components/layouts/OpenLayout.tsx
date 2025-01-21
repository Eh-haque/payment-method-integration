import { Outlet } from "react-router";
import Header from "../Shared/Header";

const OpenLayout = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default OpenLayout;
