import {combineReducers} from 'redux';
import homeReducer from './../scenes/home/redux/homeReducer';

const rootReducer = combineReducers({
  home: homeReducer,
});
export default rootReducer;
