import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import {moveLeft, moveRight} from '../action'

library.add(faArrowAltCircleRight, faArrowAltCircleLeft)


export const ArrowsComponent = (props)=> {

  return(
    <div>
      <FontAwesomeIcon onClick = {moveLeft} icon={['fas', 'arrow-alt-circle-left']}  size='2x' />
      <FontAwesomeIcon onClick = {moveRight} icon={['fas','arrow-alt-circle-right']}  size='2x' />
    </div>
  )



}
const mapStateToProps=(state)=> {
      return {
      thestate: state
      }
  }



export default  connect(mapStateToProps) (ArrowsComponent);
