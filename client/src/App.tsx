import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DeleteGender from "./pages/gender/DeleteGender";
import EditGender from "./pages/gender/EditGender";
import Genders from "./pages/gender/Genders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Genders />,
  },
  {
    path: "/gender/edit",
    element: <EditGender />,
  },
  {
    path: "/gender/delete",
    element: <DeleteGender />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
