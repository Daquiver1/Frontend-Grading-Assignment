import {
  AcademicCapIcon,
  TrophyIcon,
  ScaleIcon,
} from "@heroicons/react/24/solid";

const featuresData = [
  {
    color: "gray",
    title: "Missing Grade Report",
    icon: AcademicCapIcon,
    screen: "/missinggradereport",
    description:
      "Encountered a missing grade? The Missing Grade Form Page facilitates the reporting process. Include information such as the name of the course, the instructor, the anticipated grade, and an explanation.",
  },
  {
    color: "blue",
    title: "Grade Report",
    icon: TrophyIcon,
    screen: "/gradeReport",
    description:
      "Examine your academic performance in great detail using the Grade Report Page. Acquire comprehensive information regarding your course performance and grades. To view grades by semester or academic year, utilise filters. ",
  },
  {
    color: "gray",
    title: "Dashboard",
    icon: ScaleIcon,
    screen: "/dashboard",
    description:
      "Our central gateway informs students of missing grades. Quick connections to the Grade Report, Missing Grade Form, and Instructor Contact simplify your academic journey. Stay informed and control your academic progress.",
  },
];

export default featuresData;
