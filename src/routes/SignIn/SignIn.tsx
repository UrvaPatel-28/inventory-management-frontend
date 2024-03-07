import { Link } from "react-router-dom";
import { API_HOST } from "../../lib/Constants";
import CustomForm from "../../components/CustomForm";
import { login } from "../../Features/authSlice";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center flex-col grow items-center">
      <CustomForm
        className="flex w-full max-w-96 flex-col gap-4"
        handleData={(data) => dispatch(login(data.data))}
        method="POST"
        action={`${API_HOST}/auth/signin`}
      >
        <h2 className="text-2xl font-semibold mb-4">Login</h2>

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

        <button
          type="submit"
          className="w-full bg-primary font-bold p-2 rounded-full"
        >
          Log In
        </button>
        <p>
          Already have account? <Link to="/signup">Signup</Link>
        </p>
      </CustomForm>
    </div>
  );
};
export default SignIn;
