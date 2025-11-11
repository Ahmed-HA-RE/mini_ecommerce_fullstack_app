import { stripe } from './lib/stripe';
import Hero from './components/Hero';

const HomePage = async () => {
  const products = await stripe.products.list({
    limit: 5,
    expand: ['data.default_price'],
  });

  return (
    <>
      <Hero products={products} />
    </>
  );
};

export default HomePage;
