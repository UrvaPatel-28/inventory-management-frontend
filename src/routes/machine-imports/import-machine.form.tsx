import AutoCompleteInput from "../../components/AutoCompleteInput";
import CustomForm from "../../components/CustomForm";
import { ApiSuggestions } from "../../lib/Api";
import { API_HOST } from "../../lib/Constants";

const ImportMachine = ({ onDone }: { onDone: () => void }) => {
  return (
    <CustomForm
      className="custom-form"
      handleData={(e) => {
        console.log(e);
        onDone();
      }} // TODO: show notification
      action={`${API_HOST}/procurement/import-machine`}
      method="POST"
    >
      <AutoCompleteInput
        name="machine_id"
        placeholder="Search machine"
        getSuggestions={(q) => ApiSuggestions.getMachineSuggestions(q)}
      />
      <input
        type="number"
        name="count"
        placeholder="Count of machine"
        required
      />
      <input
        type="number"
        name="total_cost"
        placeholder="Total cost of machine"
        required
      />
      <button type="submit">Add</button>
    </CustomForm>
  );
};

export default ImportMachine;
