import React from "react";
import "./MessageAlert.scss";

const MessageAlert = ({ children }) => {
  return (
    <div className="message-container">
      <p className="message-text">{children}</p>
    </div>
  );
};

export default MessageAlert;
