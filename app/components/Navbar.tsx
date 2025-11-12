'use client';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Avatar, AvatarFallback } from './ui/avatar';
import { ShoppingCartIcon } from 'lucide-react';
import { Badge } from './ui/badge';

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/checkout', label: 'Checkout' },
];

const Navbar = () => {
  const isActive = usePathname();
  const [openPopOver, setOpenPopOver] = useState(false);

  return (
    <nav className='border-b border-b-gray-200 px-4 md:px-6'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex h-16 items-center justify-between'>
          {/* Mobile menu trigger */}
          <Popover open={openPopOver} onOpenChange={setOpenPopOver}>
            <PopoverTrigger asChild>
              <Button
                className='group size-8 md:hidden cursor-pointer'
                variant='ghost'
                size='icon'
              >
                <svg
                  className='pointer-events-none'
                  width={16}
                  height={16}
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4 12L20 12'
                    className='origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]'
                  />
                  <path
                    d='M4 12H20'
                    className='origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45'
                  />
                  <path
                    d='M4 12H20'
                    className='origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]'
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align='start' className='w-36 p-0 md:hidden'>
              <div className='max-w-none *:w-full'>
                <ul className='flex flex-col gap-0'>
                  {navigationLinks.map((link, index) => (
                    <li
                      key={index}
                      className={cn(
                        'w-full',
                        'hover:bg-gray-200',
                        index === 0 && 'rounded-tl-sm rounded-tr-sm ',
                        index === navigationLinks.length - 1 &&
                          'rounded-bl-sm rounded-br-sm '
                      )}
                      onClick={() => setOpenPopOver(!openPopOver)}
                    >
                      <Link
                        className=' pl-2 py-2 w-full inline-block'
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </PopoverContent>
          </Popover>
          {/* Main nav */}
          <div className='flex flex-1 md:flex-none items-center ml-1 md:ml-0'>
            <Link
              href='/'
              className='text-primary text-lg hover:text-primary/90 font-bold tracking-wider'
            >
              MiniMart
            </Link>
          </div>
          {/* Navigation menu */}
          <div className='max-md:hidden'>
            <ul className=' flex flex-row items-center justify-center gap-2'>
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={cn(
                      'p-2',
                      'text-sm',
                      'text-black',
                      'hover:text-white',
                      'hover:bg-black',
                      'transition',
                      'rounded-md',
                      isActive === link.href && 'text-white bg-black'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Right side */}
          <div className='relative w-fit'>
            <Link href='/cart'>
              <Avatar className='size-9 rounded-sm'>
                <AvatarFallback className='rounded-sm bg-0'>
                  <ShoppingCartIcon className='size-6' />
                </AvatarFallback>
              </Avatar>
              <Badge className='absolute -top-1 right-0 h-5 min-w-5 rounded-full px-1 tabular-nums'>
                8
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
