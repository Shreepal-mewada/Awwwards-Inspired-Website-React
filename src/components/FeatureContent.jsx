import React from "react";

function FeatureContent({ title, description }) {
  return (
    <div className="absolute left-10 top-10 w-1/3 text-blue-50">
      <p id="feature-font" className="text-7xl">
        {title}
      </p>
      <p>{description}</p>
    </div>
  );
}

export default FeatureContent;
