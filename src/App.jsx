import "./App.css";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <MovieCard></MovieCard>
    </div>
  );
}

export default App;
