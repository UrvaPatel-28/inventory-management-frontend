import DataTableWithFabLayout from "../../components/DataTableWithFabLayout";
import { API_HOST } from "../../lib/Constants";
import ImportRawMaterialForm from "./import-rawmaterial.form";

const ImportRawMaterialPage = () => {
  return <DataTableWithFabLayout
    formConstructor={(onDone) => <ImportRawMaterialForm onDone={onDone} />}
    url={`${API_HOST}/procurement/raw-material-imports`} //TODO: in backend
   />;
};

export default ImportRawMaterialPage;
