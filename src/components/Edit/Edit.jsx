import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { contactsContext } from "../../contexts/contactsContext";

const Edit = () => {
  const params = useParams();
  const { getEdit, updateEditContact, edit } = useContext(contactsContext);
  useEffect(() => {
    getEdit(params.id);
  }, []);
  const [editedContact, setEditedContact] = useState(null);
  useEffect(() => {
    setEditedContact(edit);
  }, [edit]);

  function handleValues(e) {
    let values = {
      ...editedContact,
      [e.target.name]: e.target.value,
    };
    setEditedContact(values);
  }
  function checkValues() {
    if (
      !editedContact.name ||
      !editedContact.surname ||
      !editedContact.phoneNumber ||
      !editedContact.description ||
      !editedContact.image
    ) {
      alert("Заполните поля!");
      return;
    } else {
      updateEditContact(params.id, editedContact);
    }
  }
  return ( editedContact ? (
        <div className="container d-flex flex-column align-items-center">
          <input
            value={editedContact.name}
            type="text"
            className="m-1 col-4"
            name="name"
            onChange={handleValues}
            placeholder="Name"
          />
          <input
            value={editedContact.surname}
            type="text"
            className="m-1 col-4"
            name="surname"
            onChange={handleValues}
            placeholder="Surname"
          />
          <input
            value={editedContact.phoneNumber}
            type="text"
            className="m-1 col-4"
            name="phoneNumber"
            onChange={handleValues}
            placeholder="Phone number"
          />
          <input
            value={editedContact.description}
            type="text"
            className="m-1 col-4"
            name="description"
            onChange={handleValues}
            placeholder="Description"
          />
          <input
            value={editedContact.image}
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
              style={{ width: "370px" }}
            >
              Save
            </button>
          </Link>
        </div>
      ) : (
        <h1>Loading...</h1>
      )
  );
};

export default Edit;
