// App.tsx or index.tsx

import React from "react";
import ReactDOM from "react-dom";
import HeaderComponent from "./components/Header";
import IntroSectionComponent from "./components/IntroSection";

const App: React.FC = () => {
  return (
    <>
      <title>Landing Page</title>
      {/* You can add links to external stylesheets here if needed */}
      <body>
        <HeaderComponent />
        <IntroSectionComponent />
        {/* Any other components or content can be added here */}
      </body>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
