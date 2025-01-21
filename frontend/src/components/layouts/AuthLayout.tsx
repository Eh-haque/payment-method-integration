import { Navigate, Outlet } from "react-router";
import Header from "../Shared/Header";
import { useAppSelector } from "@/redux/hooks";
import { useCurrentToken } from "@/redux/services/auth/authSlice";
import { jwtDecode } from "jwt-decode";

const AuthLayout = () => {
  const token = useAppSelector(useCurrentToken);

  let user;

  if (token) {
    user = jwtDecode(token);
  }

  if (!token || !user?.exp) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default AuthLayout;
