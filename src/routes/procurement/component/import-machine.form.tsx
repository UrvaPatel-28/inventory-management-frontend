const ImportMachine = () => {
  return (
    <>
      <form
        action="http://localhost:3000/procurement/import-machine"
        method="POST"
      >
        <label htmlFor="machine_id">Machine</label>
        <input type="text" name="machine_id" placeholder="Search machine" />
        <label htmlFor="Count">Count</label>
        <input type="number" name="count" placeholder="Count of machine" />
        <label htmlFor="total_cost">Total cost</label>
        <input
          type="number"
          name="total_cost"
          placeholder="Total cost of machine"
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default ImportMachine;
