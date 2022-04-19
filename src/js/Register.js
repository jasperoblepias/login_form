import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../css/Register.css';

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

        if (id === "" || lName === "" || fName === ""
            || mName === "" || college === ""
            || program === "" || yearLvl === ""
            || pwd === "") {
            alert('Please fill up the form');
            document.myForm.submit();
        } else {

            localStorage.setItem('id', id);
            localStorage.setItem('lName', lName);
            localStorage.setItem('fName', fName);
            localStorage.setItem('mName', mName);
            localStorage.setItem('college', college);
            localStorage.setItem('program', program);
            localStorage.setItem('yearLvl', yearLvl);
            localStorage.setItem('pwd', pwd);

            alert('User is registered');
            routeChange();
        }

    };

    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/';
        navigate(path);
    }

    return (
        <div class="form_container">
            <form id="myForm">
                <ul>
                    <li><input className="input_field" type="number" name="studentID" placeholder="Student ID" required
                        value={id}
                        onChange={(e) => setid(e.target.value)} /> </li>
                    <li><input className="input_field" name="lName" placeholder="Last Name" required
                        value={lName}
                        onChange={(e) => setlName(e.target.value)} /></li>
                    <li><input className="input_field" name="fName" placeholder="Given Name" required
                        value={fName}
                        onChange={(e) => setfName(e.target.value)} /></li>
                    <li><input className="input_field" name="mName" placeholder="Middle Name" required
                        value={mName}
                        onChange={(e) => setmName(e.target.value)} /></li>
                    <li><input className="input_field" name="college" placeholder="College" required
                        value={college}
                        onChange={(e) => setCollege(e.target.value)} /></li>
                    <li><select className="input_field" name="program" placeholder="Program Enrolled" required
                        value={program}
                        onChange={(e) => setProgram(e.target.value)} >
                        <option value="" disabled selected>Program </option>
                        <option value="it">Information Technology</option>
                        <option value="is">Information Systems</option>
                        <option value="cs">Computer Science</option>
                        </select>
                    
                        <select className="input_field" type="number" min="1" max="5" name="yearLvl" placeholder="Year Level" required
                        value={yearLvl}
                        onChange={(e) => setYearLvl(e.target.value)} >
                        <option value="" disabled selected>Year Level</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    </li>
                    <li><input className="input_field" name="pwd" placeholder="Password" required
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)} /></li>
                    <li><input className="input_field" type="password" name="password" placeholder="Confirm Password" required /></li>
                </ul >
                <input className='submitBtn' type="submit" onClick={handle} name="submit"></input>
                <button className='cancelBtn' onClick={routeChange}> Back</button>
            </form >
        </div >
    )
}

export default Register;