import React, { useEffect } from "react";
import "./styles.css";


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

export default ValidateError;