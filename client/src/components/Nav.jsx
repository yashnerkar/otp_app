import React from "react";

const Nav = ({ activeComponent }) => {
  return (
    <div>
      <div
        className="container-fluid align-items-center d-flex justify-content-center p-2"
        style={{
          //   position: "fixed",
          top: 0,
          width: "100vw",
          boxShadow: "rgba(0, 0, 0, 0.30) 0px 5px 10px",
          height: "8vh",
        }}
      >
        <p className="fs-2 text-success p-0 m-0">
          {activeComponent === "contacts" ? "Contact List" : "Message List"}
        </p>
      </div>
    </div>
  );
};

export default Nav;
