import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import CourseDetails from "./pages/CourseDetails";
import Partners from "./pages/Partners";
import Services from "./pages/Services";
import GetInTouch from "./pages/GetInTouch";
import PurchaseSuccess from "./pages/PurchaseSuccess";
import PurchaseCancelled from "./pages/PurchaseCancelled";
import QAHonorsProgram from "./pages/QAHonorsProgram";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="course/:id" element={<CourseDetails />} />
        <Route path="partners" element={<Partners />} />
        <Route path="services" element={<Services />} />
        <Route path="get-in-touch" element={<GetInTouch />} />
        <Route path="qa-honors-program" element={<QAHonorsProgram />} />
        <Route path="purchase/success" element={<PurchaseSuccess />} />
        <Route path="purchase/cancelled" element={<PurchaseCancelled />} />
      </Route>
    </Routes>
  );
}

export default App;
