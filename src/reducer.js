import {reducerInit} from './initReducer'


 export const reducer = (state = reducerInit,action)=>{
     let changeArray,personArray,fromPersonToChanges,fromChangesToPerson

    if (action.type==='CHANGE_ICON_NAME'){
            
        changeArray = state.changes.theChanges.slice(0, state.changes.counter);
        state.person.map(person=> person.ID ===action.ID?(fromPersonToChanges = person):(person));
        personArray = state.person.map(person=> person.ID ===action.ID?(person={ID:person.ID,name:action.name,icon:person.icon}):(person));
       
        return {
            ...state,
            person: [...personArray],
            changes: {counter : changeArray.length+1,theChanges: [...changeArray,fromPersonToChanges]},
        }        
    }


    else  if (action.type==='REDO'){

       
        if ((state.changes.counter < state.changes.theChanges.length)&&(state.changes.counter>-1)){
            
            fromChangesToPerson =  state.changes.theChanges[state.changes.counter]
            
            state.person.map(person=> person.ID ===fromChangesToPerson.ID?
                (fromPersonToChanges = person):
                (person));

            personArray = state.person.map(person=> person.ID ===fromChangesToPerson.ID?
                (person =fromChangesToPerson):
                (person));
            
            state.changes.theChanges[state.changes.counter] = fromPersonToChanges
                     
            return {
                ...state,
                person: [...personArray],
                changes: {counter : state.changes.counter+1,theChanges: [...state.changes.theChanges]},
                currentPersonMain:fromChangesToPerson.ID
            }        
    
        }
        else{
            console.log('nothing to redo!');
        }

    }

    else  if (action.type==='UNDO'){
        if (state.changes.counter >0){

            fromChangesToPerson =  state.changes.theChanges[state.changes.counter-1]

            state.person.map(person=> person.ID ===fromChangesToPerson.ID?
                (fromPersonToChanges=person):
                (person))

            personArray = state.person.map(person=> person.ID ===fromChangesToPerson.ID?
                (person=fromChangesToPerson):
                (person));
               
            state.changes.theChanges[state.changes.counter-1] = fromPersonToChanges
             
            return {
                ...state,
                person: [...personArray],
                changes: {counter : state.changes.counter-1,theChanges: [...state.changes.theChanges]},
                currentPersonMain:fromChangesToPerson.ID
                }   
        }
        else{
            console.log('nothing to undo!');
        }
    }

    else  if (action.type==='CURRENT_DISPLAY'){
        return {...state,
            currentPersonMain:action.ID}
        
        }
    
    else  if (action.type==='MOVE_RIGHT'){
        if(state.currentPersonMain<state.person.length){
        return {...state,
            currentPersonMain:state.currentPersonMain+1}
            }
        }   

    else  if (action.type==='MOVE_LEFT'){
        if(state.currentPersonMain>1){
        return {...state,
            currentPersonMain:state.currentPersonMain-1}
            }
        }    

  
return state;


 }



