import store from './store'


export const changeElement = (inputText)=>{
 

    store.dispatch({

        type:'CHANGE_ICON_NAME',
        name: inputText,
        ID:store.getState().currentPersonMain
        })
     
  }

export const redo = ()=>{
    store.dispatch({
        type:'REDO'
        }
        )
    
}

export const undo = () => {
    store.dispatch({
        type:'UNDO'
        }
        )
    
}



export const currentDisplay =(personID)=>{
    store.dispatch({
        type:'CURRENT_DISPLAY',
        ID:personID

        }
        )
    
}

export const moveRight = ()=>{
    store.dispatch({
        type:'MOVE_RIGHT',
        }
    )
}

export const moveLeft=()=>{
    store.dispatch({
        type:'MOVE_LEFT',
        }
    )
}