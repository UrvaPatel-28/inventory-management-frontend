import DataTableWithFabLayout from "../../components/DataTableWithFabLayout";
import { API_HOST } from "../../lib/Constants";
import ApproveUserForm from "./approve-user.form";

const ApproveRequestsPage = () => {
  return (
    <DataTableWithFabLayout
      formConstructor={(onDone) => <ApproveUserForm onDone={onDone} />}
      url={`${API_HOST}/auth/signup/get-approvable-requests`}
    />
  );
};

export default ApproveRequestsPage;
