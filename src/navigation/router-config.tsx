import React, { Fragment } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import NotFound from "../components/NotFound";
import {
  DASHBOARD,
  GRADES,
  LANDING_PAGE,
  LOGIN,
  MAIN_LAYOUT,
  MISSING_GRADES,
  SETTINGS,
} from "../constants/page-paths";
import Landing from "../pages/landing-page/landing-page";

const SignIn = React.lazy(() => import("../pages/auth/SignIn"));
const Student = React.lazy(() => import("../pages/grades/Grade"));
const Dashboard = React.lazy(() => import("../pages/dashboard/Dashboard"));
const Settings = React.lazy(() => import("../pages/settings/Settings"));
const Layout = React.lazy(() => import("../navigation/layout/main-layout"));
const Missing = React.lazy(() => import("../pages/missing-grades/Missing"));
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route path={LANDING_PAGE} element={<Landing />} />

      <Route path={MAIN_LAYOUT} element={<Layout />}>
        <Route path={DASHBOARD} element={<Dashboard />} />
        <Route path={GRADES} element={<Student />} />
        <Route path={MISSING_GRADES} element={<Missing />} />
        <Route path={SETTINGS} element={<Settings />} />
      </Route>
      <Route path={LOGIN} element={<SignIn />} />
      <Route path="*" element={<NotFound />} />
    </Fragment>
  )
);
