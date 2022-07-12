import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="login">
      <h2>Login Page</h2>
      <form action="">
        <label htmlFor="email">
        <input type="text" placeholder="Email"/>
        </label>
        <br />
        <label htmlFor="password">
        <input type="password" placeholder="Password"/>
        </label>
      </form>
      <p>Don't have an account?</p> <Link to="/register">Sign up</Link>
    </div>
  );
};

export default LoginPage;
