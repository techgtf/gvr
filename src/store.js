import { configureStore } from '@reduxjs/toolkit';
import toggelPageReducer from './redux/frontend/toggelSlice';
import sideMenuReducer from './redux/adminSidebarSlice';
import rootReducer from './store/reducers/rootReducers';
import projectsReducers from './store/reducers/projectsReducers';

const store = configureStore({
    reducer: {
        adminSideMenu:sideMenuReducer,
        user:rootReducer,
        projects:projectsReducers,
        toggelPage: toggelPageReducer,
    },
    
});

export default store;
