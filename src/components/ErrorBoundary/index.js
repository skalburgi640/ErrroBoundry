import React from "react";
import ErrorBoundary from "./ErrorBoundary";

export const createErrorBoundary = errorComponent => Component => {
  const displayName = Component.displayName || Component.name || "Component";
  const ErrorBoundaryProtection = props => (
    <ErrorBoundary errorComponent={errorComponent}>
      <Component {...props} />
    </ErrorBoundary>
  );
  ErrorBoundaryProtection.displayName = `${displayName}WithErrorBoundaryProtection`;
  return ErrorBoundaryProtection;
};
