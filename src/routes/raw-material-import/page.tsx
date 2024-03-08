import DataTableWithFabLayout from "../../components/DataTableWithFabLayout";
import { API_HOST } from "../../lib/Constants";
import ImportRawMaterialForm from "./import-rawmaterial.form";

const ImportRawMaterialPage = () => {
  return <DataTableWithFabLayout
    formConstructor={(onDone) => <ImportRawMaterialForm onDone={onDone} />}
    url={`${API_HOST}:TODO:`}
   />;
};

export default ImportRawMaterialPage;
