'use client';
import { Alert, AlertTitle } from '@/components/ui/alert';
import { TriangleAlertIcon } from 'lucide-react';
import ProductCard from './ProductCard';
import Stripe from 'stripe';
import { useState } from 'react';
import { Input } from './ui/input';

const ProductsList = ({ products }: { products: Stripe.Product[] }) => {
  const [searchProducts, setSearchProducts] = useState('');

  const filteredProducts = products.filter((product) => {
    const search = product.name.toLowerCase().includes(searchProducts);
    return search;
  });

  return (
    <>
      <Input
        className='focus-visible:border-blue-500 focus-visible:ring-blue-500 border-gray-400 max-w-md mx-auto h-9'
        placeholder='Search products...'
        value={searchProducts}
        onChange={(e) => setSearchProducts(e.target.value)}
      />
      {!products ? (
        <Alert variant='destructive' className='border-destructive'>
          <TriangleAlertIcon />
          <AlertTitle>No products found</AlertTitle>
        </Alert>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsList;
