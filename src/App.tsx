/// <reference types="vite-plugin-svgr/client" />

import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Dashboard from "./pages/Dashboard.tsx"
import Reports from "./pages/Reports.tsx"
import GradeForm from "./pages/GradeForm.tsx"
import Contact from "./pages/Contact.tsx"
import Support from "./pages/Support.tsx"
// import Settings from "./pages/Settings.tsx"

const router = createBrowserRouter([
	{
		path: "/",
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
