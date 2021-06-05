import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { connect } from 'react-redux'



library.add(fab,)
 
const MainComponent = (props) => {
     return (
        <div>
          <FontAwesomeIcon icon= {props.person[props.currentPerson-1].icon} size='10x' /> 
          <h3>{props.person[props.currentPerson-1].name}</h3>
      </div>)
  }

  
const mapStateToProps = state => ( {
        person: state.person,
        currentPerson:state.currentPersonMain
    })

   

export default  connect(mapStateToProps)(MainComponent)

