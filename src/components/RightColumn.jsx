import React from "react";
import SalesItem from "./SalesItem";
import WebAnalytics from "./WebAnalytics";

function RightColumn() {
  return (
    <div className="w-full pl-2 mt-2">
      <SalesItem />
      <WebAnalytics />
    </div>
  );
}

export default RightColumn;
