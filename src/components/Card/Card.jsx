import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { contactsContext } from "../../contexts/contactsContext";


const Card = ({ item }) => {
  const {deleteContact} = useContext(contactsContext)
  return (
    <div className="m-4 text-center">
      <img style={{width: "150px", height: "150px"}} className="card-image" src={item.image} alt="" />
      <Link to={`/contacts/${item.id}`}>
        <div className="card-title">{item.name}</div>
      </Link>
      <img
        onClick={() => deleteContact(item.id)}
        width="25px"
        src="https://icons-for-free.com/iconfiles/png/512/delete+24px-131985190578721347.png"
        alt="Delete icon"
      />
      <Link to={`/edit/${item.id}`}>
        <img
          width="25px"
          src="https://cdn.iconscout.com/icon/free/png-256/edit-2653317-2202989.png"
          alt="Edit icon"
        />
      </Link>
    </div>
  );
};

export default Card;
