import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";
import moment from "moment";
const History = ({ activeComponent }) => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const getHistory = async () => {
    try {
      const res = await axios.get("/otplogs");
      const data = res.data.data;

      data.sort((a, b) => {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      });
      setHistory(data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };
  useEffect(() => {
    getHistory();
  }, []);

  return (
    <div>
      <Nav activeComponent={activeComponent} />
      {loading ? (
        <div className="text-center mt-4">
          <div className="spinner-border text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <div className="d-flex justify-content-center p-3">
          <table
            className="table w-50 table-responsive bg-white border"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 5px 10px",
            }}
          >
            <thead>
              <tr className="bg-success text-light">
                <th className="p-3 " scope="col">
                  Contact Name
                </th>
                <th className="p-3 " scope="col">
                  Otp Sent
                </th>
                <th className="p-3 " scope="col">
                  Date & Time
                </th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {history.map((contact, index) => {
                return (
                  <tr
                    style={{
                      backgroundColor: index % 2 === 0 ? "#f6f8f6" : "#fff",
                    }}
                  >
                    <td style={{ padding: "15px" }}>
                      {contact.firstName}&nbsp;&nbsp;
                      {contact.lastName}
                    </td>
                    <td style={{ padding: "15px" }}>{contact.otp}</td>
                    <td style={{ padding: "15px" }}>
                      {moment(contact.updatedAt).format("LLL")}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default History;
