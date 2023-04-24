import Alternative from "views/pages/dashboards/Alternative.js";
import Dashboard from "views/pages/dashboards/Dashboard.js";
import EditPage from "views/pages/editpage";
import NewsList from "views/pages/newslist";

const routes = [
  {
    collapse: true,
    name: "Dashboards",
    icon: "ni ni-shop text-primary",
    state: "dashboardsCollapse",
    views: [
      {
        path: "/dashboard",
        name: "Dashboard",
        miniName: "D",
        component: Dashboard,
        layout: "/admin",
      },
      {
        path: "/alternative-dashboard",
        name: "Alternative",
        miniName: "A",
        component: Alternative,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "News",
    icon: "ni ni-ungroup text-orange",
    state: "newsCollapse",
    views: [
      {
        path: "/news",
        name: "News List",
        miniName: "N",
        component: NewsList,
        layout: "/admin",
      },
      {
        path: "/editnews",
        name: "Edited News",
        miniName: "E",
        component: EditPage,
        layout: "/admin",
      },
    ],
  },
];

export default routes;
