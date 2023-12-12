import {Route, createBrowserRouter,
    createRoutesFromElements,} from "react-router-dom"

import SignIn from "../pages/auth/signin"
import HomeLayout from "../pages/home/homeLayout"
import DashBoardLayout from "../pages/dashboard/dashBoardLayout"
import MainLayout from "../pages/mainLayout"
import HelpAndSupportLayout from "../pages/help&support/help&supportLayout"
import GradeLayout from "../pages/grade-report/gradeLayout"
import MissingGLayout from "../pages/missing_grades/missingGLayout"
import InstructorsLayout from "../pages/instructors/instructorsLayout"


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path={"/"} element={<MainLayout />}>
          <Route path="/" element={<HomeLayout />}/>
          <Route path={"/dashboard"} element={<DashBoardLayout />}/>
          <Route path={"/help"} element={<HelpAndSupportLayout />}/>
          <Route path={"/grade"} element={<GradeLayout />}/>
          <Route path={"/instructors"} element={<InstructorsLayout />}/>
          <Route path={"/missing"} element={<MissingGLayout/>}/>
        </Route>

          <Route path={"/sign-in"} element={<SignIn />}/>
        </>
    )
)

export default router