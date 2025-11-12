'use client';
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Stripe from 'stripe';
import Image from 'next/image';
import Link from 'next/link';

type CarouselProductsProps = {
  products: Stripe.Product[];
};

const CarouselProducts = ({ products }: CarouselProductsProps) => {
  const plugin = React.useRef(Autoplay({ delay: 4000 }));

  return (
    <section className='mt-10 p-4'>
      <div className='max-w-7xl mx-auto'>
        <Carousel
          plugins={[plugin.current]}
          className='w-full'
          opts={{
            align: 'center',
            loop: true,
          }}
        >
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem key={product.id} className='w-[300px] relative'>
                <Card className=' border-2 border-gray-200 rounded-2xl p-0'>
                  <CardContent className='flex aspect-[16/9] p-0 justify-center h-[500px] rounded-xl relative'>
                    <Link
                      className='w-full hover:opacity-75 transition duration-200 '
                      href={`/products/${product.id}`}
                    >
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        width={0}
                        height={0}
                        sizes='100vw'
                        className='w-full h-full rounded-xl object-cover'
                      />
                    </Link>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default CarouselProducts;
