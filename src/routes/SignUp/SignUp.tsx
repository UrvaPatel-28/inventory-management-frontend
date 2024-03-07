import { UserDepartment } from "../../lib/types/user-department.type";
import { UserRole } from "../../lib/types/user-role.type";
import { Link, useNavigate } from "react-router-dom";
import CustomForm from "../../components/CustomForm";
import { API_HOST } from "../../lib/Constants";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <CustomForm
        action={`${API_HOST}/auth/signup`}
        className="flex flex-col gap-3 max-w-96 w-full"
        method="POST"
        handleData={() => navigate("/signin")}
      >
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <input
          name="name"
          type="text"
          placeholder="Enter Username"
          className="bg-surface p-2 border rounded"
          required
        />
        <input
          name="email"
          className="bg-surface p-2 border rounded"
          type="email"
          placeholder="Enter Email"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="bg-surface p-2 border rounded"
          required
        />

        <input
          name="address"
          type="text"
          placeholder="Enter Adress"
          className="bg-surface p-2 border rounded"
          required
        />

        <select
          className="bg-surface p-2 border rounded"
          name="department"
          defaultValue="userDepartmentDisable"
        >
          <option disabled value="userDepartmentDisable">
            -- Select Your Department --
          </option>
          {Object.values(UserDepartment).map((userDepartment) => {
            return (
              <option key={userDepartment} value={userDepartment}>
                {userDepartment}
              </option>
            );
          })}
        </select>

        <select
          className="bg-surface p-2 border rounded"
          name="role"
          defaultValue="userRoleDisable"
        >
          <option disabled value="userRoleDisable">
            -- Select Your Role --
          </option>
          {Object.values(UserRole)
            .filter((x) => x !== UserRole.ADMIN)
            .map((userRole) => {
              return (
                <option key={userRole} value={userRole}>
                  {userRole}
                </option>
              );
            })}
        </select>

        <button
          type="submit"
          className="w-full bg-primary font-bold p-2 rounded-full"
        >
          Sign Up
        </button>
        <p>
          Already have account? <Link to="/signin">Signin</Link>
        </p>
      </CustomForm>
    </div>
  );
};

export default SignUp;
