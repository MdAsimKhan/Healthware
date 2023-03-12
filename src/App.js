import './css/App.css';
import { Container } from 'react-bootstrap';
import Home from './Home';
import Login from './components/user_login/Login'
import { Routes, Route } from 'react-router-dom';
import Navbars from './Navbars';
import HospitalLogin from './components/user_login/hospital_login'
function App() {
  return (



    <div className='App'>
      <Navbars />
      <div className='content'>
        <Container>
          <Routes>
            <Route  path='/' element={<Home />}></Route>

              <Route path='/signup/hospital' element={<HospitalLogin />} />
              <Route path='/login' element={<Login />} />
      
          </Routes>

        </Container>
      </div>
    </div>




  );
}

export default App;
