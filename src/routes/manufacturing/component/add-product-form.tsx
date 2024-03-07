import CustomForm from "../../../components/CustomForm";
import { API_HOST } from "../../../lib/Constants";
import { ProductCategory } from "../../../lib/types/product-category.enum";

const AddProductForm = () => {
  return (
    <CustomForm
      className="custom-form"
      method="POST"
      handleData={(e) => console.log(e)} //TODO: show notification
      action={`${API_HOST}/manufacturing/add-new-product`}
    >
      <input type="text" name="name" placeholder="Product Name" required />
      <input
        type="number"
        name="price"
        min={0}
        placeholder="Product Price"
        required
      />
      <input type="text" name="model" placeholder="Product Model" required />
      <input
        type="text"
        name="variant"
        placeholder="Product Variant"
        required
      />
      <select name="category" defaultValue="default" required>
        <option value="default" disabled>
          Select Product Category
        </option>
        {Object.values(ProductCategory).map((category) => {
          return <option value={category}>{category}</option>;
        })}
      </select>
      <button type="submit">Add Product</button>
    </CustomForm>
  );
};

export default AddProductForm;