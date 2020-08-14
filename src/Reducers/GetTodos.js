import {
  LOADING_TODO,
  UPDATE_TODOS,
  GET_TODOS,
  ADD_TODO_LOCAL,
  SET_TODOS,
} from '../Actions/Types';
import AsyncStorage from '@react-native-community/async-storage';

const INITIAL_STATE = {
  todos: [],
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {...state, todos: action.payload};
    case LOADING_TODO:
      return {...state, loading: action.payload};
    case UPDATE_TODOS:
      const newTodo = action.payload;
      let arr = [...state.todos];
      arr.push(newTodo);
      AsyncStorage.setItem(ADD_TODO_LOCAL, JSON.stringify(arr));
      return {...state, todos: arr};

    case SET_TODOS:
      return {...state, todos: action.payload};
    default:
      return state;
  }
};
