import React, { Component } from "react";
import "./navbar.css";

export class Signup extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="logoWithText">
                    <div className="logo">
                        <img src="../svg/logo.svg" alt="Logo of The Survey" />
                    </div>
                    <div className="text">
                        <span className="survey">The Survey</span>
                    </div>
                </div>
                <div className="signup">
                    <a href="assets/html/signup.html">Sign Up</a>
                </div>
            </div>
        );
    }
}

export default Signup;
