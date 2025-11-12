import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const robot = Roboto({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MiniMart Shop Quality Products Online',
  description:
    'Discover and purchase your favorite products at MiniMart. Enjoy a seamless shopping experience with fast checkout and reliable service.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={robot.className} lang='en'>
      <body>
        <div className='flex flex-col min-h-screen'>
          <Navbar />
          <main className='flex-grow'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
