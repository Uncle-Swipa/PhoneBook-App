import { Link } from "react-router-dom";
const RegisterPage = () => {
  return (
    <div>
      <div className="register">
        <h2>Registration Page</h2>
        <form action="">
          <label htmlFor="name">
          <input type="text" placeholder="Name"/>
          </label>
          <br />
          <label htmlFor="email">
          <input type="email" placeholder="Email"/>
          </label>
          <br />
          <label htmlFor="phoneNumer">
          <input type="text" placeholder="Phone Number"/>
          </label>
          <br />
          <label htmlFor="password">
          <input type="password" placeholder="Password"/>
          </label>
          <br />
          <label htmlFor="confirmPassword">
          <input type="password" placeholder="Confirm Password"/>
          </label>
          <br />
          <div className="centerBtn">
            <button className="registerBtn">Register</button>
          </div>
        </form>
        <p>Existing user?</p> <Link to="/login" className="links">Login</Link>
      </div>
    </div>
  );
};

export default RegisterPage;
