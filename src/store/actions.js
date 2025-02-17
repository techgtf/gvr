export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN'
export const VALIDATE_TOKEN = 'VALIDATE_TOKEN'
export const SHORT_COUNT = 'SHORT_COUNT';
export const NORMAL_COUNT = 'NORMAL_COUNT';
export const TOGGLE_MENU_COUNT = 'TOGGLE_MENU_COUNT';
export const TOGGLE_ASCENDING = 'TOGGLE_ASCENDING';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const TOGGLE_FORM_FILL = 'TOGGLE_FORM_FILL';
export const SET_ALL_PROJECTS = 'SET_ALL_PROJECTS';
export const SET_ALL_CITIES = 'SET_ALL_CITIES';
export const SET_ALL_TYPOLOGY = 'SET_ALL_TYPOLOGY';
export const SET_ALL_PROPERTY_TYPES = 'SET_ALL_PROPERTY_TYPES';



export const setAllProjects = (data)=>({
    type:'SET_ALL_PROJECTS',
    value:data
})

export const setAllCities = (data)=>({
    type:'SET_ALL_CITIES',
    value:data
})

export const setAllTypology = (data)=>({
    type:'SET_ALL_TYPOLOGY',
    value:data
})


export const login = ()=>({
    type:'LOGIN'
})

export const logout = ()=>({
    type:'LOGOUT'
})

export const setToken = (token)=>({
    type:'SET_TOKEN',
    value:token
})

export const shortCount = ()=>({
    type:'SHORT_COUNT'
})

export const normalCount = ()=>({
    type:'NORMAL_COUNT'
})

export const toggleMenuCount = (value)=>({
    type:'TOGGLE_MENU_COUNT',
    value:value
})

export const toggleAscending = ()=>({
    type:'TOGGLE_ASCENDING'
})

export const setCurrentPage = (value)=>({
    type:'SET_CURRENT_PAGE',
    value:value
})

export const toggleFormFill = ()=>({
    type:'TOGGLE_FORM_FILL',
})

export const setPropertyTypes = (value)=>({
    type:'SET_ALL_PROPERTY_TYPES',
    value:value
})