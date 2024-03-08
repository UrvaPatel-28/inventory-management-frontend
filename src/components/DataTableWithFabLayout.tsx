import { ReactNode, useReducer, useRef } from "react";
import FloatingActionButton from "./FloatingActionButton";
import DataTableUrl from "./DataTableUrl";

const DataTableWithFabLayout = ({
  url,
  formConstructor,
}: {
  url: string;
  formConstructor: (onDone: () => void) => ReactNode;
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openDialog = () => dialogRef.current?.showModal();
  const closeDialog = () => dialogRef.current?.close();
  const [update, updateData] = useReducer((x) => x + 1, 0);

  return (
    <>
      <dialog
        className="w-full max-w-2xl p-3 rounded-lg bg-surface-variant"
        ref={dialogRef}
      >
        {formConstructor(() => {
          closeDialog();
          updateData();
        })}
      </dialog>
      <FloatingActionButton icon="add" onClick={openDialog} />
      <DataTableUrl update={update} url={url} />
    </>
  );
};

export default DataTableWithFabLayout;
