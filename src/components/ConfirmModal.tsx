import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { FaCheckCircle } from "react-icons/fa";

const ConfirmModal = ({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: () => void;
}) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    let timer1: ReturnType<typeof setTimeout>;
    let timer2: ReturnType<typeof setTimeout>;

    if (show) {
      timer1 = setTimeout(() => {
        setShowLoader(false);
      }, 5000);

      timer2 = setTimeout(() => {
        window.location.href = "/";
      }, 10000);
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [show]);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          {showLoader ? (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "300px" }}
            >
              <ClipLoader
                color="rgba(247, 220, 111, 1)"
                size={80}
                className="mx-auto"
              />
            </div>
          ) : (
            <div className="payment-modal my-2 d-flex flex-column justify-content-center align-items-center">
              <FaCheckCircle
                size={120}
                className="text-center mx-auto mb-3"
                color="rgba(247, 220, 111, 1)"
              />
              <h5 className="">Thank you for your order!</h5>
              <p className="text-center">
                We received your card payment
                <br /> <span>Redirecting in a few seconds...</span>
              </p>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ConfirmModal;
