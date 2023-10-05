import React from "react";
import "./App.css";
import "./normalize.css";
import FreelancerList from './FreelancerList';
import CustomerData from "./CustomerData"; 

function FeaturedCustomersList() {
  return (
    <div>
      <h1 className="intro"><center>Featured Customers</center></h1>
      <FreelancerList data={CustomerData} /> 
    </div>
  );
}

export default FeaturedCustomersList;
