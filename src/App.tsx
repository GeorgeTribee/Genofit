import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import CourseDetails from "./pages/CourseDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="course/:id" element={<CourseDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
