import React, { useState } from "react";
import "./ForgotUsername.css";
import SignUpOne from "../SignUp/SignUpOne";
import LogIn from "./LogIn.js";
import { FaArrowLeft } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import jsonData from "../../../mock.json"; // Import JSON data
import { ToastContainer, toast } from "react-toastify";


function ForgotUsername() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showBackButton, setBackButton] = useState(false);
  const [showModal, setShowModal] = useState(true); // State for modal visibility

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleBackButtonClick = () => {
    setBackButton(true);
  };

  const handleEmailMeClick = () => {
    const email = document.getElementById("forget-username-email").value;
    const userExists = jsonData.users.some((user) => user.email === email);

    if (userExists) {
      toast.success("Email sent!");
    } else {
      toast.error("This Email doesn't exist");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (showSignUp) {
    return <SignUpOne />;
  }

  if (showLogin || showBackButton) {
    return <LogIn />;
  }

  return (
    <>
      {showModal && (
        <div className="forget-username-overlay">
          <div className="forget-username-modal">
            <div className="forget-username-content">
              <button
                className="forget-username-back-btn"
                onClick={handleBackButtonClick}
              >
                {" "}
                <FaArrowLeft />{" "}
              </button>
              <button className="forget-username-close-btn" onClick={handleCloseModal}>
                {" "}
                <IoMdClose />{" "}
              </button>

              <h2>Recover your username</h2>
              <p>
                Tell us the email address associated with your Reddit account, and
                we’ll send you an email with your username.
              </p>

              <div className="forget-username-input-group">
                <label htmlFor="email"></label>
                <input
                  id="forget-username-email"
                  type="text"
                  placeholder="Email*"
                  required
                />

                <br></br>

                <div className="forget-username-forgot-text">
                  <p>
                    Don't have an email or need assistance logging in?{" "}
                    <a href="#" className="forget-username-get-help">
                      Get help
                    </a>
                  </p>
                </div>

                <div className="forget-username-new-text">
                  <p>
                    <a
                      href="#"
                      className="forget-username-signup-text"
                      onClick={handleSignUpClick}
                    >
                      Sign Up
                    </a>{" "}
                    .{" "}
                    <a
                      href="#"
                      className="forget-username-login-text"
                      onClick={handleLoginClick}
                    >
                      Login
                    </a>
                  </p>
                </div>

                <button
                  className="forget-username-btn-final"
                  onClick={handleEmailMeClick}
                >
                  Email Me
                </button>
              </div>

              {/* Toast notification container */}
              <ToastContainer />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ForgotUsername;
