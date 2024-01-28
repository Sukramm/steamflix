import "./App.scss";
/* import Payment from "./components/Payment";
 */ import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./components/Welcome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FrontPage from "./pages/FrontPage";
import Terms from "./components/Terms";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/terms" element={<Terms />} />
          {/*               <Route path="/edit/:id" element={<Edit />} />
           */}
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
