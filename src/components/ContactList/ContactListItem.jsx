
// import { connect } from "react-redux";
import PropTypes from 'prop-types';

import "./ContactList.scss";
const ContactListItem = ({ id, name, number, onDeleteContact }) => (
  <li className="contact-list-item">
    <span className="contact-list-name">{name} </span>
    <span className="contact-list-number">{number} </span>
    <button
      type="button"
      className="button"
      onClick={() => onDeleteContact(id)}
    >
      Delete
    </button>
  </li>
);

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};


// const mapStateToProps = (state) => ({
//   contacts: state.phonebook.items,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onDeleteContact: () => null,
// });


export default ContactListItem;
