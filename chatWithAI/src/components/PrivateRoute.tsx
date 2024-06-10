import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

interface User {
  id: string;
  name: string;
  email: string;
}

interface RootState {
  user: {
    currentUser: User | null;
  };
}

export default function PrivateRoute() {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  return currentUser ? <Outlet /> : <Navigate to="/sign-in" />;
}
