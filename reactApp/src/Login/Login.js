import React, { useState } from "react";
import "./Login.css";

function Login() {



    return (
        <div className="login__container">
            <img id="login_logo" alt="logo_usac" src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png"/>
            <h2>Log in to Usac Media</h2>
            <form className="login-form" action="#">
                <div className="mb-3 bg-color">
                    <label>Phone, email, or username</label>
                    <input type="text" className="form-control" required />
                </div>
                <div className="mb-3 bg-color">
                    <label>Password</label>
                    <input type="password" className="form-control" required />
                </div>
                <button type="button" className="btn btn-custom btn-lg btn-block mt-3">Log in</button>
                <div className="text-center pt-3 pb-3">
                    <a href="#" className="">Forgotten password?</a> |
                    <a href="#" className=""> Sign up for Twitter</a>
                </div>
            </form>
        </div>
    );
}

export default Login;