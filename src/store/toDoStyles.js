import styled, { css } from 'styled-components/macro'

export const ToDoListStyle = styled.div`
	max-width: 800px;
	margin: 0 auto;
  text-align: center;
`

export const FormsStyle = styled.div`
  height: 40px;
  display: flex;
  flex-direction: column;
`

export const FormsInput = styled.input`
  width: 50%;
  margin-right: 10px;
`

export const ButtonDelList = styled.button`
	padding: 10px 15px;
	margin: 0 auto;
`

export const CheckboxInput = styled.input`
	width: 20px;
  height: 20px;
  visibility: ${props => props.checkboxVisibility ? 'hidden': 'visible'};
`

export const CrossedOutText = styled.p`
  text-decoration: ${({ checked }) => checked ? 'line-through' : ''};
  ${({ checked }) => (
    checked 
      ? css`
        text-decoration: line-through;
        pointer-events: none;
      ` 
      : ''
  )}
`

export const EditButton = styled.button`
  background-color: #fbae87;
  margin-right: 20px;
`

export const RemoveListItem = styled.button`
  background-color: #e16b66;
`
export const AddButton = styled.button`
  &:hover {
    opacity: ${props => props.buttonOpacity || 1};
  }
`
export const EmptyDiv = styled.div``

export const EmptyHeading = styled.h1``

export const EmptyList = styled.ul`
  margin-top: 50px;
`

export const EmptyListItem = styled.li``

export const EmptyInput = styled.input`
  width: 60%;
  background-color: #fcf1eb;
`

export const EmptyPharagraph = styled.p`
  margin: 0 auto;
  font-size: 20px;
  color: #ff0303a8;
  margin-top: 10px;
  font-family: cursive;
`

export const AddForms = styled.div``

export const WarningDiv = styled.div`
  margin: 15px;
  color: black;
  height: 100px;
  font-size: 20px;
`
