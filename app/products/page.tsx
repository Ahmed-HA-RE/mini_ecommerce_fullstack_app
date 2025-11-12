import { Alert, AlertTitle } from '@/components/ui/alert';
import { TriangleAlertIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { stripe } from '@/lib/stripe';
import ProductCard from '@/components/ProductCard';

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
        <form>
          <Input
            className='focus-visible:border-blue-500 focus-visible:ring-blue-500 border-gray-400 max-w-md mx-auto h-9'
            placeholder='Search products...'
          />
        </form>
        {!products ? (
          <Alert variant='destructive' className='border-destructive'>
            <TriangleAlertIcon />
            <AlertTitle>No products found</AlertTitle>
          </Alert>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {products.data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsPage;
