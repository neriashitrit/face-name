import React from 'react';
import {changeElement} from '../action'


const inputBer = (event) => {

  if(event.key === 'Enter'){
    let inputText = document.getElementById('myInput').value;
    document.getElementById('myInput').value='';
    changeElement(inputText);
  }
}

const InputComponent = () => {
    return  <input type='text' 
    onKeyPress={inputBer} 
    id='myInput'
    placeholder='do you whant new name?' />
  }

  
export default  InputComponent;