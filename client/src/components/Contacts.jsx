import React from "react";
import ContactTable from "./ContactTable";
import Nav from "./Nav";
// console.log(data);
const Contacts = ({ data, activeComponent }) => {
  console.log(activeComponent);
  return (
    <div className="container-fluid p-0">
      <Nav activeComponent={activeComponent} />
      <ContactTable data={data} />
    </div>
  );
};

export default Contacts;
