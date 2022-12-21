import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Userinfo from "./pages/Userinfo";

import "./styles.scss";
import UserInfoForm from "./components/UserInfoForm";
import EducationForm from "./components/EducationForm";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import { useSelector } from "react-redux";
import VisaForm from "./components/VisaForm";
import { PersonalProvider } from "./contexts/PersonalContext";
// import { AuthProvider } from "./contexts/AuthContext";

function App() {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <Router>
        <PersonalProvider>
          <div className="App">
            <Header />
            <main className="body">
              {user && <Sidebar />}
              <div className="body-contents">
                <Routes>
                  <Route
                    path="/"
                    element={!user ? <Navigate to="/login" /> : <Dashboard />}
                  />
                  <Route path="/userinfo" element={<Userinfo />}>
                    <Route path="basic" element={<UserInfoForm />} />
                    <Route path="education" element={<EducationForm />} />
                    <Route path="visa" element={<VisaForm />} />
                    <Route path="others" element={<EducationForm />} />
                  </Route>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                </Routes>
              </div>
            </main>
          </div>
        </PersonalProvider>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
