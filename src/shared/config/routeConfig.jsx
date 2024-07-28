import App from "../../App";
import Layout from "../../Layout";

export const routeConfig = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/payment",
        element: <div>payment</div>,
      },
    ],
  },
];
