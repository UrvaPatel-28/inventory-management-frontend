import DataTableWithFabLayout from "../../components/DataTableWithFabLayout";
import { API_HOST } from "../../lib/Constants";
import AddSales from "./add-sales.form";

const AddSalesPage = () => {
  return <DataTableWithFabLayout
    formConstructor={(onDone) => <AddSales onDone={onDone} />}
    url={`${API_HOST}:TODO:`}
   />;
};

export default AddSalesPage;
