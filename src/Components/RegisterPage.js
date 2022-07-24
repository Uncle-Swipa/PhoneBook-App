import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const baseURL = "http://localhost:8080/register";

  const postUserDetails = (event) => {

    let formField = new FormData();
    formField.append('name', name)
    formField.append('email', email)
    formField.append('phoneNumber', phoneNumber)
    formField.append('password', password)
    formField.append('confirmPassword', confirmPassword)

    axios.post(baseURL, formField, {headers: {"Content-Type": "application/json"}}).then((response) => {
      console.table(response.data);
    })
  };

  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <div>
      <div className="register">
        <h2>Registration Page</h2>
        <form action="" onSubmit={navigateToLogin}>
          <label htmlFor="name">
            <input
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor="email">
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor="phoneNumber">
            <input
              type="text"
              placeholder="Phone Number"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor="password">
            <input
              name="passcode"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor="confirmPassword">
            <input
              name="passcode_repeat"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <div className="centerBtn">
            <button className="Btn" onClick={postUserDetails}>
              Register
            </button>
          </div>
        </form>
        <p>Existing user?</p>{" "}
        <Link to="/login" className="links">
          Login
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
