import { GRADES, DASHBOARD, MISSING_GRADES } from "../constants/page-paths";

import {
  UserCircleIcon,
  HomeIcon,
  XIcon,
  DocumentIcon,
  ViewBoardsIcon,
} from "@heroicons/react/outline";

const navigation = [
  {
    name: "Dashboard",
    href: DASHBOARD,
    icon: HomeIcon,
  },
  {
    name: "Grades",
    href: GRADES,
    icon: ViewBoardsIcon,
  },
  {
    name: "Missing-Grades",
    href: MISSING_GRADES,
    icon: DocumentIcon,
  },
];

export default navigation;
