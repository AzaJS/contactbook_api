import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { contactsContext } from "../../contexts/contactsContext";

const Details = () => {
  const params = useParams();
  // console.log(params);
  const { getDetails, details } = useContext(contactsContext);
  useEffect(() => {
    getDetails(params.id);
  }, []);
  console.log("details", details);
  return (
    <div>
      {details ? (
        <div>
            <img width="150px" src={details.image} alt="" />
            <div>{details.name} {details.surname}</div>
            <div>{details.description}</div>
            <div>{details.phoneNumber}</div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Details;
