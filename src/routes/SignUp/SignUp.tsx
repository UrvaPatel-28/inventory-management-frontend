import { UserDepartment } from "../../lib/types/user-department.type";
import { UserRole } from "../../lib/types/user-role.type";
import { Link, useNavigate } from "react-router-dom";
import CustomForm from "../../components/CustomForm";
import { API_HOST } from "../../lib/Constants";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="flex grow justify-center flex-col items-center">
      <CustomForm
        action={`${API_HOST}/auth/signup`}
        className="custom-form"
        method="POST"
        handleData={() => navigate("/signin")}
      >
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <input name="name" type="text" placeholder="Enter Username" required />
        <input name="email" type="email" placeholder="Enter Email" required />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
        />

        <input name="address" type="text" placeholder="Enter Adress" required />

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

        <button type="submit">Sign Up</button>
        <p>
          Already have account? <Link to="/signin">Signin</Link>
        </p>
      </CustomForm>
    </div>
  );
};

export default SignUp;
