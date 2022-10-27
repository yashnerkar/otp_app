import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import Modal from "./CenteredModal";
const OtpForm = ({ data }) => {
  const [modalShow, setModalShow] = useState(false);
  const randomOtp = Math.floor(100000 + Math.random() * 900000);
  const [otp, setOtp] = useState(`Hi. Your otp is: ${randomOtp}`);
  const [show, setShow] = useState(false);
  const [response, setResponse] = useState({
    message: "",
    success: false,
  });
  const { id } = useParams();
  const contact = data.find((contact) => contact.id == id);

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalShow(false);

    axios
      .post(`/contacts/${id}`, { otp: otp })
      .then((res) => {
        setResponse({
          message: res.data.message,
          success: res.data.success,
        });
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 3000);
      })
      .catch((err) => {
        setResponse({
          message: err.response.data.message,
          success: err.response.data.success,
        });
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 3000);
      });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div
        className=" p-5  border text-start text-dark col-12 "
        style={{
          boxShadow: "rgba(0, 0, 0, 0.30) 0px 5px 10px",
          width: "400px",
          borderRadius: "10px",
        }}
      >
        {show ? (
          <div className="d-flex justify-content-center">
            <Alert
              variant={response.success ? "success" : "danger"}
              style={{ position: "fixed", top: 5, zIndex: 1 }}
            >
              {response.message}
            </Alert>
          </div>
        ) : null}
        <div className="">
          <p className="fs-5">
            <b>First Name</b> : &nbsp; {contact.firstName}
          </p>
          <p className="fs-5">
            {" "}
            <b>Last Name</b> : &nbsp;{contact.lastName}
          </p>
          <p className="fs-5">
            <b>Phone Number</b> :&nbsp;{contact.phone}
          </p>
        </div>

        <div className="container-fluid text-center">
          <button
            className="btn btn-success fw-bold px-5 py-2 mt-3"
            onClick={() => setModalShow(true)}
          >
            SEND &nbsp; OTP
          </button>
        </div>
      </div>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        otp={otp}
        setOtp={setOtp}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default OtpForm;
