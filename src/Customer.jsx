import React from "react";
import "./App.css";
import "./normalize.css";
import faker from 'faker';

const Customer = (props) => {
  const rating = faker.random.number({ min: 1, max: 5 });
  return (
    <div className="column">
      <img src={props.avatar} alt="Customer" />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>Rating: {rating} stars</p> 
    </div>
  );
};

export default Customer;
