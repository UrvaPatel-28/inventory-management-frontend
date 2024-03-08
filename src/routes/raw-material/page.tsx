import DataTableWithFabLayout from "../../components/DataTableWithFabLayout";
import { API_HOST } from "../../lib/Constants";
import AddRawMaterialForm from "./add-rawmaterial.form";

const AddRawMaterialPage = () => {
  return <DataTableWithFabLayout
    formConstructor={(onDone) => <AddRawMaterialForm onDone={onDone} />}
    url={`${API_HOST}/procurement/raw-materials`}
   />;
};

export default AddRawMaterialPage;
