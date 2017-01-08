import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import comments from './comments';
import heros from './heros';
import likes from './likes';
import loading from './loading';

const rootReducer = combineReducers({comments, likes, heros, loading, routing: routerReducer });

export default rootReducer;
