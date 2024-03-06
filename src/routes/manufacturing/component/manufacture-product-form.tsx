export const ManufactureProductForm = () => {
  return (
    <form action="">
      <label htmlFor="product">Product: </label>
      <input type="text" name="product"/>
      <label htmlFor="machineName">Machine Name: </label>
      <input type="text" name="machineName"/>
      <label htmlFor="rawMaterialName">Raw Material Name</label>
      <input type="text" name="rawMaterialName[]"/>
      <label htmlFor="rawMaterialAmount">Raw Material Amount</label>
      <input type="number" name="rawMaterialAmount[]" min={0}/>
    </form>
  );
}
