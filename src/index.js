import ReactDOM from "react-dom/client";
// react library for routing
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
// bootstrap rtl for rtl support page
import "assets/vendor/bootstrap-rtl/bootstrap-rtl.scss";
// plugins styles from node_modules
import "react-notification-alert/dist/animate.css";
import "react-perfect-scrollbar/dist/css/styles.css";
// plugins styles downloaded
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "assets/vendor/fullcalendar/dist/fullcalendar.min.css";
import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/quill/dist/quill.core.css";
import "assets/vendor/select2/dist/css/select2.min.css";
import "assets/vendor/sweetalert2/dist/sweetalert2.min.css";
import "assets/scss/argon-dashboard-pro-react.scss?v1.1.0";
// core styles
import AdminLayout from "layouts/Admin.js";
import Dashboard from "views/pages/dashboards/Dashboard";
import Login from "views/pages/login/Login";
import AuthLayout from "layouts/Auth";
import Alternative from "views/pages/dashboards/Alternative";
import EditPage from "views/pages/editpage";
import NewsList from "views/pages/newslist";

const root = ReactDOM.createRoot(document.getElementById("root"));
const routes = createBrowserRouter([
  {
    path: "admin/*",
    children: [
      { element: <Navigate to="/admin/dashboard" />, index: true },
      {
        path: "dashboard",
        element: <AdminLayout childrens={<Dashboard />} />,
      },
      {
        path: "alternative-dashboard",
        element: <AdminLayout childrens={<Alternative />} />,
      },
      {
        path: "news",
        element: <AdminLayout childrens={<NewsList />} />,
      },
      {
        path: "editnews",
        element: <AdminLayout childrens={<EditPage />} />,
      },
    ],
  },
  {
    path: "/",
    children: [
      { element: <Navigate to="/login" />, index: true },
      {
        path: "/login",
        element: <AuthLayout childrens={<Login />} />,
      },
    ],
  },
]);

root.render(<RouterProvider router={routes} />);
