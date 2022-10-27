import { Modal } from "react-bootstrap";

function CenteredModal({ show, onHide, otp, setOtp, handleSubmit }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">OTP</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-5 m-3">
        <form
          className="text-center"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="input-group input-group-lg">
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              placeholder="Hi,your otp is : 123456"
              onChange={(e) => {
                setOtp(e.target.value);
              }}
              value={otp}
            />
          </div>
          <button className="btn btn-success mt-4 px-4" type="submit">
            SUBMIT
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
}
export default CenteredModal;
