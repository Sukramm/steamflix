import "./App.scss";
/* import Payment from "./components/Payment";
 */ import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./components/Welcome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FrontPage from "./pages/FrontPage";
import Terms from "./components/Terms";
import Library from "./pages/Library";
import UserProfile from "./pages/UserProfile";
import Community from "./pages/Community";
import Store from "./pages/Store";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/" element={<FrontPage />} />
          <Route path="/store" element={<Store />} />
          <Route path="/library" element={<Library />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/community" element={<Community />} />
          <Route path="/store" element={<Store />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/signin" element={<SignIn />} />
          {/*               <Route path="/edit/:id" element={<Edit />} />
           */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
