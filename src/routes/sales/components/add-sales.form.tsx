const AddSales = () => {
  return (
    <>
      <form action="http://localhost:3000/sales" method="POST">
        <label htmlFor="product_id">Product</label>
        <input type="text" name="product_id" placeholder="Search product" />
        <label htmlFor="count">Count</label>
        <input type="number" name="count" placeholder="Count of product" />
        <label htmlFor="total_cost">Total cost</label>
        <input type="number" name="total_cost" placeholder="Total cost of product" />
        <label htmlFor="address">Address</label>
        <input type="text" name="to" placeholder="Address" />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddSales;
