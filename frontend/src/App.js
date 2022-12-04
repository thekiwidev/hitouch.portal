import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import User from "./pages/User";
import Userinfo from "./pages/Userinfo";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import "./styles.scss";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />

          <main className="body">
            <Sidebar />
            <div className="body-contents">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/user" element={<User />} />
                <Route path="/register" element={<Register />} />
                <Route path="/userinfo" element={<Userinfo />} />
              </Routes>
            </div>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
