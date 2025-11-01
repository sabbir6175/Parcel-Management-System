import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <span className="loading place-content-center loading-bars loading-lg"></span>
    );
  }
  if (user && user?.email) {
    return children;
  }
  return (
    <div>
      <Navigate to={"/signIn"}></Navigate>
    </div>
  );
};

export default PrivateRoute;
