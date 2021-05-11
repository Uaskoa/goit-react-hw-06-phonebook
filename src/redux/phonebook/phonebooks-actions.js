import shortId from 'shortid';
import actionTypes from './phonebook-types'

const addContact = ({name, number}) => (
    {
        type: actionTypes.ADD,
        payload: {
             id: shortId.generate(), 
             name, 
             number 
        }
    }
)


export default { addContact };

