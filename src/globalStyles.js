import { createGlobalStyle } from 'styled-components/macro'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(to right, #FFB88C, #DE6262);
  }

  h1 {
    color: white;
    font-size: 40px;
    text-align: center;
  }

  button, input {
    outline: none;
    border-radius: 5px;
    font-size: 20px;
    padding: 10px 15px;
    height: 100%;
    border: none;
  }

  button {
    background-color: #009688;
    opacity: 1;
    transition: opacity .3s linear;
    cursor: pointer;
    &:hover {
      opacity: .7;
    }
  }

  button:active {
    box-shadow: 1px 1px #666;
    transform: translateY(4px);
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    background-color: #ffffff;
    padding: 10px;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid rgba(0, 0, 0, 0.685);
    font-size: 24px;
    flex-wrap: wrap;
    border-radius: 10px;
    margin-bottom: 5px;
  }

  p {
    margin: 0;
    text-align: start;
    word-break: break-word;
    white-space: break-spaces;
    width: 60%;
  }
`