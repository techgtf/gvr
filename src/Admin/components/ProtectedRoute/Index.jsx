import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Request from "root/config/Request";
import Loader from '../../../common/Loader/loader';
import * as actionTypes from 'root/store/actions';
import { setLogin } from "../../../redux/admin/userSlice";
import * as CONFIG from '../../../../config';

const ProtectedRoute = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLogin = useSelector(state => state.user.isLogin);

    useEffect(() => {
        const validateToken = async () => {
            // debugger
            try {
                setIsLoading(true);
                const response = await Request('admin/validateToken', 'POST');


                if (response.statusCode !== 200) {
                    dispatch(actionTypes.logout());
                    navigate(CONFIG.ADMIN_ROOT + "login");
                    throw new Error('Please sign in first');
                } else {
                    return dispatch(setLogin());
                }
            } catch (error) {
                toast.error(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        // Only validate token if not already logged in
        // validateToken();
        // setIsLoading(false);
        if (!isLogin) {
            validateToken();
        } else {
            setIsLoading(false); // Set loading to false if already logged in
        }
    }, [isLogin, dispatch, navigate]);

    if (isLoading) {
        return <Loader />;
    }

    return children;
}

export default ProtectedRoute;
