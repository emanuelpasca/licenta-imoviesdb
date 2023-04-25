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
import { UserFavoritesContextProvider } from "./contexts/UserFavoritesContext";
import FavoritesPage from "./pages/favorites-page/FavoritesPage";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <div className="app font-mono">
      <UserAuthContextProvider>
        <UserFavoritesContextProvider>
          <BrowserRouter>
            <ToastContainer theme="dark" />
            <Navbar></Navbar>
            <Routes>
              <Route exact path={PagePaths.LANDING} element={<Landing />} />
              <Route path={PagePaths.TITLE_PAGE} element={<TitlePage />} />
              <Route path={PagePaths.LOGIN} element={<LoginPage />} />
              <Route path={PagePaths.REGISTER} element={<RegisterPage />} />
              <Route
                path={PagePaths.FAVORITES}
                element={
                  <ProtectedRoute>
                    <FavoritesPage />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Footer></Footer>
          </BrowserRouter>
        </UserFavoritesContextProvider>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
