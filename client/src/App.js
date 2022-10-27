import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import db from "./db.json";
import Contacts from "./components/Contacts";
import History from "./components/History";
import Form from "./components/OtpForm";
function App() {
  const [data, setData] = useState([]);

  const postData = async () => {
    await axios.post("/contacts", { db }).then((res) => {
      setData(res.data.data);
    });
  };
  useEffect(() => {
    postData();
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/contacts" element={<Contacts data={data} />} />
          <Route path="/otplogs" element={<History />} />
          <Route path="/contacts/:id" element={<Form data={data} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
