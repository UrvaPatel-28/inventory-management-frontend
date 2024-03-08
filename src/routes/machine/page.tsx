import DataTableWithFabLayout from "../../components/DataTableWithFabLayout";
import { API_HOST } from "../../lib/Constants";
import AddMachineForm from "./add-machine-form";

const MachinePage = () => {
  return <DataTableWithFabLayout
    formConstructor={(onDone) => <AddMachineForm onDone={onDone} />}
    url={`${API_HOST}/procurement/machines`}
   />;
};

export default MachinePage;
