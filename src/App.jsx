import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar, Footer } from "./widgets/layout/index";
import { routes } from "./routes";

const App = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/login" && (
        <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
          <Navbar routes={routes} />
        </div>
      )}

      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>

      {pathname !== "/login" && (
        <div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
