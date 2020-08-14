import {LOADING_TODO, UPDATE_TODOS, GET_TODOS} from '../Actions/Types';

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
      return {...state, todos: arr};
    default:
      return state;
  }
};
