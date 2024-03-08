import DataTableWithFabLayout from "../../components/DataTableWithFabLayout";
import { API_HOST } from "../../lib/Constants";
import ManufactureProductForm from "./manufacture-product-form";

const ManufactureProductPage = () => {
  return <DataTableWithFabLayout
    formConstructor={(onDone) => <ManufactureProductForm onDone={onDone} />}
    url={`${API_HOST}/manufacturing/manufactured-product`}
   />;
};

export default ManufactureProductPage;



