const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='py-6'>
      <h3 className='text-center text-gray-500'>
        © {year} MiniMart. All rights reserved.
      </h3>
    </div>
  );
};

export default Footer;
