import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Footer from "./components/lib/Footer";
import Navbar from "./components/lib/Navbar";
import LoginPage from "./pages/auth/login-page/LoginPage";
import RegisterPage from "./pages/auth/register-page/RegisterPage";
import Landing from "./pages/landing-page/Landing";
import { PagePaths } from "./pages/pages";
import TitlePage from "./pages/title-page/TitlePage";
import "react-toastify/dist/ReactToastify.css";
import { UserAuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <div className="app">
      <UserAuthContextProvider>
        <BrowserRouter>
          <ToastContainer />
          <Navbar></Navbar>
          <Routes>
            <Route exact path={PagePaths.LANDING} element={<Landing />} />
            <Route path={PagePaths.TITLE_PAGE} element={<TitlePage />} />
            <Route path={PagePaths.LOGIN} element={<LoginPage />} />
            <Route path={PagePaths.REGISTER} element={<RegisterPage />} />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
