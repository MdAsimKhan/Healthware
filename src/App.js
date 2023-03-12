import './css/App.css';
import { Container } from 'react-bootstrap';
import Home from './Home';
import Login from './components/user_login/login'
import { Routes, Route } from 'react-router-dom';
import Navbars from './components/Navbars';
import HospitalLogin from './components/user_login/hospitalSignup'
import DoctorLogin from './components/user_login/doctorSignup';
import PatientSignup from './components/user_login/patientSignup';
function App() {
  return (



    <div className='App'>
      <Navbars />
      <div className='content'>
        <Container>
          <Routes>
            <Route  path='/' element={<Home />}></Route>

              <Route path='/signup/hospital' element={<HospitalLogin />} />
              <Route path='/signup/doctor' element={<DoctorLogin />} />
              <Route path='/signup/patient' element={<PatientSignup />} />
              <Route path='/login' element={<Login />} />
      
          </Routes>

        </Container>
      </div>
    </div>




  );
}

export default App;
