import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import DeleteGender from "./pages/gender/DeleteGender";
import EditGender from "./pages/gender/EditGender";
import Genders from "./pages/gender/Genders";
import Login from "./pages/login/Login";
import Users from "./pages/user/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/genders",
    element: (
      <ProtectedRoute>
        <Genders />
      </ProtectedRoute>
    ),
  },
  {
    path: "/gender/edit/:gender_id",
    element: (
      <ProtectedRoute>
        <EditGender />
      </ProtectedRoute>
    ),
  },
  {
    path: "/gender/delete/:gender_id",
    element: (
      <ProtectedRoute>
        <DeleteGender />
      </ProtectedRoute>
    ),
  },
  {
    path: "/users",
    element: (
      <ProtectedRoute>
        <Users />
      </ProtectedRoute>
    ),
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
