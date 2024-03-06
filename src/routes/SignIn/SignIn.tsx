import React, { useRef, useState, type FormEvent } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../Features/authSlice";

const SignIn = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSigninFormData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(formRef.current!);
    const formEntries = Object.fromEntries(formData.entries());
    try {
      const response = await fetch(`http://localhost:3000/auth/signin`, {
        method: "POST",
        credentials:'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formEntries),
      });
      const data = await response.json();

      if (!data.success) {
        setError(data.message);
      } else {
        //send token in slice
        dispatch(login(data.data));
        navigate("/");
      }
    } catch (error) {
      console.error("Error adding data", error);
    }
  };
  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <form ref={formRef} action="" onSubmit={handleSigninFormData}>
        <div className="w-96 p-8 bg-gray-100 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>

          <input
            name="email"
            className="w-full p-2 mb-4 border rounded"
            type="email"
            placeholder="Enter Email"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-on-primary-dark text-primary-container-light p-2 rounded hover:bg-green-600"
          >
            Signin
          </button>
          <p>
            Already have account? <Link to="/signup">Signup</Link>
          </p>
        </div>
        <p className="text-error-light mt-4">{error}</p>
      </form>
    </div>
  );
};
export default SignIn;
