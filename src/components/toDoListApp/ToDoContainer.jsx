import React from 'react'
import { connect } from 'react-redux'
import ToDo from './ToDo.jsx'

import { 
  addNewCase, 
  deleteList, 
  editListItem,
  deleteListItem
} from '../../store/reducer'
import { ToDoListStyle } from '../../store/toDoStyles'

export const ToDoList = ({
  startInputValue,
  newToDoList,
  addNewCase,
  editListItem,
  deleteList,
  deleteListItem
}) => { 

  return (
    <ToDoListStyle>
      <ToDo 
        editListItem={editListItem}
        deleteList={deleteList}
        deleteListItem={deleteListItem}
        newToDoList={newToDoList}
        startInputValue={startInputValue}
        addNewCase={addNewCase}
      />
    </ToDoListStyle>
  )
}

const mapStateToProps = ({ appReducer }) => ({
  startInputValue: appReducer.startInputValue,
  newToDoList: appReducer.newToDoList
})

const mapDispatchToProps = {
  addNewCase, 
  deleteList, 
  editListItem, 
  deleteListItem
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)
