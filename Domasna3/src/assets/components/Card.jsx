import React from "react";

const Card = ({ data }) => {
  console.log(data);
  return (
    <div className="card">
      <h2>Your information:</h2>
      <p>
        <span className="title">Name:</span> {data.name}
      </p>
      <p>
        <span className="title">Last Name:</span> {data.lastName}
      </p>
      <p>
        <span className="title">Phone Number:</span> {data.phoneNumber}
      </p>
      <p>
        <span className="title">Date of Birth:</span> {data.dateofBirth}
      </p>
    </div>
  );
};

export default Card;
