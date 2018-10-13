import {combineReducers} from 'redux';
import {catReducer} from './cat';
import {dogReducer} from './dog';

export const reducer = combineReducers({
  catReducer: catReducer,
  dogReducer: dogReducer
});