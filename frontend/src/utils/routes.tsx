import LoginForm from "@/pages/Login";
import SignupForm from "@/pages/Signup";
import { RouteObject } from "react-router-dom";
import { ProtectedRoutes, PublicRoutes } from "@/components/Hoc/Routing";

export const routes: RouteObject[] = [
  {
    element: <PublicRoutes />,
    children: [
      {
        path: "/register",
        element: <SignupForm />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
    ],
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
      },
    ],
  },
];
