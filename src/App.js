import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts";
import HomePage from "./pages/home";
import LandingPage from "./pages/landingPage";
import './index.css'
import ScrollToTop from "components/ScrollTop";

const App = () => {
  return (
    <>
    <ScrollToTop/>
      <Routes>
        <Route path="/app" element={<HomePage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
      </>
  );
};

export default App;
