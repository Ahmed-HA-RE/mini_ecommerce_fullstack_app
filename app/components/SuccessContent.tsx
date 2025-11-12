'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import useCartStore from 'store/cart';

const SuccessContent = () => {
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <Image src={'/svgs/success.svg'} alt='Success' width={140} height={140} />
      <h1 className='text-4xl font-bold'>Payment Successful!</h1>
      <p className='text-lg'>Thank your for your purchase.</p>
      <Link
        className='text-lg text-blue-500 hover:underline'
        href={'/products'}
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default SuccessContent;
