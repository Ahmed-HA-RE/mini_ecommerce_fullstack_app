import Image from 'next/image';
import Stripe from 'stripe';
import { Button } from './ui/button';
import Link from 'next/link';

type HeroProps = {
  products: Stripe.Response<Stripe.ApiList<Stripe.Product>>;
};

const Hero = ({ products }: HeroProps) => {
  return (
    <section className='mt-10'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row gap-y-4'>
          {/* left side */}
          <div className='flex flex-col items-center md:items-start justify-center gap-4 p-4 flex-1/3'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
              Welcome to MiniMart
            </h2>
            <p className='text-gray-500 md:text-lg'>
              Discover the latest products at unbeatable prices.
            </p>
            <Button asChild className='rounded-full px-8'>
              <Link href='/products'>Browse All Products</Link>
            </Button>
          </div>
          {/* right side */}
          <div className='flex-1/4 hidden md:block'>
            <Image
              src={products.data[2].images[0]}
              alt={products.data[0].name}
              width={0}
              height={0}
              sizes='100vw'
              className='w-full md:max-w-xl h-[400px]'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
