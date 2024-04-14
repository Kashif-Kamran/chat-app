import { useAppSelector } from "@/store/hooks";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  return isLoggedIn ? <Navigate to={"/"} /> : <Outlet />;
};

const ProtectedRoutes = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  return isLoggedIn ? <Outlet /> : <Navigate to={"/login"} />;
};
export { PublicRoutes, ProtectedRoutes };
