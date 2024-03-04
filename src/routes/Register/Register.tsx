import { useRef, type FormEvent, useState } from "react";
import { UserDepartment } from "../../types/user-department.type";
import { UserRole } from "../../types/user-role.type";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const formRef = useRef<HTMLFormElement | null>(null);
  const handleFormData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(formRef.current!);
    const formFeilds = Object.fromEntries(formData.entries());
    try {
      const response = await fetch(`http://localhost:3000/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formFeilds),
      });
      const data = await response.json();
      console.log(data);

      if (!data.success) {
        setError(data.message[0]);
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <form ref={formRef} action="" onSubmit={handleFormData}>
        <div className="w-96 p-8 bg-gray-100 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Register</h2>
          <input
            name="name"
            type="text"
            placeholder="Enter Username"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            name="email"
            className="w-full p-2 mb-4 border rounded"
            type="email"
            placeholder="Enter Email"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border rounded"
            required
          />

          <input
            name="address"
            type="text"
            placeholder="Enter Adress"
            className="w-full p-2 mb-4 border rounded"
            required
          />

          <div className="relative w-full lg:max-w-sm mb-4">
            <select
              className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              name="department"
            >
              <option>--Selece Your Department--</option>
              <option>{UserDepartment.MANUFACTURING}</option>
              <option>{UserDepartment.PROCUREMNENT}</option>
              <option>{UserDepartment.SALES}</option>
            </select>
          </div>

          <div className="relative w-full lg:max-w-sm mb-4">
            <select
              className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              name="role"
            >
              <option>--Selece Your Role--</option>
              <option>{UserRole.DEPARTMENT_HEAD}</option>
              <option>{UserRole.MANAGER}</option>
              <option> {UserRole.OPERATOR}</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-on-primary-dark text-primary-container-light p-2 rounded hover:bg-green-600 mb-4"
          >
            Register
          </button>
          <p>
            Already have account? <Link to="/login">Login</Link>
          </p>
        </div>
        <p className="text-error-light mt-4">{error}</p>
      </form>
    </div>
  );
};

export default Register;
