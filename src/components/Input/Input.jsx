import React, { useState } from "react";
import { text } from "../../common/strings";
import show from "../../assets/images/eye.png";
import "./styles.css";

function Input({
  label,
  type,
  id,
  placeholder,
  value,
  onChange,
  forgotPassword,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="input-container">
      <div className="input-label-container">
        <label className="input-label" htmlFor={id}>
          {label}
        </label>
        {forgotPassword && (
          <div className="input-forgot-password">
            <a href="#" className="input-forgot-password-link">
              {text.forgotPassword}
            </a>
          </div>
        )}
      </div>
      <div className="input-field-container">
        <input
          className="input-field"
          type={showPassword ? "text" : type}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
        />
        {type === "password" && (
          <span className="input-toggle" onClick={togglePasswordVisibility}>
            {showPassword ? <img alt="hide" /> : <img src={show} alt="show" />}
          </span>
        )}
      </div>
    </div>
  );
}

export default Input;
