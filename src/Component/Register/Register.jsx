import React, { useContext, useState } from "react";
import "../Login/Login.css";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const displayName= form.name.value;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   const confirmPassword = form.confirmPassword.value;
  //   console.log(email, password, confirmPassword);

  //   form.reset();

  //   if (password.length < 6) {
  //     setError("password must be 6 character");
  //     return;
  //   }
  //   if (password !== confirmPassword) {
  //     setError("Your password did not match");
  //     return;
  //   }

  //   createUser(email, password)
  //     .then((result) => {
  //       const loggedUser = result.user;

  //       navigate(from, { replace: true });
  //       updateUserProfile({
  //         displayName: displayName,
  //         photoURL: displayURL
  //     });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("user profile info updated");
          reset();
          navigate("/");
        })
        // .catch((error) => {
        //   console.log(error);
        // });
        .catch((error) => {
          if (error.massage === 'Firebase: Error (auth/email-already-in-use)') {
            setError(
              'This email is already in use. Please use a different email.'
            );
          } else {
            setError('An error occurred. Please try again later.');
            console.error(error.message);
          }
        });
    });
  };
  return (
    <form
      className=" min-h-screen  backGroundImage flex items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-8/12 md:w-4/12 lg:4/12 mx-auto">

      {error && <p style={{ color: 'red' }}>{error}</p>}

        <div className="form-control w-full m-auto">
          <label className="my-2">
            <small>Name</small>
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Enter Your Name"
            className="w-full p-2 rounded"
          />
          {errors.name && (
            <span className="font-bold text-red-600 text-sm">
              Please fill up this field.
            </span>
          )}
        </div>
        <div className="form-control w-full m-auto">
          <label className="my-2">
            <small>Email</small>
          </label>
          <input
            type="email"
            placeholder="Enter Your Mail"
            // {...register("email", { required: true })}
            {...register("email", { required: "Email Address is required" })}
            aria-invalid={errors.email ? "true" : "false"}
            className="w-full p-2 rounded"
          />
          {errors.email && <p role="alert">{errors.mail.message}</p>}
          {/* {errors.email && (
            <span className="font-bold text-red-600 text-sm">
              Please fill up this field.
            </span>
          )} */}
          {/* <input
            {...register("mail", { required: "Email Address is required" })}
            aria-invalid={errors.mail ? "true" : "false"}
          />
          {errors.mail && <p role="alert">{errors.mail.message}</p>} */}
        </div>
        <div className="form-control w-full m-auto">
          <label className="my-2">
            <small>Password</small>
          </label>
          <input
            type="password"
            placeholder="Enter Your Password"
            {...register("password", { required: true })}
            className="w-full p-2 rounded"
          />
          {errors.password && (
            <span className="font-bold text-red-600 text-sm">
              Please fill up this field.
            </span>
          )}
        </div>
        <div className="form-control w-full m-auto">
          <label className="my-2">
            <small>Confirm Password</small>
          </label>
          <input
            type="password"
            placeholder="Confirm Your Password"
            {...register("confirmPassword", { required: true })}
            className="w-full p-2 rounded"
          />
          {errors.confirmPassword && (
            <span className="font-bold text-red-600 text-sm">
              Please fill up this field.
            </span>
          )}
        </div>
        <div>
          <p className="text-red-700">{error}</p>
        </div>
        <div className="form-control w-full m-auto my-4">
          <input
            className="text-white font-bold cursor-pointer  w-full p-2 rounded bg-green-950"
            type="submit"
            value="Register"
          />
        </div>
      </div>
    </form>
  );
};

export default Register;
