const ADD_CASE = 'ADD_CASE'
const DELETE_LIST = 'DELETE_LIST'
const EDIT_ITEM = 'EDIT_ITEM'
const DELETE_LIST_ITEM = 'DELETE_LIST_ITEM'

const initialState = {
  newToDoList: localStorage.getItem('toDoList') ? JSON.parse(localStorage.getItem('toDoList')) : []
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CASE: 
      const newCaseObj = {
        // id: action.newCase,
        startCase: action.newCase
      }
      return {
        ...state,
        newToDoList: [...state.newToDoList, newCaseObj],
      }
    case DELETE_LIST: 
      return {
        ...state,
        newToDoList: [],
        startInputValue: '',
      }
    case EDIT_ITEM:
      return {
        ...state,
        newToDoList: state.newToDoList.map(todo => {
          if (todo.startCase === action.newCase) {
            return {...todo, startCase: action.value}
          }
          return todo
        })
      }
    case DELETE_LIST_ITEM: 
      return {
        ...state,
        newToDoList: action.payload
      }
    default:
      return state
  }
}

export const addNewCase = newCase => ({
  type: ADD_CASE,
  newCase
})

export const deleteList = () => ({
  type: DELETE_LIST
})

export const editListItem = (value, newCase) => ({
  type: EDIT_ITEM,
  value,
  newCase
})

export const deleteListItem = payload => ({
  type: DELETE_LIST_ITEM,
  payload
})

export default appReducer