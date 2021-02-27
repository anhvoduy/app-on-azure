import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import videoReducer from './videoReducer';

const rootReducer = combineReducers({   
    routing: routerReducer,
    form: formReducer,    
    video: videoReducer
});

export default rootReducer;