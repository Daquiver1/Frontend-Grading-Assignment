import {Route, createBrowserRouter,
    createRoutesFromElements,} from "react-router-dom"

//pages
import SignIn from "../pages/auth/signin"
import HomeLayout from "../pages/home/homeLayout"

//paths
import { HOME,MAIN_LAYOUT,SIGNIN } from "./constants"
import NotFound from "../pages/404"
import MainLayout from "../pages/mainLayout"

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path={MAIN_LAYOUT} element={<MainLayout />}>
          <Route path={SIGNIN} element={<SignIn />}/>
          <Route path={HOME} element={<HomeLayout />}>
             
          </Route>
        </Route>
          <Route path="*" element={<NotFound />}/>
        </>
    )
)

export default router