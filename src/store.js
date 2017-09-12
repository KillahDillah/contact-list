// glue that hold everything together

import {createStore} from 'redux';
import contactReducer from './reducer/contactReducer';

const store= createStore(contactReducer)

export default store