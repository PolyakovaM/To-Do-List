import React from 'react'
import AddForm from '../AddForm/AddForm';
import ToDoListForm from '../toDoListForm/ToDoListForm';

import {
  ButtonDelList, 
  EmptyDiv,
  EmptyHeading,
  EmptyList
} from '../../store/toDoStyles'

const ToDo = ({ 
  editListItem,
  deleteList,
  deleteListItem,
  newToDoList,
  addNewCase,
  startInputValue,
  setToDoValue
}) => (
  <EmptyDiv>
    <EmptyHeading>To do List</EmptyHeading>
    <AddForm 
      addNewCase={addNewCase}
      startInputValue={startInputValue}
      setToDoValue={setToDoValue}
      newToDoList={newToDoList}
    />
    <EmptyDiv>
      <EmptyList>
        {newToDoList.map(newThing => (
          <ToDoListForm
            newToDoList={newToDoList}
            editListItem={editListItem}
            key={newThing.id + newThing.startCase}
            index={newThing.id}
            startCase={newThing.startCase}
            deleteListItem={deleteListItem}
          />
        ))} 
      </EmptyList>
    </EmptyDiv>
    {newToDoList.length > 0 && (
      <ButtonDelList onClick={deleteList}>
        Удалить список
      </ButtonDelList>
    )}
  </EmptyDiv>
)

export default ToDo