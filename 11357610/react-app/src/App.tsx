// App.tsx or index.tsx

import React from "react";
import ReactDOM from "react-dom";
import HeaderComponent from "./components/Header";
import IntroSectionComponent from "./components/IntroSection";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import HelpSupport from "./components/Support";

const App: React.FC = () => {
  return (
    <>
      <title>Landing Page</title>
      <body>
        <HelpSupport />
      </body>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
