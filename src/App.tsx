/// <reference types="vite-plugin-svgr/client" />

import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Dashboard from "./pages/Dashboard.tsx"
import Reports from "./pages/Reports.tsx"
import GradeForm from "./pages/GradeForm.tsx"
import Contact from "./pages/Contact.tsx"
import Support from "./pages/Support.tsx"
import SignIn from "./pages/sigin.tsx"
import  Landing from "./pages/Landing.tsx"
// import Settings from "./pages/Settings.tsx"
import "bootstrap/dist/css/bootstrap.min.css"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Landing />,
	},
	{
		path: "/signin",
		element: <SignIn />,
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
	},
	
	{
		path: "/dashboard",
		element: <Dashboard />,
	},
	{
		path: "reports",
		element: <Reports />,
	},
	{
		path: "grade-form",
		element: <GradeForm />,
	},
	{
		path: "contact",
		element: <Contact />,
	},
	{
		path: "support",
		element: <Support />,
	},
	// {
	// 	path: "settings",
	// 	element: <Settings />,
	// },
])

const App = () => {
	return <RouterProvider router={router} />
}

export default App
