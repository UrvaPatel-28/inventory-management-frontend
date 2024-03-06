import { v4 as uuid } from 'uuid';
import { useState } from "react";

export const ManufactureProductForm = () => {
  const [idArr, setIdArr] = useState<string[]>([]);
  return (
    <form method="POST" action="http://localhost:3000/manufacturing/manufacture-product">
      <label htmlFor="product_id">Product Id: </label>
      <input type="text" name="productId"/>
      <label htmlFor="machine_id">Machine Id: </label>
      <input type="text" name="machineId"/>
      {
        idArr.map((id, index) => {
          return (
          <div key={id}>
            <label htmlFor={`rawMaterialQuantityArray[${index}][rawMaterialId]`}>Raw Material Id:</label>
            <input type="text" name={`rawMaterialQuantityArray[${index}][rawMaterialId]`}/>
            <label htmlFor={`rawMaterialQuantityArray[${index}][amount]`}>Raw Material Amount:</label>
            <input type="number" name={`rawMaterialQuantityArray[${index}][amount]`}/>
          </div>
          );
        })
      }
      <button onClick={(event) => {
        event.preventDefault();
        setIdArr([...idArr, uuid()]);
      }}>add</button>
      <button type="submit">submit</button>
    </form>
  );
}
