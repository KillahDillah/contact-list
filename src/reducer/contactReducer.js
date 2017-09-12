const initialState= {
  contacts:[],
  person:{}
}

export default function (state=initialState,action){
  if (action.type === 'GET-CONTACTS'){
    return {...state,contacts:action.data}
  }else if(action.type === 'SINGLE-VIEW'){
    return {...state,person:action.person}
  }else {
    return state
  }
}