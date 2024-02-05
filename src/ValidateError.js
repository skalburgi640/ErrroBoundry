import React, { useEffect } from "react";
import "./styles.css";
import withErrorBoundary from "./components/CustomError/ErrorMsg";


const ValidateError = () => {
    useEffect(() => {
        throw new Error("oops");
    }, []);
    return (
        <div className="App">
            Test
        </div>
    );
}

export default withErrorBoundary(ValidateError);