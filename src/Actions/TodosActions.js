import {UPDATE_TODOS, LOADING_TODO} from './Types';

export const updateTodo = (payload) => {
  return (dispatch) => {
    dispatch({type: UPDATE_TODOS, payload});
  };
};

export const loadingTodo = (payload) => {
  return (dispatch) => {
    dispatch({type: LOADING_TODO, payload});
  };
};
