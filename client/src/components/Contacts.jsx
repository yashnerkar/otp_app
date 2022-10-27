import React from "react";
import ContactTable from "./ContactTable";
import Nav from "./Nav";
const Contacts = ({ data, activeComponent }) => {
  return (
    <div className="container-fluid p-0">
      <Nav activeComponent={activeComponent} />
      <ContactTable data={data} />
    </div>
  );
};

export default Contacts;
