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
      "Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.",
  },
  {
    color: "blue",
    title: "Grade Report",
    icon: TrophyIcon,
    screen: "/gradeReport",
    description:
      "Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious.",
  },
  {
    color: "gray",
    title: "Dashboard",
    icon: ScaleIcon,
    screen: "/dashboard",
    description:
      "Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!",
  },
];

export default featuresData;
