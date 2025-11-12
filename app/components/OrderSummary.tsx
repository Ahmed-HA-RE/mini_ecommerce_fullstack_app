'use client';
import { ChevronDownIcon, ChevronUpIcon, ShoppingBag } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import useCartStore from 'store/cart';
import { Alert, AlertTitle } from './ui/alert';
import Image from 'next/image';
import { formatAmount } from '@/utils/formatAmount';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

const OrderSummary = () => {
  const cart = useCartStore((state) => state.cart);
  const totalItemsPrice = cart.reduce((a, c) => a + c.price * c.qty, 0);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <>
      {cart.length === 0 ? (
        <Alert className='border-destructive bg-destructive/10 text-destructive rounded-none border-0 border-l-6 max-w-lg mx-auto'>
          <ShoppingBag />
          <AlertTitle>Your cart is empty</AlertTitle>
        </Alert>
      ) : (
        <Card className='w-full max-w-lg gap-2'>
          <CardHeader className='gap-0 mb-4'>
            <CardTitle className='text-2xl'>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className='space-y-6 px-4'>
            {cart.map((cartItem, index) => (
              <div key={cartItem.id}>
                <div className='flex flex-row items-center  gap-4'>
                  {/* image */}
                  <div>
                    <Image
                      src={cartItem.image}
                      alt={cartItem.name}
                      width={200}
                      height={200}
                      className='rounded-md'
                    />
                  </div>
                  {/* product info */}
                  <div className='space-y-2'>
                    <h4 className='font-medium text-lg'>{cartItem.name}</h4>
                    <p className='inline-block dirham-symbol'>
                      {cartItem.qty} x &#xea; {formatAmount(cartItem.price)}
                    </p>{' '}
                    ={' '}
                    <p className='inline-block dirham-symbol'>
                      &#xea; {(cartItem.qty * cartItem.price) / 100}
                    </p>
                    <div className='flex -space-x-px rtl:space-x-reverse'>
                      <Button
                        className='rounded-none first:rounded-s-md last:rounded-e-md border-gray-400 focus-visible:z-10 cursor-pointer'
                        variant='outline'
                        size='icon'
                        aria-label='Downvote'
                        onClick={() => removeFromCart(cartItem.id)}
                      >
                        <ChevronDownIcon size={16} aria-hidden='true' />
                      </Button>
                      <span className='flex items-center border border-gray-400 px-3 text-base font-medium'>
                        {cartItem.qty >= 0 ? cartItem.qty : 0}
                      </span>
                      <Button
                        className='rounded-none first:rounded-s-md last:rounded-e-md border-gray-400 focus-visible:z-10 cursor-pointer'
                        variant='outline'
                        size='icon'
                        aria-label='Upvote'
                        onClick={() => addToCart({ ...cartItem, qty: 1 })}
                      >
                        <ChevronUpIcon size={16} aria-hidden='true' />
                      </Button>
                    </div>
                  </div>
                </div>
                <Separator className='my-4' />
              </div>
            ))}
          </CardContent>
          {/* <Separator /> */}
          <CardFooter className='px-4'>
            <div className='flex flex-row gap-2 items-center'>
              <span className='text-xl font-bold'>Total:</span>
              <p className='dirham-symbol !text-lg'>&#xea;</p>
              <p className='inline-block text-lg font-bold'>
                {formatAmount(totalItemsPrice)}
              </p>
            </div>
          </CardFooter>
        </Card>
      )}
    </>
  );
};

export default OrderSummary;
