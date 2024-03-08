import ArrayInput from "../../components/ArrayInput";
import AutoCompleteInput from "../../components/AutoCompleteInput";
import CustomForm from "../../components/CustomForm";
import { ApiSuggestions } from "../../lib/Api";
import { API_HOST } from "../../lib/Constants";

const ManufactureProductForm = ({ onDone }: { onDone: () => void }) => {
  return (
    <CustomForm
      className="custom-form"
      method="POST"
      handleData={(e) => {
        console.log(e)
        onDone()
      }} // TODO: show notification
      action={`${API_HOST}/manufacturing/manufacture-product`}
    >
      <AutoCompleteInput
        getSuggestions={(q) => ApiSuggestions.getProductSuggestions(q)}
        name="productId"
        placeholder="Search Product"
        required
      />
      <AutoCompleteInput
        getSuggestions={(q) => ApiSuggestions.getMachineSuggestions(q)}
        name="machineId"
        placeholder="Search Machine"
        required
      />
      <ArrayInput
        label="Raw Materials Consumed"
        child={(index) => (
          <div className="flex grow">
            <AutoCompleteInput
              getSuggestions={(e) =>
                ApiSuggestions.getRawMaterialSuggestions(e)
              }
              placeholder="Search Raw Material"
              name={`rawMaterialQuantityArray[${index}][rawMaterialId]`}
              required
            />
            <input
              placeholder="Material Count"
              className="grow"
              type="number"
              name={`rawMaterialQuantityArray[${index}][amount]`}
            />
          </div>
        )}
      />
      <button type="submit">Add Manufacturing Record</button>
    </CustomForm>
  );
};

export default ManufactureProductForm;
