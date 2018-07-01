import {combineReducers} from 'redux';
import polls from './polls';
import auth from './auth';

const index = combineReducers({auth: auth(), polls});

export default index;

