import React from "react";
import "./styles.css";
import ValidateError from './ValidateError';
import { ErrorBoundary } from '../node_modules/errorpack/dist';

export default function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <ValidateError />
      </ErrorBoundary>
    </div>
  );
}
