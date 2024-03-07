import AutoCompleteInput from "../../../components/AutoCompleteInput";
import CustomForm from "../../../components/CustomForm";
import { ApiSuggestions } from "../../../lib/Api";
import { API_HOST } from "../../../lib/Constants";

const ImportRawMaterialForm = () => {
  return (
    <CustomForm
      className="custom-form"
      handleData={(e) => console.log(e)} // TODO: show notification
      action={`${API_HOST}/procurement/import-raw-material`}
      method="POST"
    >
      <AutoCompleteInput
        getSuggestions={(q) => ApiSuggestions.getRawMaterialSuggestions(q)}
        name="raw_material_id"
        placeholder="Search raw material"
      />
      <input type="number" name="count" placeholder="Count of raw material" />
      <input
        type="number"
        name="total_cost"
        placeholder="Total cost of raw material"
      />
      <button type="submit">Add</button>
    </CustomForm>
  );
};

export default ImportRawMaterialForm;
