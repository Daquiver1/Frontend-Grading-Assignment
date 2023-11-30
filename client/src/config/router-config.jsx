import {Route, createBrowserRouter,
    createRoutesFromElements,} from "react-router-dom"

//pages
import SignIn from "../pages/auth/signin"
import HomeLayout from "../pages/home/homeLayout"

//paths
import { HOME,SIGNIN } from "./constants"
import NotFound from "../pages/404"

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
          <Route path={SIGNIN} element={<SignIn />}/>
          <Route path={HOME} element={<HomeLayout />}>
             
          </Route>
          <Route path="*" element={<NotFound />}/>
        </>
    )
)

export default router