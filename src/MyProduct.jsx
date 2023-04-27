/* function MyProduct(prop) {
  //prop is a prop
  return (
    <div>
      <h1>{prop.name}</h1>
      <p>{prop.description}</p>
      <p>{prop.price}</p>
    </div>
  );
} */

function MyProduct({ name, description, price }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
}

MyProduct.defaultProps = {
  name: "gadget",
  description: "electronic item",
  price: 1000,
};
export default MyProduct;
