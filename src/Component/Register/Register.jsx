import React, { useContext, useState } from "react";
import "../Login/Login.css";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const imageApi = import.meta.env.VITE_IMGKEY ;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    // console.log(data);
    const formData = new FormData();
    const photo = data.image[0];
    formData.append("image", photo);

    fetch(
      `https://api.imgbb.com/1/upload?key=${imageApi}`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((res) => {
        createUser(data.email, data.password)
          .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, res.data.url)
              .then(() => {
                reset();
                navigate(from, { replace: true })
              })

              .catch((error) => {
                console.error("Error updating user profile:", error);
                setError("An error occurred while updating the user profile.");
              });
          })
          .catch((error) => {
            console.error("Error creating user:", error);
            if (
              error.message === "Firebase: Error (auth/email-already-in-use)."
            ) {
              setError(
                "This email already has an account, please sign up with a unique email."
              );
            } else if (
              error.message ===
              "Firebase: Password should be at least 6 characters (auth/weak-password)."
            ) {
              setError("Password should be at least 6 characters.");
            } else {
              setError("An unknown error occurred while creating the user.");
            }
          });
      });
  };

  return (
    <form
      className="min-h-screen backGroundImage flex items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-8/12 md:w-4/12 lg:4/12 mx-auto">
        <div className="form-control w-full m-auto">
          <label className="my-2">
            <small>Name</small>
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Enter Your Name"
            className="w-full p-2 rounded bg-green-100"
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
            {...register("email", { required: "Email Address is required" })}
            aria-invalid={errors.email ? "true" : "false"}
            className="w-full p-2 rounded bg-green-100"
          />
          {errors.email && <p role="alert">{errors.mail.message}</p>}
        </div>
        <div className="form-control w-full m-auto">
          <label className="my-2">
            <small>Password</small>
          </label>
          <input
            type="password"
            placeholder="Enter Your Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
              maxLength: {
                value: 16,
                message: "Password must not exceed 16 characters",
              },
            })}
            className="w-full p-2 rounded bg-green-100"
          />
          {errors.password && (
            <span className="font-bold text-red-600 text-sm">
              {errors.password.message}
            </span>
          )}
        </div>
        <div className="form-control w-full m-auto">
          <label className="my-2">
            <small>Image</small>
          </label>
          <input
            type="file"
            placeholder="Upload Your Photo"
            {...register("image", { required: true })}
            className="w-full p-2 rounded  bg-green-100"
          />
          {errors.image && (
            <span className="font-bold text-red-600 text-sm">
              Please Upload A Photo.
            </span>
          )}
        </div>
        <div>
          <p className="font-bold text-red-700">{error}</p>
        </div>
        <div className="form-control w-full m-auto my-4">
          <input
            className="text-white font-bold cursor-pointer w-full p-2 rounded bg-green-950"
            type="submit"
            value="Register"
          />
        </div>
        <div>
          Already Have an account?
          <Link to="/login" className="font-bold text-green-950">
            Login
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Register;
