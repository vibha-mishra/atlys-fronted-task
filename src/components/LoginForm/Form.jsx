import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

const Form = ({ handleSubmit, isLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  return (
    <form onSubmit={(event) => handleSubmit(event, { email, password })}>
      <Input
        label="Email or Username"
        type="email"
        id="email"
        placeholder={
          isLogin ? "Enter you email or username" : "Enter your email"
        }
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {!isLogin && (
        <Input
          label="Username"
          type="text"
          id="username"
          placeholder="Enter you username"
          value={email}
          onChange={(e) => setUsername(e.target.value)}
        />
      )}
      <Input
        label="Password"
        type="password"
        id="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        forgotPassword
      />

      <Button type="submit" disabled={!email || !password}>
        {isLogin ? `Login Now` : "Sign Up"}
      </Button>
    </form>
  );
};

export default Form;
