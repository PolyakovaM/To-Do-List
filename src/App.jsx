import React, { Fragment } from 'react'

import { GlobalStyles } from './globalStyles';
import ToDoContainer from '../src/components/toDoListApp/ToDoContainer';

import './App.css';

const App = () => (
  <Fragment>
    <GlobalStyles />
    <ToDoContainer/>
  </Fragment>
) 
  
export default App
