import {UPDATE_TODOS, LOADING_TODO, SET_TODOS, ADD_TODO_LOCAL} from './Types';
import AsyncStorage from '@react-native-community/async-storage';

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
export const setTodos = () => {
  try {
    return async (dispatch) => {
      let data = await AsyncStorage.getItem(ADD_TODO_LOCAL);
      console.log('data:', data);
      if (data !== null) {
        dispatch({type: SET_TODOS, payload: JSON.parse(data)});
      }
    };
  } catch (e) {
    console.log(e);
  }
};
