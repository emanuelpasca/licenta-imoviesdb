import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import MovieCard from "./components/movie-card/MovieCard";
import Navbar from "./components/Navbar";
import Landing from "./pages/landing-page/Landing";
import { PagePaths } from "./pages/pages";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path={PagePaths.LANDING} element={<Landing />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
