import React from "react";

const HelloWorld: React.FC = () => (
    <>
        <h3>Environmental variables:</h3>
        <p>
            process.env.NAME: <b>{process.env.NAME}</b>
        </p>
    </>
);

export default HelloWorld;
