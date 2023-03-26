// import '../../css/LoginPage.css'
import DoctorSignup from "./doctorSignup"
import PatientSignup from "./patientSignup"
import HospitalSignup from "./hospitalSignup"
import { useState } from "react"
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';


const Signup = () => {
    const [value, setValue] = useState();
    /*
     * The second argument that will be passed to
     * `handleChange` from `ToggleButtonGroup`
     * is the SyntheticEvent object, but we are
     * not using it in this example so we will omit it.
     */
    const handleChange = (val) => {
    
        if (val ===1) {
     
            setValue(<DoctorSignup/>)
        } 
        else if (val === 2){
         
            setValue(<PatientSignup/>)
        }
        else if (val === 3){
           
            setValue(<HospitalSignup/>)
        }
        
    };




    return (
        <>
            <div >
                <h1>Signup for?</h1>

                <section className="navbody">
                    <ToggleButtonGroup type="radio" name="options" defaultValue={1}  onChange={handleChange}>
                        <ToggleButton id="tbg-radio-1" value={1}>
                            Doctor Signup 
                        </ToggleButton>
                        <ToggleButton id="tbg-radio-2"  value={2}>
                            Patient Signup
                        </ToggleButton>
                        <ToggleButton id="tbg-radio-3" value={3}>
                            hospital Signup
                        </ToggleButton>
                    </ToggleButtonGroup>
                </section>
                <br/>
                <section >
                {!value ? <DoctorSignup/> : value} 
                </section>
            </div>
        </>
    )
}
 
export default Signup;