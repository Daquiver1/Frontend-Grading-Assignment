import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const FrameOne = React.lazy(() => import("pages/FrameOne"));
const FrameFive = React.lazy(() => import("pages/FrameFive"));
const Frame = React.lazy(() => import("pages/Frame"));
const FrameSix = React.lazy(() => import("pages/FrameSix"));
const FrameTwo = React.lazy(() => import("pages/FrameTwo"));
const FrameThree = React.lazy(() => import("pages/FrameThree"));
const FrameEight = React.lazy(() => import("pages/FrameEight"));
const FrameFour = React.lazy(() => import("pages/FrameFour"));
const FrameSeven = React.lazy(() => import("pages/FrameSeven"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/frameseven" element={<FrameSeven />} />
          <Route path="/framefour" element={<FrameFour />} />
          <Route path="/frameeight" element={<FrameEight />} />
          <Route path="/framethree" element={<FrameThree />} />
          <Route path="/frametwo" element={<FrameTwo />} />
          <Route path="/framesix" element={<FrameSix />} />
          <Route path="/frame" element={<Frame />} />
          <Route path="/framefive" element={<FrameFive />} />
          <Route path="/frameone" element={<FrameOne />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
