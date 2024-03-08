import CustomForm from "../../components/CustomForm";
import { API_HOST } from "../../lib/Constants";

const AddRawMaterialForm = ({ onDone }: { onDone: () => void }) => {
  return (
    <CustomForm
      className="custom-form"
      handleData={(e) => {
        console.log(e);
        onDone();
      }} // TODO: show notification
      action={`${API_HOST}/procurement/add-raw-material`}
      method="POST"
    >
      <input
        type="text"
        name="name"
        placeholder="Raw Material Name"
      />
      <input
        type="number"
        name="cost"
        placeholder="Total cost of raw material"
      />
      <button type="submit">Add</button>
    </CustomForm>
  );
};

export default AddRawMaterialForm;
