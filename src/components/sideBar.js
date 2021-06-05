import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { connect } from 'react-redux'
import {currentDisplay} from '../action'


library.add(fab,)


const IconAndName = (props) => {
return (
  props.person.map(person=> 
  <div id = 'sideBarIconDiv'> 
    <button id = 'iconButton' onClick = {() => currentDisplay(person.ID)} >
      <FontAwesomeIcon icon={person.icon} size='4x' />
      <div> {person.name}</div>
    </button>
  </div>))
}

const SideBarComponent = (props) => {
    return (
      <div id ='sideBarDiv'>
        <IconAndName {...props}/>      
      </div>)
}


  const mapStateToProps = state => ( {
    person: state.person 
    
})

export default  connect(mapStateToProps)(SideBarComponent) ;


