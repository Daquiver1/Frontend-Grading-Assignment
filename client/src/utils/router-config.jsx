import {Route, createBrowserRouter,
    createRoutesFromElements,} from "react-router-dom"
import Signup from "../pages.jsx/auth/signin"


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
          <Route path="/sign-up" element={<Signup />}/>
        </>
    )
)

export default router