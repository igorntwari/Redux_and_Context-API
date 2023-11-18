import ProductItem from './ProductItem';
import classes from './Products.module.css';

const initialProducts = [{id:'p1',price:3,title:"weed",description:"this is from jamaica"},
{id:'p2',price:33,title:"oxx",description:"this is from russion mob"},
{id:'p4',price:33433,title:"hacking",description:"this is item machine handler"}
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
     { initialProducts.map((product) => (
        <ProductItem
        key = {product.id}
        id = {product.id}
          title={product.title}
          price={product.price}
          description='This is a first product - amazing!'
        />
      ))}
      </ul>
    </section>
  );
};

export default Products;
