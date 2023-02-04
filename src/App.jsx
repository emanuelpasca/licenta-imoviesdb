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
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route exact path={PagePaths.LANDING} element={<Landing />} />
          <Route path={PagePaths.TITLE_PAGE} element={<TitlePage />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
