// import React from "react";
// import { Routes as Router, Route } from "react-router-dom";
// import Home from "../components/home/Home";
// import Welcome from "../components/main/Welcome";

// const Routes = () => {
//   return (
//     <>
//       <Router>
//         <Route path="/" exact element={<Home />} />
//         <Route path="welcome" element={<Welcome />} />
//       </Router>
//     </>
//   );
// };

// export default Routes;

import React from "react";
import { Routes as Router, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Welcome from "../components/main/Welcome";

const Routes = () => {
  return (
    <>
      <Router>
        <Route path="/" exact element={<Home />} />
        <Route path="welcome" element={<Welcome />} />
      </Router>
    </>
  );
};

export default Routes;
