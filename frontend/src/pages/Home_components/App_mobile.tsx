import React from "react";
import App_desc from "../../components/App_desc";

const App_mobile: React.FC = () => {
  return (
    <div className="mobile">
      <div className="container">
        <div className="row bg-app">
          <div className="col-12">
          <App_desc/> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default App_mobile;
