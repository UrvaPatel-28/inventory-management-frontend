import DataTableWithFabLayout from "../components/DataTableWithFabLayout";
import { API_HOST } from "../lib/Constants";
import AddMachineForm from "./machine/add-machine-form";

const RootIndexPage = () => {
  return (
    <DataTableWithFabLayout
      formConstructor={(onDone) => <AddMachineForm onDone={onDone} />}
      url={`${API_HOST}/procurement/machines`}
    />
  );
};

export default RootIndexPage;
