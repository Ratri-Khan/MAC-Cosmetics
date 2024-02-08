import React, { useContext, useState } from "react";
import "../Login/Login.css";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser , updateUserProfile } = useContext(AuthContext);

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const displayName= form.displayName.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(email, password, confirmPassword);

    form.reset();

    if (password.length < 6) {
      setError("password must be 6 character");
      return;
    }
    if (password !== confirmPassword) {
      setError("Your password did not match");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;

        navigate(from, { replace: true });
        updateUserProfile({
          displayName: displayName,
          photoURL: displayURL
      });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form
      className=" min-h-screen  backGroundImage flex items-center"
      onSubmit={handleRegister}
    >
      <div className="w-4/12 mx-auto">
        <div className="form-control w-full m-auto">
          <label className="my-2">
            <small>Name</small>
          </label>
          <input
            type="text"
            name="displayName"
            placeholder="Enter Your Name"
            className="border w-full p-2 rounded border-blue-950"
          />
        </div>
        <div className="form-control w-full m-auto">
          <label className="my-2">
            <small>Email</small>
          </label>
          <input
            type="email"
            placeholder="Enter Your Mail"
            name="email"
            className="border w-full p-2 rounded border-blue-950"
          />
        </div>
        <div className="form-control w-full m-auto">
          <label className="my-2">
            <small>Password</small>
          </label>
          <input
            type="password"
            placeholder="Enter Your Password"
            name="password"
            className="border w-full p-2 rounded border-blue-950"
          />
        </div>
        <div className="form-control w-full m-auto">
          <label className="my-2">
            <small>Confirm Password</small>
          </label>
          <input
            type="password"
            placeholder="Confirm Your Password"
            name="confirmPassword"
            className="border w-full p-2 rounded border-blue-950"
          />
        </div>
        <div>
          <p className="text-red-700">{error}</p>
        </div>
        <div className="form-control w-full m-auto my-4">
          <input
            className="text-white font-bold cursor-pointer  w-full p-2 rounded bg-blue-950"
            type="submit"
            value="Register"
          />
        </div>
      </div>
    </form>
  );
};

export default Register;
