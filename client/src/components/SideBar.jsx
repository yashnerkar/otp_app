import React, { useEffect, useState } from "react";

export default function SideBar({ activeComponent = "contacts", handleClick }) {
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (window.innerWidth <= 600) setShow(false);
  }, []);
  return (
    <>
      <div style={{ position: "fixed", left: "0", top: "8vh" }}>
        <div
          style={{
            width: "fit-content",
            boxShadow: "1px 0px 2px 0px rgb(224,224,224)",
            height: "100vh",
            backgroundColor: "white",
            zIndex: 5,
            display: "flex",
          }}
        >
          <div>
            {show ? (
              <>
                <div
                  style={{
                    padding: "15px 40px 15px 20px",
                    borderBottom: "thin solid rgb(224,224,224)",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    backgroundColor:
                      activeComponent === "contacts" ? "lightgray" : "white",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleClick("contacts");
                  }}
                >
                  <i className="fa-solid fa-phone fa-xs"></i>
                  <div style={{ fontWeight: "semi-bold", fontSize: "14px" }}>
                    Contacts
                  </div>
                </div>
                <div
                  style={{
                    padding: "15px 40px 15px 20px",
                    borderBottom: "thin solid rgb(224,224,224)",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    backgroundColor:
                      activeComponent === "messages" ? "lightgray" : "white",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleClick("messages");
                  }}
                >
                  <i className="fa-solid fa-envelope fa-sm"></i>
                  <div style={{ fontWeight: "semi-bold", fontSize: "14px" }}>
                    Messages
                  </div>
                </div>{" "}
              </>
            ) : null}
          </div>

          <div
            style={{
              height: "100vh",
              display: "flex",
              width: "0",
              alignItems: "center",
              margin: "1px 0px",
              boxShadow: "1px 0px 2px 0px rgba(212,212,212,1)",
              backgroundColor: "white",
              zIndex: 100,
            }}
          >
            <div
              style={{
                height: "10vh",
                width: "fit-content",
                boxShadow: "1px 0px 2px 0px rgba(212,212,212,1)",
                borderRadius: "0 10px 10px 0",
                display: "flex",
                alignItems: "center",
                padding: "0 2px 0px 2px",
                cursor: "pointer",
                zIndex: 10,
                backgroundColor: "white",
              }}
              onClick={() => setShow(!show)}
            >
              {!show ? (
                <i
                  className="fa-solid fa-chevron-right fa-md"
                  style={{
                    color: "green",
                  }}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-chevron-left fa-md"
                  style={{ color: "green" }}
                ></i>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
