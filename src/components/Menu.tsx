import React from "react";
import { useState } from "react";

const Menu: React.FC = () => (
  <>
    <div
      className="menu"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        border: "3px solid #73AD21",
        padding: "10px",
        width: "300px",
        height: "300px",
        backgroundColor: "lightblue",
        borderRadius: "25px",
        textAlign: "center",
        fontWeight: "bold",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <button
        style={{
          width: "100px",
          height: "50px",
        }}
        onClick={() => console.log("clicked")}
        id="start"
      >
        {" "}
        Start{" "}
      </button>
      <button
        style={{
          width: "100px",
          height: "50px",
        }}
        onClick={() => console.log("clicked")}
        id="settings"
      >
        Settings
      </button>
      <button
        style={{
          width: "100px",
          height: "50px",
        }}
        onClick={() => console.log("clicked")}
        id="quit"
      >
        Quit
      </button>
      <button
        style={{
          width: "100px",
          height: "50px",
        }}
        onClick={() => console.log("clicked")}
        id="load"
      >
        Load
      </button>
      <button
        style={{
          width: "100px",
          height: "50px",
        }}
        onClick={() => console.log("clicked")}
        id="save"
      >
        Save
      </button>
    </div>
  </>
);

export default Menu;
