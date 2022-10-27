import React from "react";
import ContactTable from "./ContactTable";
import Nav from "./Nav";
const Contacts = ({ data, activeComponent }) => {
  return (
    <div className="container-fluid p-0">
      <Nav activeComponent={activeComponent} />
      {data.length === 0 ? (
        <div className="text-center mt-4">
          <div className="spinner-border text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <ContactTable data={data} />
      )}
    </div>
  );
};

export default Contacts;
