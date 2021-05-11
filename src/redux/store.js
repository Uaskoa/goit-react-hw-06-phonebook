// import shortId from 'shortid';
import { createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import phonebookReducer from './phonebook/phonebook-reducer';

const rootReducer = combineReducers(
    {
        phonenook: phonebookReducer,
    }
)

const store = createStore(rootReducer, composeWithDevTools());


const initialState = {
    
  contacts: {
    items: [],
    filter: '',
  
}
}

// const store = (state =initialState, {type, payload}) => {
// switch (type) {
//   case "phonebook/addName":
//     return {
//       ...state,
//       contacts: {
//         ...state.contacts,
//         items: [...state.items],
//         name: payload,
//       },
//     };

//   case "phonebook/addNumber":
//     return {
//       ...state,
//       contacts: {
//         ...state.contacts,
//         items: [...state.items],
//         number: payload,
//       },
//     };

//   default:
//     return state;
// }


// }

export default store;