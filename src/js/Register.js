import React from 'react'

const Register = () => {
    return (
        <div class="form_wrapper">
            <div class="form_container">
                <div class="row clearfix">
                    <div class="">
                        <form>
                            <div class="input_field"> <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
                                <input type="number" name="studentID" placeholder="Student ID" required />
                            </div>
                            <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                                <input name="lName" placeholder="Last Name" required />
                            </div>
                            <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                                <input name="fName" placeholder="Given Name" required />
                            </div>
                            <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                                <input name="mName" placeholder="Middle Name" required />
                            </div>
                            <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                                <input name="college" placeholder="College" required />
                            </div>
                            <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                                <input name="program" placeholder="Program Enrolled" required />
                            </div>
                            <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                                <input type="number" name="yrLevel" placeholder="Year Level" required />
                            </div>
                            <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                                <input name="password" placeholder="Password" required />
                            </div>
                            <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                                <input type="password" name="password" placeholder="Confirm Password" required />
                            </div>
                            <input type={"submit"} name="submit"></input>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;