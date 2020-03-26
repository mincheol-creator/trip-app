import React from "react";

import PreviewCard from "../components/preview-card";

import "../scss/component.styles.scss";

const TourPreview = () => {
  return (
    <div className="tour-preview">
      <PreviewCard />
      <PreviewCard />
      <PreviewCard />
      <PreviewCard />
      <PreviewCard />
      <PreviewCard />
    </div>
  );
};

export default TourPreview;
