import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Register = () => {

    const [id, setid] = useState('');
    const [lName, setlName] = useState('');
    const [fName, setfName] = useState('');
    const [mName, setmName] = useState('');
    const [college, setCollege] = useState('');
    const [program, setProgram] = useState('');
    const [yearLvl, setYearLvl] = useState('');
    const [pwd, setPwd] = useState('');

    const handle = () => {
        localStorage.setItem('id', id);
        localStorage.setItem('lName', lName);
        localStorage.setItem('fName', fName);
        localStorage.setItem('mName', mName);
        localStorage.setItem('college', college);
        localStorage.setItem('program', program);
        localStorage.setItem('yearLvl', yearLvl);
        localStorage.setItem('pwd', pwd);

        alert('User is registered');
        
     };

     let navigate = useNavigate(); 
     const routeChange = () =>{ 
       let path = '/'; 
       navigate(path);
     }

    return (
        <div class="form_wrapper">
            <div class="form_container">
                <div class="row clearfix">
                    <div class="">
                        <form>
                            <div class="input_field"> <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
                                <input type="number" name="studentID" placeholder="Student ID" required 
                                value={id}
                                onChange={(e) => setid(e.target.value)}/>
                                <input name="lName" placeholder="Last Name" required 
                                value={lName}
                                onChange={(e) => setlName(e.target.value)}/>
                                <input name="fName" placeholder="Given Name" required
                                value={fName}
                                onChange={(e) => setfName(e.target.value)} />
                                <input name="mName" placeholder="Middle Name" required 
                                value={mName}
                                onChange={(e) => setmName(e.target.value)}/>
                                <input name="college" placeholder="College" required
                                value={college}
                                onChange={(e) => setCollege(e.target.value)} />
                                <input name="program" placeholder="Program Enrolled" required 
                                value={program}
                                onChange={(e) => setProgram(e.target.value)}/>
                                <input type="number" name="yearLvl" placeholder="Year Level" required 
                                value={yearLvl}
                                onChange={(e) => setYearLvl(e.target.value)}/>
                                <input name="pwd" placeholder="Password" required 
                                value={pwd}
                                onChange={(e) => setPwd(e.target.value)}/>
                                <input type="password" name="password" placeholder="Confirm Password" required />
                            </div>
                            <input type={"submit"} onClick={handle} name="submit"></input>
                            <button onClick={routeChange}> Back</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;