import './css/App.css';
import { Container } from 'react-bootstrap';
import Home from './Home';
import Login from './components/user_login/login'
import { Routes, Route } from 'react-router-dom';
import Navbars from './components/Navbars';
import HospitalLogin from './components/user_login/hospitalSignup'
import DoctorLogin from './components/user_login/doctorSignup';
import PatientSignup from './components/user_login/patientSignup';
import Dashboard from './components/dashboard/dashboard';
import UserProfile from './components/dashboard/profile';

import DoctorDashboard from './components/dashboard/Doctor_Dashboard'

function App() {
  return (



    <div className='App'>
      <Navbars />
      <div className='content'>
        <Container>
          <Routes>
            <Route  path='/' element={<Home />}></Route>
              <Route path='/login' element={<Login />} />

              <Route path='/signup' >
              <Route path='hospital' element={<HospitalLogin />} />
              <Route path='doctor' element={<DoctorLogin />} />
              <Route path='patient' element={<PatientSignup />} />
              </Route>

              <Route path='/:id'>
              <Route path='dashboard' element={<Dashboard/>}/>
              <Route path='profile' element={<UserProfile/>}/>

              <Route path='Doctor_Dashboard' element={<DoctorDashboard/>}/>

              </Route>

              
              <Route path='*' element={<h1>Not found</h1>} />

          </Routes>

        </Container>
      </div>
    </div>




  );
}

export default App;
