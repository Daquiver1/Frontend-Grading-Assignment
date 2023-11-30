import {Route, createBrowserRouter,
    createRoutesFromElements,} from "react-router-dom"
import SignIn from "../pages.jsx/auth/signin"


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
          <Route path="/sign-in" element={<SignIn />}/>
          <Route path="*" element={<SignIn />}/>
        </>
    )
)

export default router