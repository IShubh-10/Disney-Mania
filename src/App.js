import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Movies from "./components/Movies";
import Watchlists from "./components/Watchlists";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/watchlist" element={<Watchlists />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;