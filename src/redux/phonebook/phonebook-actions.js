import shortId from 'shortid';
import {createAction} from '@reduxjs/toolkit';
// import actionTypes from './phonebook-types'

const addContact = createAction("contacts/Add", ({ name, number }) => ({
  payload: {
    id: shortId.generate(),
    name,
    number,
  },
}));


const deleteContact = createAction("contacts/Delete");
const filter = createAction("contacts/Filter");




export default { addContact, deleteContact, filter };


// / WITHOUT REDUX TOOLKIT

// import shortId from 'shortid';
// import actionTypes from './phonebook-types'

// const addContact = ({name, number}) => (
//     {
//         type: actionTypes.ADD,
//         payload: {
//              id: shortId.generate(), 
//              name, 
//              number 
//         }
//     }
// )


// const deleteContact = (contactId) => (
//     {
//   type: actionTypes.DELETE,
//   payload: contactId,
//   })


//   const filter = (value) => ({
//     type: actionTypes.FILTER,
//     payload: value,
//   });



// export default { addContact, deleteContact, filter };


