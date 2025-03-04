import * as actionTypes from '../actions'

const initialState = {
    isLogin:false,
    token:null,
}

const userReducer = (state=initialState, action)=>{
    switch(action.type){

        case actionTypes.LOGIN:
            return{
                ...state,
                isLogin:true,
            }

        case actionTypes.LOGOUT:
            return{
                ...state,
                isLogin:false,
            }
        case actionTypes.CITIES:
            return{
                ...state,
                isLogin:false,
            }



        case actionTypes.SET_TOKEN:
            return{
                ...state,
                token:action.value,
            }
        
        default:
            return state;
    }
}

export const {} = userReducer.actions;

export default userReducer;