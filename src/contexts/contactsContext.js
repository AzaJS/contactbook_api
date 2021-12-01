import React, { useReducer } from "react";
import axios from "axios";
export const contactsContext = React.createContext();
const API = "http://localhost:8001/contacts";
const INIT_STATE = {
  contacts: [],
  edit: null, 
  details: null
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CONTACTS":
      return {
        ...state,
        contacts: action.payload.data,
      };
      case "GET_EDIT":
        return {
          ...state,
          edit: action.payload.data
        }
        case "GET_DETAILS":
          return {
          ...state,
          details: action.payload.data
          }
    default:
      return state;
  }
};

const ContactsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const createContact = async (newContact) => {
    await axios.post(API, newContact);
    getContacts();
  };
  async function getContacts() {
    let res = await axios.get(API);
    // console.log(res);
    dispatch({
      type: "GET_CONTACTS",
      payload: res,
    });
  }
  async function getDetails(id){
    let res = await axios.get(`${API}/${id}`)
    dispatch({
        type: "GET_DETAILS",
        payload: res,
    })
  }
  async function deleteContact(id){
    await axios.delete(`${API}/${id}`)
    getContacts()
  }
  async function getEdit(id) {
    let result = await axios.get(`${API}/${id}`);
    dispatch({
      type: "GET_EDIT",
      payload: result,
    });
  }
  async function updateEditContact(id, editedContact) {
    await axios.patch(`${API}/${id}`, editedContact);
    getContacts();
  }
  return <contactsContext.Provider
  value={{
      contacts: state.contacts,
      edit: state.edit,
      details: state.details,
      getContacts,
      createContact,
      deleteContact,
      getEdit,
      updateEditContact,
      getDetails
  }}
  >
      {children}
  </contactsContext.Provider>;
};

export default ContactsContextProvider;
