import {Route, createBrowserRouter,
    createRoutesFromElements,} from "react-router-dom"

//pages
import SignIn from "../pages/auth/signin"
import HomeLayout from "../pages/home/homeLayout"
import DashBoardLayout from "../pages/dashboard/dashBoardLayout"
import NotFound from "../pages/404"
import MainLayout from "../pages/mainLayout"
import HelpAndSupportLayout from "../pages/help&support/help&supportLayout"
import GradeLayout from "../pages/grade-report/gradeLayout"
import MissingGLayout from "../pages/missing_grades/missingGLayout"

//paths
import { HOME,MAIN_LAYOUT,SIGNIN,DASHBOARD,HELP_AND_SUPPORT, GRADE_REPORT, MISSING_GRADES } from "./constants"

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path={MAIN_LAYOUT} element={<MainLayout />}>
          <Route path={HOME} element={<HomeLayout />}/>
          <Route path={DASHBOARD} element={<DashBoardLayout />}/>
          <Route path={HELP_AND_SUPPORT} element={<HelpAndSupportLayout />}/>
          <Route path={GRADE_REPORT} element={<GradeLayout />}/>
          <Route path={MISSING_GRADES} element={<MissingGLayout/>}/>
        </Route>

          <Route path={SIGNIN} element={<SignIn />}/>
          <Route path="*" element={<NotFound />}/>
        </>
    )
)

export default router