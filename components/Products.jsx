import ProductCard from './ProductCard';

const Products = ({ products, currency }) => {
  return (
    <div className='grid grid-cols-3 gap-x-[41px]'>
      {products.map((product, id) => (
        <ProductCard
          key={id}
          title={product.title}
          id={product.id}
          img={product.img}
          price={product.price}
          currency={currency}
          outOfStock={product.outOfStock}
        />
      ))}
    </div>
  );
};
export default Products;
