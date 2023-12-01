import {Route, createBrowserRouter,
    createRoutesFromElements,} from "react-router-dom"

//pages
import SignIn from "../pages/auth/signin"
import HomeLayout from "../pages/home/homeLayout"
import DashBoardLayout from "../pages/dashboard/dashBoardLayout"

//paths
import { HOME,MAIN_LAYOUT,SIGNIN,DASHBOARD } from "./constants"
import NotFound from "../pages/404"
import MainLayout from "../pages/mainLayout"

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path={MAIN_LAYOUT} element={<MainLayout />}>
          <Route path={HOME} element={<HomeLayout />}/>
          <Route path={DASHBOARD} element={<DashBoardLayout />}/>
        </Route>

          <Route path={SIGNIN} element={<SignIn />}/>
          <Route path="*" element={<NotFound />}/>
        </>
    )
)

export default router