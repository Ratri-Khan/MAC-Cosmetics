import React, { useContext } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    form.reset();

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form
      className=" min-h-screen  backGroundImage flex items-center"
      onSubmit={handleLogin}
    >
      <div className="w-4/12 mx-auto">
        <div className="form-control w-full m-auto">
          <label className="my-3">
            <small>Email</small>
          </label>
          <input
            type="text"
            name="email"
            placeholder="Enter Your Email"
            className="w-full p-2 rounded"
          />
        </div>
        <div className="form-control w-full m-auto">
          <label className="my-3">
            <small>Password</small>
          </label>
          <input
            type="password"
            placeholder="Enter Your Password"
            name="password"
            className=" w-full p-2 rounded border-blue-950"
          />
        </div>
        <div className="form-control w-full m-auto my-4">
          <input
            className="text-white font-bold cursor-pointer  w-full p-2 rounded bg-green-950"
            type="submit"
            value="Login"
          />
        </div>
        <div>
        Don't have an account?
        <Link to="/register"className="font-bold text-green-950">Register</Link>
        </div>
      </div>
    </form>
  );
};

export default Login;
