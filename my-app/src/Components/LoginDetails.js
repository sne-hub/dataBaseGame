import React, { useEffect, useState } from "react";
import "./LoginDetails.css";
import { useDispatch, useSelector } from "react-redux";
import {
  openForm,
  setContact,
  setContacts,
  setErrorMessage,
} from "../redux/slice";
const LoginDetails = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const contacts = useSelector((state) => state.contacts);
  const errorMessage = useSelector((state) => state.errorMessage);

  const handleUserName = (event) => {
    event.preventDefault();

    setUserName(event.target.value);
  };
  const handlePassword = (event) => {
    event.preventDefault();

    setPassword(event.target.value);
  };

  const handleLogIn = (event) => {
    event.preventDefault();
    dispatch(setErrorMessage(""));

    if (!contacts.find((contact) => contact.userName === userName)) {
      dispatch(setErrorMessage("UserName does not exist please sign up"));
    } else {
      dispatch(setContact({ userName, password }));
      dispatch(setContacts());
      setUserName("");
      setPassword("");
      dispatch(setContact({}));
      dispatch(openForm(false));
    }
    setPassword("");
  };
  const handleSignUp = (event) => {
    event.preventDefault();
    dispatch(setErrorMessage(""));

    if (contacts.find((contact) => contact.userName === userName)) {
      dispatch(setErrorMessage("UserName exists please log in"));
    } else {
      dispatch(setContact({ userName, password }));
      dispatch(setContacts());
      setUserName("");
      setPassword("");
      dispatch(setContact({}));
      dispatch(openForm(false));
    }

    setPassword("");
  };

  return (
    <div className="logindetails">
        <form className="form">
          <label htmlFor="name">userName:</label>

          <input
            name="name"
            value={userName}
            type="text"
            placeholder="enter user name"
            onChange={handleUserName}></input>
          <br />

          <label htmlFor="password">password:</label>

          <input
            name="password"
            value={password}
            type="text"
            placeholder="enter password"
            onChange={handlePassword}></input>
          <br />
          <h3>{errorMessage}</h3>
          <button type="submit" onClick={handleSignUp}>
            register
          </button>
          <button type="submit" onClick={handleLogIn}>
            login
          </button>
        </form>
    </div>
  );
};

export default LoginDetails;
