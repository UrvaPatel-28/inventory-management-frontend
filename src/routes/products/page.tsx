import DataTableWithFabLayout from "../../components/DataTableWithFabLayout";
import { API_HOST } from "../../lib/Constants";
import AddProductForm from "./add-product-form";

const AddProductPage = () => {
  return <DataTableWithFabLayout
    formConstructor={(onDone) => <AddProductForm onDone={onDone} />}
    url={`${API_HOST}/manufacturing/products`}
   />;
};

export default AddProductPage;
