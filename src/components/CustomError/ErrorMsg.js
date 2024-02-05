import React from "react";
import { createErrorBoundary } from "../ErrorBoundary";

const ErrorMsg = () => {
  return (
    <li className="myApp listItem error">
      <span>I could not render this item</span>
    </li>
  );
};

export default createErrorBoundary(ErrorMsg);
