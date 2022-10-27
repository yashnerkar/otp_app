/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./table.css";
import { useNavigate } from "react-router-dom";
const ContactTable = ({ data }) => {
  const navigate = useNavigate();
  const navigateContact = (e) => {
    e.preventDefault();
    const navId = e.target.id;
    navId ? navigate(`/contacts/${navId}`) : navigate(`/contacts`);
  };
  return (
    <div>
      <div className="d-flex justify-content-center  p-3">
        <table
          className="table w-50 bg-white border"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 5px 10px",
          }}
        >
          <thead>
            <tr className="bg-success">
              <th className="p-3 text-light " scope="col">
                Contact No.
              </th>
              <th className="p-3 text-light" scope="col">
                Contact Name
              </th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {data.map((contact, index) => {
              return (
                <tr
                  style={{
                    backgroundColor: index % 2 !== 0 ? "#f6f8f6" : "#fff",
                    height: "50px",
                    border: "none",
                  }}
                >
                  <th scope="row" style={{ border: "none" }}>
                    {contact.phone}
                  </th>
                  <td
                    id={contact.id}
                    className="cool-link"
                    onClick={(e) => navigateContact(e)}
                    style={{ cursor: "pointer", border: "none" }}
                  >
                    {contact.firstName}&nbsp;&nbsp;
                    {contact.lastName}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactTable;
