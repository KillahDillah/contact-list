import store from '../store';
import shortid from 'shortid'

export function getContacts(){
  fetch(`https://gist.githubusercontent.com/overthemike/59040b7c9956987f641a7b0ccf2656f2/raw/b29609c7a0e968687bb27b9c87974d01661cfeaf/randomUsers.json`)
  .then(response=> {
    return response.json()
  })
  .then(data=>{
    store.dispatch({
      type: 'GET-CONTACTS',
      data: data.map(function(item){
        item.id = shortid.generate()
        item.locale = item.location
        return item
      })
    })
  })
  .catch(error=> {
    console.log (error)
  })
}

export function singleView(id){
  const appState=store.getState()
  console.log(appState)
  const person=appState.contacts.filter(function(item){
    if (item.id === id){
      return true
    }
    else{
      return false
    }
  })[0]
  console.log ('singleView', person)
  store.dispatch({
    type: 'SINGLE-VIEW',
    person: person
  })
}