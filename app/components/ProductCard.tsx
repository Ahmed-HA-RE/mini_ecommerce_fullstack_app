import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from './ui/button';
import Image from 'next/image';
import Stripe from 'stripe';
import Link from 'next/link';

const ProductCard = ({ product }: { product: Stripe.Product }) => {
  const price = product.default_price as Stripe.Price;
  return (
    <Card className='mx-auto pt-0 border-gray-200 shadow-md w-full'>
      <CardContent className='px-0 rounded-t-xl overflow-hidden'>
        <Link
          className='hover:scale-110 block transition'
          href={`/products/${product.id}`}
        >
          <Image
            src={product.images[0]}
            alt={product.name}
            width={0}
            height={0}
            sizes='100vw'
            className='aspect-video h-62 w-full rounded-t-xl object-cover'
          />
        </Link>
      </CardContent>
      <CardHeader>
        <CardTitle className='text-2xl'>{product.name}</CardTitle>
        <CardDescription className='line-clamp-2'>
          {product.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className='dirham-symbol inline-block !text-xl'>&#xea; </p>
        <p className='inline-block !text-xl ml-1 font-medium'>
          {price && price.unit_amount && price.unit_amount / 100}
        </p>
      </CardContent>
      <CardFooter>
        <Button className='w-full' asChild variant={'default'}>
          <Link href={`/products/${product.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
