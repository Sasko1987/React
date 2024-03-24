import React from "react";

const PackageList = ({ name, img, isBought }) => {
  return (
    <div className="col">
      <img src={img} alt="" />
      <p>
        {name} <span>{isBought ? "✔" : "❌"}</span>
      </p>
    </div>
  );
};

export default PackageList;
