import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";

import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Home from "./Pages/Home";
import Info from "./Pages/Info";
import Dashboard from "./Pages/Dashboard";
import BasicInfo from "./Components/BasicInfo";
import VisaInfo from "./Components/VisaInfo";
import EducationInfo from "./Components/EducationInfo";
import OtherInfo from "./Components/OtherInfo";
import { AuthProvider } from "./Contexts/AuthContext";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />}>
                <Route path="/user" element={<h1>User Info</h1>} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/info" element={<Info />}>
                  <Route path="basic" element={<BasicInfo />} />
                  <Route path="education" element={<EducationInfo />} />
                  <Route path="visa" element={<VisaInfo />} />
                  <Route path="others" element={<OtherInfo />} />
                </Route>
              </Route>
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />
            </Routes>
          </div>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
