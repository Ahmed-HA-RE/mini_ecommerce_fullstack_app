'use client';

import Stripe from 'stripe';
import Image from 'next/image';
import { Button } from './ui/button';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import useCartStore from 'store/cart';

type ProductDetailsProps = {
  product: Stripe.Product;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const price = product.default_price as Stripe.Price;
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const cart = useCartStore((state) => state.cart);
  const item = cart.find((cartItem) => cartItem.id === product.id);
  const quantity = item?.qty;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      image: product.images[0],
      price: price.unit_amount as number,
      qty: 1,
    });
  };

  return (
    <section className='p-6 py-14'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
          <div className='rounded-xl overflow-hidden flex-1/2'>
            <Image
              src={product.images[0]}
              alt={product.name}
              width={0}
              height={0}
              sizes='100vw'
              loading='eager'
              className='w-full h-[400px] object-cover'
            />
          </div>
          <div className='mt-4 space-y-4 pb-6 flex-1/2'>
            <h2 className='font-bold text-3xl md:text-4xl'>{product.name}</h2>
            <p className='opacity-70 w-full max-w-lg'>{product.description}</p>
            <p className='dirham-symbol inline-block !text-xl'>&#xea; </p>
            <p className='inline-block !text-xl ml-1 font-medium'>
              {price && price.unit_amount && price.unit_amount / 100}
            </p>
            <div className='flex -space-x-px rtl:space-x-reverse'>
              <Button
                className='rounded-none first:rounded-s-md last:rounded-e-md border-gray-400 focus-visible:z-10 cursor-pointer'
                variant='outline'
                size='icon'
                aria-label='Downvote'
                onClick={() => removeFromCart(product.id)}
              >
                <ChevronDownIcon size={16} aria-hidden='true' />
              </Button>
              <span className='flex items-center border border-gray-400 px-3 text-base font-medium'>
                {quantity && quantity >= 0 ? quantity : 0}
              </span>
              <Button
                className='rounded-none first:rounded-s-md last:rounded-e-md border-gray-400 focus-visible:z-10 cursor-pointer'
                variant='outline'
                size='icon'
                aria-label='Upvote'
                onClick={handleAddToCart}
              >
                <ChevronUpIcon size={16} aria-hidden='true' />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
