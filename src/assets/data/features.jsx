import Dash from "../screenshots/dashboard.png";
import RG from "../screenshots/report grade.png";
import Ag from "../screenshots/add grade.png";
import In from "../screenshots/instructor.png";
import Hp from "../screenshots/help.png";


export default [
  {
    path: "dashboard",
    headline: "Dashboard Feature",
    description:
      "Immediate Grade Summary and Notifications for Missing Grades        ",
    image: Dash,
    LinkText: "Go To Dashboard",
  },
  {
    path: "dashboard/reported-grades",
    headline: "Reported Grades Feature",
    description:
      "Offers a feature to display all reported grades. You can filter based on semester and academics years",
    image: RG,
    LinkText: "Track Grades",
  },
  {
    path: "dashboard/add-missing-grade",
    headline: "Report A Missing Grade",
    description:
      "Gives you access to report a missing grades to make your academics complete",
    image: RG,
    LinkText: "Report A Grade",
  },

  {
    path: "dashboard/contact-instructor",
    headline: "Connect With Instructor",
    description:
      "Have all instructors' contact details to able to contact them for clarifications",
    image: In,
    LinkText: "Connect An Instructor",
  },
  {
    path: "dashboard/need-help",
    headline: "24/7 Help & Support",
    description:
      "Reach out to the team for any information or when you have a problem",
    image: Hp,
    LinkText: "I have a problem",
  },
];
