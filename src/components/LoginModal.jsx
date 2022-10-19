import React from "react";
import Login from "./Login";

function LoginModal({ setShowModalLogin }) {
  return (
    <div
      id="authentication-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="justify-center flex-col items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-600 bg-opacity-50"
    >
      <Login />
      <button onClick={() => setShowModalLogin(false)}>Close</button>
    </div>
  );
}

export default LoginModal;
