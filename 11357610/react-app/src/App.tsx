// App.tsx or index.tsx

import React from "react";
import ReactDOM from "react-dom";
import LoginPage from "./components/LoginPage";

const App: React.FC = () => {
  return (
    <div>
      <LoginPage />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
