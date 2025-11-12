import ProductsList from '@/components/ProductsList';
import { stripe } from '@/lib/stripe';

const ProductsPage = async () => {
  const products = await stripe.products.list({
    expand: ['data.default_price'],
  });

  return (
    <section className='p-6 py-10'>
      <div className='max-w-7xl mx-auto space-y-5'>
        <h1 className='font-bold text-3xl md:text-4xl text-center'>
          All Products
        </h1>
        <ProductsList products={products.data} />
      </div>
    </section>
  );
};

export default ProductsPage;
