import React, { useState } from "react";
import Contacts from "./Contacts";
import History from "./History";
import SideBar from "./SideBar";
const Home = ({ data }) => {
  const [activeComponent, setActiveComponent] = useState("contacts");
  return (
    <div
      className="container-fluid p-0"
      style={{ height: "100vh", width: "100vw" }}
    >
      <SideBar
        activeComponent={activeComponent}
        handleClick={setActiveComponent}
      />

      {activeComponent === "contacts" ? (
        <Contacts data={data} activeComponent={activeComponent} />
      ) : (
        <History activeComponent={activeComponent} />
      )}
    </div>
  );
};

export default Home;
