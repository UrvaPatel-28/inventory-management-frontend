import ArrayInput from "../../components/ArrayInput";
import AutoCompleteInput from "../../components/AutoCompleteInput";
import CustomForm from "../../components/CustomForm";
import { ApiSuggestions } from "../../lib/Api";
import { API_HOST } from "../../lib/Constants";

const ApproveUserForm = ({ onDone }: { onDone: () => void }) => {
  return (
    <CustomForm
      className="custom-form"
      method="POST"
      action={`${API_HOST}/auth/signup/approve-requests`}
      handleData={(e) => {
        console.log(e);
        onDone();
      }} //TODO: show notification
    >
      <ArrayInput
        label="Users"
        child={(idx) => (
          <AutoCompleteInput
            getSuggestions={(q) => ApiSuggestions.getApprovableUsers(q)}
            placeholder="Search User Email"
            name={`emails[${idx}]`}
            required
          />
        )}
      />
      <button type="submit">Approve</button>
    </CustomForm>
  );
};

export default ApproveUserForm;
