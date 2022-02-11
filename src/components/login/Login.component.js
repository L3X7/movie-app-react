import React from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleError = (errors) => {
    
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const registerOptions = {
    username: { required: "User is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
    },
  };

  return (
    <div className="h-screen bg-slate-800 flex justify-center items-center w-full">
      <form onSubmit={handleSubmit(onSubmit, handleError)}>
        <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
          <div className="space-y-4">
            <h1 className="text-center text-2xl font-semibold text-gray-600">
              Welcome
            </h1>
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-gray-600 font-semibold"
              >
                User
              </label>
              <input
                type="text"
                name="username"
                className="bg-indigo-50 border border-gray-200 px-4 py-2 outline-none rounded-md w-full"
                {...register("username", registerOptions.username)}
              />
              <small className="text-red-600">
                {errors?.username && errors.username.message}
              </small>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-gray-600 font-semibold"
              >
                Password
              </label>
              <input
                type="text"
                className="bg-indigo-50 border border-gray-200 px-4 py-2 outline-none rounded-md w-full"
                {...register("password", registerOptions.password)}
              />
              <small className="text-red-600">
                {errors?.password && errors.password.message}
              </small>
            </div>
          </div>
          <button
            type="subimit"
            className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide"
          >
            Log in
          </button>
          <div className="pt-5 text-center text-blue-600">
            <p>Register</p>
          </div>
        </div>
      </form>
    </div>
  );
}
