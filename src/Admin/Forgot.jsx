import React from "react";
import './assets/css/admin.css';
const public_url = import.meta.env.VITE_PUBLIC_URL;

const Forgot = ()=>{
    return(
        <>
            <div className="row mx-0">
                <div className="col-md-6 left_col">
                    
                </div>

                <div className="col-md-6 right_col">
                    <div className="logo">
                        <img src={public_url + 'Admin/images/logo-color.webp'} alt="logo" className="img-fluid" />
                    </div>

                    <div className="form_data">
                        <h3 className="title">Reset Password</h3>
                        <p className="mb-4 text-muted">Enter the email address or mobile number associated with your account.</p>
                        
                        <form id="loginForm" method="post">
                            <div className="form-group mb-3">
                                <label className="form-label" htmlFor="emailAddress">Email or Mobile Number</label>
                                <input type="email" className="form-control" required="" placeholder="Enter Email or Mobile Number" />
                            </div>

                            <div className="d-grid my-4">
                                <button className="btn btn_primary submit_btn" type="submit">Continue</button>
                            </div>

                            <p className="text-2 text-muted text-center">Return to <a href="#">Sign In</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forgot;