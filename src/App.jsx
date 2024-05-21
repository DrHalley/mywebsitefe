import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/" element={<ProjectsPage />} />
      <Route path="/about/" element={<AboutPage />} />
      <Route path="/contact/" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
