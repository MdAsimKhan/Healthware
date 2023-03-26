import "./css/App.css";
import { Container } from "react-bootstrap";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Navbars from "./components/navbar/Navbars";
import HospitalSignup from "./components/user_registration/hospitalSignup";
import DoctorSignup from "./components/user_registration/doctorSignup";
import PatientSignup from "./components/user_registration/patientSignup";
import LoginPage from "./components/user_login/login_fr";
import DoctorDashboard from "./components/dashboard/doctor_dashboard";
import PatientDashboard from "./components/dashboard/patient_dashboard";
import Profile from "./components/dashboard/pages/user_profile";
import Appointment from "./components/dashboard/pages/book_doctor_appointment";

function App() {
  return (
    <div className="App">
      <Navbars />
      <div className="content">
        <Container>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>

            <Route path="/signup">
              <Route path="hospital" element={<HospitalSignup />} />
              <Route path="doctor" element={<DoctorSignup />} />
              <Route path="patient" element={<PatientSignup />} />
            </Route>

            <Route path="/:id">
              <Route path="p/profile" element={<Profile />} />
              <Route path="p/appointments" element={<Appointment />} />

              {/* <Route path="profile" element={<UserProfile />} /> */}
              <Route path="doctor_dashboard" element={<DoctorDashboard />} />
              <Route path="patient_dashboard" element={<PatientDashboard />} />
            </Route>

            <Route path="*" element={<h1>Not found</h1>} />
          </Routes>
        </Container>
      </div>
    </div>
  );
}

export default App;
