import React, { useState } from "react";
import "./App.css";
import "./normalize.css";
import Freelancer from './Freelancer';
import FreelancerL from "./FreelancerL";
import ReadMoreButton from './ReadMoreButton';

function FreelancerList() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const firstRowFreelancers = FreelancerL.slice(0, 3);

  const secondRowFreelancers = showMore ? FreelancerL.slice(3, 6) : [];

  return (
    <div>
      <div className="row">
        {firstRowFreelancers.map((freelancer, index) => (
          <Freelancer
            key={index}
            avatar={freelancer.avatar}
            name={freelancer.name}
            description={freelancer.description}
          />
        ))}
      </div>

      {FreelancerL.length > 3 && !showMore && (
        <ReadMoreButton onReadMoreClick={toggleShowMore} />
      )}

      {showMore && (
        <div className="row">
          {secondRowFreelancers.map((freelancer, index) => (
            <Freelancer
              key={index}
              avatar={freelancer.avatar}
              name={freelancer.name}
              description={freelancer.description}
              rating={freelancer.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default FreelancerList;
