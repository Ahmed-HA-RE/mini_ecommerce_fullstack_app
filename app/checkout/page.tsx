import OrderSummary from '@/components/OrderSummary';

const CheckoutPage = () => {
  return (
    <section className='p-6 mt-7'>
      <div className='max-w-7xl mx-auto flex flex-col items-center justify-center'>
        <h1 className='text-3xl md:text-4xl font-bold mb-4'>Checkout</h1>
        <OrderSummary />
      </div>
    </section>
  );
};

export default CheckoutPage;
