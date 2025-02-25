import React, { useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import { setLogin } from "../redux/admin/userSlice";
import * as CONFIG from "../../config";
import Loader from "../common/Loader/loader";
import { Encrypt } from "root/config/Hash";

import "./assets/css/admin.css";

import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const isLogin = useSelector((state) => state.user.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errors, setErrors] = useState({});

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    if (isLogin) {
      return navigate(CONFIG.ADMIN_ROOT);
    }
  }, [useNavigate, useSelector]);

  useEffect(() => {
    // Add 'admin_body' class when on admin routes
    document.body.classList.add("admin_body");

    // Cleanup function to remove the class when leaving admin routes
    return () => {
      document.body.classList.remove("admin_body");
    };
  }, [location]);

  const loginFunc = async () => {
    setIsLoading(true);
    var emailVal = emailRef.current.value;
    var passwordVal = passwordRef.current.value;
    try {
      setEmailError("");
      setPasswordError("");

      if (!emailVal) {
        setEmailError("Please enter your email");
        setIsLoading(false);
        throw new Error("Invalid Email and Password");
      }

      if (!passwordVal) {
        setPasswordError("Please enter your password");
        setIsLoading(false);
        throw new Error("Invalid Email and Password");
      }

      // if (!CONFIG.TOKEN) {
      //     throw new Error('JWT secret not available');
      // }

      const response = await fetch(CONFIG.API_URL + "admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailVal,
          password: passwordVal,
        }),
      });

      if (!response.ok && response.status !== 200) {
        passwordRef.current = "";
        setIsLoading(false);
        throw new Error("Invalid Email and Password");
      }

      const data = await response.json();

      // get token from api
      const token = data.authorisation.token;

      // encrypt or add character
      const encryptToken = Encrypt(token);

      emailVal = "";
      passwordVal = "";

      localStorage.setItem("token", encryptToken);

      setIsLoading(false);
      dispatch(setLogin());
      toast.success("Login Successful");
      return navigate(`${CONFIG.BASE_ROOT}admin`);
    } catch (err) {
      setIsLoading(false);
      return toast.error(err.message);
    }
  };

  const loginHandler = (e) => {
    e.preventDefault();

    loginFunc();
  };

  if (isLoading) {
    return <Loader />; // Use the Loader component
  }

  return (
    <>
      <div className="admin_container login_page">
        <div className="flex flex-wrap mx-0">
          <div className="left_col w-full md:w-1/2"></div>

          <div className="right_col w-full md:w-1/2">
            <div className="logo">
              <img
                src={CONFIG.ADMIN_ASSETS + "images/logo-color.png"}
                alt="logo"
                className="max-w-full h-auto"
              />
            </div>

            <div className="form_data">
              <h3 className="title text-xl font-semibold mb-4">Sign In</h3>

              <form id="loginForm" onSubmit={loginHandler}>
                <div className="form-group mb-6">
                  <label
                    className="form-label block mb-2"
                    htmlFor="emailAddress"
                  >
                    Email Address
                  </label>
                  <input
                    ref={emailRef}
                    type="email"
                    className="form-control w-full px-3 py-2 border rounded"
                    required=""
                    placeholder="Email or Username"
                  />
                  {emailError && (
                    <div className="errMsg text-red-500 mt-2">{emailError}</div>
                  )}
                </div>

                <div className="form-group mb-6">
                  <label
                    className="form-label block mb-2"
                    htmlFor="loginPassword"
                  >
                    Password
                  </label>
                  <input
                    ref={passwordRef}
                    type="password"
                    className="form-control w-full px-3 py-2 border rounded"
                    id="loginPassword"
                    required=""
                    placeholder="Password"
                  />
                  {passwordError && (
                    <div className="errMsg text-red-500 mt-2">
                      {passwordError}
                    </div>
                  )}
                </div>

                <div className="my-6">
                  <button
                    className="btn_primary submit_btn w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
