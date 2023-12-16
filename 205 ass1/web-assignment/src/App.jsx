
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Reports from "./pages/Reports"
import GradeForm from "./pages/GradeForm"
import Contact from "./pages/Contact"
import Support from "./pages/Support"
import LandingPage from "./pages/LandingPage"
import Login from "./pages/Login"
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
	{
		path: "welcome",
		element: <LandingPage />
	},
	{
		path: 'sign-in',
		element: <Login />
	}
	// {
	// 	path: "settings",
	// 	element: <Settings />,
	// },
])

const App = () => {
	return <RouterProvider router={router} />
}

export default App
