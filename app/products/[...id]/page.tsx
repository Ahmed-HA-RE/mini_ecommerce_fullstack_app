import ProductDetails from '@/components/ProductDetails';
import { stripe } from '@/lib/stripe';

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const product = await stripe.products.retrieve(`${id}`, {
    expand: ['default_price'],
  });

  return <ProductDetails product={JSON.parse(JSON.stringify(product))} />;
};

export default ProductPage;
