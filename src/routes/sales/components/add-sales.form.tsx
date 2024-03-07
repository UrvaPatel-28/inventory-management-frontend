import AutoCompleteInput from "../../../components/AutoCompleteInput";
import CustomForm from "../../../components/CustomForm";
import { ApiSuggestions } from "../../../lib/Api";
import { API_HOST } from "../../../lib/Constants";

const AddSales = () => {
  return (
    <CustomForm
      className="custom-form"
      handleData={(e) => console.log(e)} // send notification
      action={`${API_HOST}/sales/create-sale`}
      method="POST"
    >
      <AutoCompleteInput
        getSuggestions={(q) => ApiSuggestions.getProductSuggestions(q)}
        name="product_id"
        placeholder="Search product"
      />
      <input type="number" name="count" placeholder="Count of product" />
      <input
        type="number"
        name="total_cost"
        placeholder="Total cost of product"
      />
      <input type="text" name="to" placeholder="Sold to" />
      <button type="submit">Add</button>
    </CustomForm>
  );
};

export default AddSales;
