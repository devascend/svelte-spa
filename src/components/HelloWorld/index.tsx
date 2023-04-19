import React from "react";

const HelloWorld: React.FC = () => (
    <>
        <h3>Environmental varisabsales:</h3>
        <p>
            process.env.NAME: <b>{process.env.NAME}</b>
        </p>
    </>
);

export default HelloWorld;
