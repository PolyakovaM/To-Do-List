import { useState } from "react";
import { 
  AddButton, 
  FormsInput, 
  FormsStyle, 
  AddForms, 
  WarningDiv 
} from "../../store/toDoStyles"

const AddForm = ({
  addNewCase,
  newToDoList
}) => {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('')

  const checkExistValue = () => {
    const isExistValue = newToDoList.find(newThing => newThing.startCase === value.trim())
    if (isExistValue) {
      setErrorMessage('Такое дело уже есть! Придумай новое :)')
    } else {
      addNewCase(value.trim())
      setValue('')
      setErrorMessage('')
    }
  }

  const onChange = (e) => {
    setValue(e.currentTarget.value.trimLeft())
  }

  const onKeyDown = (e) => {
    if (e.keyCode === 13 && value) {
      checkExistValue()
    }
  }
  
  return (
    <FormsStyle>
      <AddForms>
        <FormsInput 
          type='text' 
          placeholder='New task' 
          onChange={onChange} 
          onKeyDown={onKeyDown}
          value={value} 
        />
        <AddButton 
          buttonOpacity={value && .7} 
          disabled={!value} 
          onClick={checkExistValue}
        >
          Add
        </AddButton>
      </AddForms>
      {errorMessage && <WarningDiv>{errorMessage}</WarningDiv>}
    </FormsStyle>
  )
}

export default AddForm


