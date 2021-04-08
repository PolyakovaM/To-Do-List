import { combineReducers, createStore } from 'redux';
import appReducer from './reducer';

const reducers = combineReducers({
  appReducer
})

const store = createStore(reducers)

store.subscribe(() => localStorage.setItem('toDoList', JSON.stringify(store.getState().appReducer.newToDoList)))

export default store
