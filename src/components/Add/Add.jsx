import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { contactsContext } from "../../contexts/contactsContext";

const Add = () => {
  const [newContact, setNewContact] = useState({
    name: "",
    surname: "",
    phoneNumber:"",
    description:"",
    image: ""
  });
  const { createContact } = useContext(contactsContext);
  function handleValues(e) {
    let values = {
      ...newContact,
      [e.target.name]: e.target.value,
    };
    setNewContact(values);
    // console.log(values);
  }
  function checkValues() {
    if (
      !newContact.name ||
      !newContact.surname ||
      !newContact.phoneNumber ||
      !newContact.description ||
      !newContact.image
    ) {
      alert("Fill in");
      return;
    } else {
      createContact(newContact);
    }
  }
  return (
      <div>
          <div className="container d-flex flex-column align-items-center">
      <input
        value={newContact.name}
        type="text"
        className="m-1 col-4"
        name="name"
        onChange={handleValues}
        placeholder="Name"
      />
      <input
        value={newContact.surname}
        type="text"
        className="m-1 col-4"
        name="surname"
        onChange={handleValues}
        placeholder="Surname"
      />
      <input
        value={newContact.phoneNumber}
        type="text"
        className="m-1 col-4"
        name="phoneNumber"
        onChange={handleValues}
        placeholder="Phone number"
      />
      <input
        value={newContact.description}
        type="text"
        className="m-1 col-4"
        name="description"
        onChange={handleValues}
        placeholder="Description"
      />
      <input
        value={newContact.image}
        type="text"
        className="m-1 col-4"
        name="image"
        onChange={handleValues}
        placeholder="Image"
      />
      
      <Link to="/contacts">
      <button
        onClick={() => checkValues()}
        className="btn btn-success col-4"
        style={{width:"370px"}}
      >
        Add
      </button>
      </Link>
    </div>
      </div>
  );
};

export default Add;
