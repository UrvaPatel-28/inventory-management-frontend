import { ProductCategory } from "../../../lib/types/product-category.enum";

export const AddProductForm = () => {
  return (
    <form method="POST" action="">
      <label htmlFor="name">Product Name: </label>
      <input type="text" name="name"/>
      <label htmlFor="name">Product Price: </label>
      <input type="number" name="price" min={0}/>
      <label htmlFor="model">Product Model: </label>
      <input type="text" name="model"/>
      <label htmlFor="variant">Product Variant: </label>
      <input type="text" name="variant"/>
      <label htmlFor="category">Product Category:</label>
      <select name="category" defaultValue="default">
        <option value="default" disabled>select</option>
        {Object.values(ProductCategory).map(category => {
          return (<option value={category}>{category}</option>);
        })}
      </select>
      <input type="submit" value="Add Product"></input>
    </form>
  );
}