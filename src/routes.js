import Dashboard from "./pages/admin/Dashboard";
import MissingGradeForm from "./pages/admin/MissingGradeForm.js";
import GradeReport from "./pages/admin/GradeReport.js";
import InstructorContacts from "./pages/admin/InstructorContacts.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/grade-report",
    name: "Grade Report",
    icon: "nc-icon nc-paper-2",
    component: GradeReport,
    layout: "/admin"
  },
  {
    path: "/missing-grade-form",
    name: "Missing Grade Form",
    icon: "nc-icon nc-notes",
    component: MissingGradeForm,
    layout: "/admin"
  },
  {
    path: "/instructor-contacts",
    name: "Instructor Contacts",
    icon: "nc-icon nc-circle-09",
    component: InstructorContacts,
    layout: "/admin"
  }
];

export default dashboardRoutes;
