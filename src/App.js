import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faArrowAltCircleRight, faArrowAltCircleLeft,fas } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import MainComponent from './components/main'
import InputComponent from './components/input'
import SideBarComponent from './components/sideBar'
import ArrowsComponent from './components/arrows'
import store from './store'
import { Provider } from 'react-redux';
import {redo,undo} from './action';
import React from 'react';



library.add(fab,  faArrowAltCircleRight, faArrowAltCircleLeft,fas)



const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Provider store={store}>
          <SideBarComponent />
          <div id = 'Main-and-do'>
            <FontAwesomeIcon icon={['fas','undo-alt']}  size='2x'  onClick = {undo} />
                <div id='Main-screen'>
                  <MainComponent />        
                  <ArrowsComponent/>
                  <InputComponent />
                </div>
            <FontAwesomeIcon icon={['fas','redo-alt']}  size='2x'  onClick = {redo} />
          </div>
        </Provider>

         
      </header>
    </div>
  );
}

export default App;

