import React, {useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {  toast } from 'react-toastify';
import {useNavigate } from 'react-router-dom';
import * as actionTypes from 'root/store/actions'
import * as CONFIG from 'root/config'

import './assets/css/admin.css';

import 'react-toastify/dist/ReactToastify.css';

const Login = ()=>{
    const isLogin = useSelector(state=>state.user.isLogin)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const emailRef = useRef('');
    const passwordRef = useRef('');

    useEffect(()=>{
        if(isLogin){
            return navigate('/admin')
        }
    }, [useNavigate, useSelector])

    

    const loginFunc = async()=>{
        try{

            if (!CONFIG.JWT_SECRET) {
                throw new Error('JWT secret not available');
            }

            const response = await fetch(CONFIG.API_URL + 'admin/login', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    email:emailRef.current.value,
                    password:passwordRef.current.value
                })
            });

            if(!response.ok){
               passwordRef.current.value = '';
                throw new Error('Invalid Email and Password');
            }

            const data = await response.json();
            
            // dispatch(actionTypes.setToken())
            localStorage.setItem('token', data.authorisation.token)

            emailRef.current.value = '';
            passwordRef.current.value = '';

            dispatch(actionTypes.login())
            toast.success('Login Successful')
            
            return navigate("/admin")

        }catch(err){
            toast.error(err.message)
        }
        
    }

    const loginHandler = (e)=>{
        e.preventDefault();

        loginFunc();
    }

    return(
        <>
            <div className="admin_container login_page">
                <div className="row mx-0">
                    <div className="col-md-6 left_col">
                    </div>

                    <div className="col-md-6 right_col">
                        <div className="logo">
                            <img src={CONFIG.ADMIN_ASSETS + 'logo-color.webp'} alt="logo" className="img-fluid" />
                        </div>

                        <div className="form_data">
                            <h3 className="title">Sign In</h3>
                            
                            <form id="loginForm" onSubmit={loginHandler}>
                                <div className="form-group mb-3">
                                    <label className="form-label" htmlFor="emailAddress">Email Address</label>
                                    <input ref={emailRef} type="email" className="form-control" required="" placeholder="Email or Username" />
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="loginPassword">Password</label>
                                    <input ref={passwordRef} type="password" className="form-control" id="loginPassword" required="" placeholder="Password" />
                                </div>

                                <div className="row my-4">
                                    <div className="col">
                                        <div className="form-check">
                                            <input id="remember-me" name="remember" className="form-check-input" type="checkbox" />
                                            <label className="form-check-label" htmlFor="remember-me">Remember Me</label>
                                        </div>
                                    </div>

                                    <div className="col text-end"><a href="forgot-password-18.html">Forgot Password ?</a></div>
                                </div>

                                <div className="d-grid my-4">
                                    <button className="btn btn_primary submit_btn" type="submit">Sign In</button>
                                </div>

                                {/* <p className="text-2 text-muted text-center">Not a member? <a href="register-18.html">Sign Up now</a></p> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Login;