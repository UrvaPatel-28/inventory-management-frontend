import { ReactNode, useState } from "react";
import { v4 as uuid } from "uuid";
import MaterialSymbol from "./MaterialSymbol";

const useArrayId = (): [string[], () => void, (id: string) => void] => {
  const [arr, setArr] = useState<string[]>([uuid()]);

  const addId = () => setArr([...arr, uuid()]);
  const removeId = (id: string) => setArr(arr.filter((x) => x != id));

  return [arr, addId, removeId];
};

const ArrayInput = ({
  child,
  label,
}: {
  label: string;
  child: (idx: number) => ReactNode;
}) => {
  const [inputArr, addId, removeId] = useArrayId();
  return (
    <>
      <div className="flex">
        <span className="grow text-2xl font-bold">{label}</span>
        <button
          type="button"
          className="bg-secondary w-fit flex p-2 rounded-full items-center self-end"
          onClick={() => addId()}
        >
          Add <MaterialSymbol>add</MaterialSymbol>
        </button>
      </div>
      {inputArr.map((id, x) => (
        <div className="flex items-center" key={id}>
          {child(x)}
          <button className="px-2" onClick={() => removeId(id)}>
            <MaterialSymbol>delete</MaterialSymbol>
          </button>
        </div>
      ))}
    </>
  );
};

export default ArrayInput;
