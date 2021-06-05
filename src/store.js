import {createStore} from 'redux'
import {reducer} from './reducer'


const store = createStore(reducer);
const state  = store.getState();
   
export default store;
