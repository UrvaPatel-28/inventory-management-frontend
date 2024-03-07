export const AddMachineForm = () => {
  return (
    <form method="POST" action="http://localhost:3000/procurement/add-machine">
      <label htmlFor="name">Machine name</label>
      <input type="text" name="name"/>
      <label htmlFor="consumes[]">Ids</label>
      <input type="text" name="consumes[]"/>
      <input type="text"  name="consumes[]"/>
      <button type="submit">add</button>
    </form>
  );
}