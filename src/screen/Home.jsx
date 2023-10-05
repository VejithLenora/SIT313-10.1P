import React from "react";
import HeaderImage from "../HeaderImage";
import FeaturedFreelancers from "../FeaturedFreelancers";
import EmailRegistration from "../EmailRegistration";
import FooterSection from "../FooterSection";
import FreelancerListComponent from './../FreelancerList';
import CustomerListComponent from './../FeaturedCustomersList';


const Home = () => {
    return(
        <>
            <HeaderImage />
            <FeaturedFreelancers />
            <FreelancerListComponent /> 
            <CustomerListComponent />
            <EmailRegistration />
            <FooterSection />
        </>
    )
}

export default Home;
 