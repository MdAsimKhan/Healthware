import "./css/App.css";
import { Container } from "react-bootstrap";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Navbars from "./components/Navbar/Navbars";
import HospitalSignup from "./components/user_registration/hospitalSignup";
import DoctorSignup from "./components/user_registration/doctorSignup";
import PatientSignup from "./components/user_registration/patientSignup";
import Dashboard from "./components/dashboard/dashboard";
import Login from "./components/user_login/doctor_login";
import DoctorDashboard from "./components/dashboard/doctor_dashboard";
function App() {
  return (
    <div className="App">
      <Navbars />
      <div className="content">
        <Container>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" >
              <Route path="hospital" element={<HospitalSignup />} />
              <Route path="doctor" element={<DoctorSignup />} />
              <Route path="patient" element={<PatientSignup />} />
            </Route>

            <Route path="/:id">
              <Route path="dashboard" element={<Dashboard />} />
              {/* <Route path="profile" element={<UserProfile />} /> */}

              <Route path="doctor_dashboard" element={<DoctorDashboard />} />
            </Route>

            <Route path="*" element={<h1>Not found</h1>} />
          </Routes>
        </Container>
      </div>
    </div>
  );
}

export default App;
