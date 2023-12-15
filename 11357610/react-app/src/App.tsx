// App.tsx or index.tsx

import React from "react";
import ReactDOM from "react-dom";
import HeaderComponent from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import HelpSupport from "./components/HelpSupport";
import ContactInstructor from "./components/ContactInstructorPag";
import ReportMissingGrade from "./components/ReportMissingGrade";

const App: React.FC = () => {
  return (
    <>
      <title>Landing Page</title>
      <body>
        <HeaderComponent />
      </body>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
