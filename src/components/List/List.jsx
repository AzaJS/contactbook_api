import React, { useContext, useEffect } from "react";
import  Card from "../Card/Card";
import { contactsContext } from "../../contexts/contactsContext";

const List = () => {
  const { getContacts, contacts } = useContext(contactsContext);
  useEffect(() => {
    getContacts();
  }, []);

  console.log("from list", contacts);
  return (
    <div className="d-flex justify-content-center flex-wrap">
      {contacts.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;