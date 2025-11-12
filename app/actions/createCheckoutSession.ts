'use server';

import { stripe } from '@/lib/stripe';
import { CartItem } from 'type';

const creatCheckoutSession = async (cartItems: CartItem[]) => {
  const line_items = cartItems.map((cartItem) => ({
    quantity: cartItem.qty,
    price_data: {
      currency: 'aed',
      product_data: { name: cartItem.name },
      unit_amount: cartItem.price,
    },
  }));

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    line_items: line_items,
    success_url: `${
      process.env.NODE_ENV === 'production'
        ? process.env.NEXT_PUBLIC_PROD_URL
        : process.env.NEXT_PUBLIC_DEV_URL
    }/success`,
    cancel_url: `${
      process.env.NODE_ENV === 'production'
        ? process.env.NEXT_PUBLIC_PROD_URL
        : process.env.NEXT_PUBLIC_DEV_URL
    }/checkout`,
  });

  return { redirect: session.url };
};

export default creatCheckoutSession;
