import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { routeConfig } from "../../shared/config/routeConfig";
// import PageLoader from "widgets/PageLoader/index";

const AppRouter = () => {
  return (
    <Suspense
      fallback={
        <div>
          {/* <PageLoader /> */}
          <h1>Loading...</h1>
        </div>
      }>
      <Routes>
        {routeConfig.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children?.map((childRoute, childIndex) => (
              <Route
                key={childIndex}
                path={childRoute.path}
                element={childRoute.element}
              />
            ))}
          </Route>
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
