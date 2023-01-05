import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/lib/Footer";
import Navbar from "./components/lib/Navbar";
import Landing from "./pages/landing-page/Landing";
import { PagePaths } from "./pages/pages";
import TitlePage from "./pages/title-page/TitlePage";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path={PagePaths.LANDING} element={<Landing />} />
        </Routes>
        <Routes>
          <Route path={PagePaths.TITLE_PAGE} element={<TitlePage />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
