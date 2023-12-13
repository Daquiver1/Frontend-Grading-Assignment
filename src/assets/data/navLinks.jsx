import { SiGoogleanalytics } from "react-icons/si";
import { MdBookmarkAdded } from "react-icons/md";
import { MdBookmarkAdd } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

const navlinks = [
  {
    path: ".",
    icon: <SiGoogleanalytics />,
    label: "Dashboard",
  },
  {
    path: "reported-grades",
    icon: <MdBookmarkAdded />,
    label: "Reports",
  },
  {
    path: "add-missing-grade",
    icon: <MdBookmarkAdd />,
    label: "Add Grade",
  },
  {
    path: "contact-instructor",
    icon: <MdMessage />,
    label: "Contacts",
  },
  {
    path: "need-help",
    icon: <FaQuestionCircle />,
    label: "Help",
  },
];

export default navlinks;
