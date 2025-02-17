import * as actionTypes from '../actions'

const initialState = {
    isFormFill:false,
    allProjects:[],
    allCities:[],
    allTypology:[],
}

const projectsReducers = (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.TOGGLE_FORM_FILL:
            return {
                ...state,
                isFormFill:!state.isFormFill
            }

        case actionTypes.SET_ALL_PROJECTS:
            return{
                ...state,
                allProjects:[
                    ...state.allProjects,
                    ...action.value
                ]
            }

            case actionTypes.SET_ALL_CITIES:
            return{
                ...state,
                allCities:[
                    ...state.allCities,
                    ...action.value
                ]
            }

            case actionTypes.SET_ALL_TYPOLOGY:
            return{
                ...state,
                allTypology:[
                    ...state.allTypology,
                    ...action.value
                ]
            }


        default:
            return state
    }
}

export default projectsReducers