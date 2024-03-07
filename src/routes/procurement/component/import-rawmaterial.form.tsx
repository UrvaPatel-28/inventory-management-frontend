const AddMachine = () => {
  return (
    <>
      <form
        action="http://localhost:3000/procurement/import-raw-material"
        method="POST"
      >
        <label htmlFor="rawMaterial_id">Raw material</label>
        <input
          type="text"
          name="rawMaterial_id"
          placeholder="Search rae material"
        />
        <label htmlFor="Count">Count</label>
        <input type="number" name="count" placeholder="Count of raw material" />
        <label htmlFor="total_cost">Total cost</label>
        <input
          type="number"
          name="total_cost"
          placeholder="Total cost of raw material"
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddMachine;
