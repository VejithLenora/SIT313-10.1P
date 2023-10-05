import React from "react";

function ReadMoreButton({ onReadMoreClick }) {
  return (
    <div>
      <button onClick={onReadMoreClick} id="button">See More</button>
    </div>
  );
}

export default ReadMoreButton;

