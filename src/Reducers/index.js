import {combineReducers} from 'redux';
import GetTodos from './GetTodos';

export default combineReducers({
  todoResponse: GetTodos,
});
