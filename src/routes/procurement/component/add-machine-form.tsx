import ArrayInput from "../../../components/ArrayInput";
import CustomForm from "../../../components/CustomForm";
import { API_HOST } from "../../../lib/Constants";
import AutoCompleteInput from "../../../components/AutoCompleteInput";
import { ApiSuggestions } from "../../../lib/Api";

const AddMachineForm = () => {
  return (
    <CustomForm
      handleData={(e) => console.log(e)} // TODO: show notification
      method="POST"
      className="custom-form"
      action={`${API_HOST}/procurement/add-machine`}
    >
      <input
        required={true}
        placeholder="Machine Name"
        name="name"
      />
      <ArrayInput
        label="Consumes"
        child={(idx: number) => (
          <AutoCompleteInput
            required={true}
            placeholder={`Raw Material ${idx} Name`}
            name={`consumes[${idx}][id]`}
            getSuggestions={(q) => ApiSuggestions.getRawMaterialSuggestions(q)}
          />
        )}
      />
      <button type="submit">add</button>
    </CustomForm>
  );
};

export default AddMachineForm;