import DataTableWithFabLayout from "../../components/DataTableWithFabLayout";
import { API_HOST } from "../../lib/Constants";
import ImportMachine from "./import-machine.form";

const MachineImportPage = () => {
  return <DataTableWithFabLayout
    formConstructor={(onDone) => <ImportMachine onDone={onDone} />}
    url={`${API_HOST}:TODO:`}
   />;
};

export default MachineImportPage;

