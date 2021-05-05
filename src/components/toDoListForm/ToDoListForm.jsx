import React, { useState } from 'react'

import { 
  CheckboxInput,
  CrossedOutText,
  EditButton,
  EmptyDiv,
  EmptyListItem,
  RemoveListItem,
  EmptyInput,
  EmptyPharagraph
} from '../../store/toDoStyles'

const ToDoListForm = ({
  startCase, 
  editListItem, 
  newToDoList,
  deleteListItem
}) => {
  const [checked, setChecked] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [itemValue, setItemValue] = useState(startCase)
  const [errorMessage, setErrorMessage] = useState('')

  const deactivateEditMode = () => {
    if (!itemValue) {
      setErrorMessage('Заполни поле!') 
      return 
    }

    const isExistValue = newToDoList.find(newThing => (
      newThing.startCase === itemValue.trim() && newThing.startCase !== startCase
    ))

    if (isExistValue) {
      setErrorMessage('Такое дело уже было добавлено') 
    } else {
      setEditMode(false)
      setItemValue(itemValue.trim())
      editListItem(itemValue.trim(), startCase)
    }
  }

  const onKeyDownEdit = (e) => {
    if (e.keyCode === 13) {
      deactivateEditMode()
    }
  } 

  const onChange = (e) => {
    setItemValue(e.currentTarget.value.trimLeft())
    if (e.currentTarget.value.trim()) {
      setErrorMessage('') 
    }
  }

  const onClickDelete = () => {
    const filteredList = newToDoList.filter(newThing => newThing.startCase !== startCase)
    deleteListItem(filteredList)
  }

  return (
    <EmptyListItem>
      <CheckboxInput 
        type='checkbox'
        checked={checked}
        onChange={() => setChecked(!checked)}
        checkboxVisibility={editMode}
      />
      {editMode
        ? (
            <EmptyInput 
              onChange={onChange} 
              autoFocus={true} 
              onBlur={deactivateEditMode} 
              onKeyDown={onKeyDownEdit}  
              value={itemValue} 
            />
        )
        : (
            <CrossedOutText 
              checked={checked} 
              onClick={() => setEditMode(true)}
            >
              {startCase}
            </CrossedOutText>
        )
      }
      <EmptyDiv>
        <EditButton 
          disabled={!itemValue || checked} 
          onClick={() => setEditMode(true)}
        >
          edit
        </EditButton>
        <RemoveListItem onClick={onClickDelete}>delete</RemoveListItem>
      </EmptyDiv>
      {errorMessage && (
        <EmptyPharagraph>
          {errorMessage}
        </EmptyPharagraph>
      )}
    </EmptyListItem>
  )
}

export default ToDoListForm