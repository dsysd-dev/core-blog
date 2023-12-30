// pages/index.js
import React from 'react';
// import styles from './styles.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';
import { siteConfig } from '../config/site';
import { Medal } from 'lucide-react';

const headingFont = localFont({
  src: '../../public/fonts/font.woff2',
});

const textFont = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const LandingPage = () => {
  return (
    // <div className={styles.hero}>
    //   <div className={styles.heroContent}>
    //     <h1 className={styles.heroTitle}>Welcome to dsysd.dev</h1>
    //     <Image
    //       src="/dsysd_logo.png"
    //       alt="Hero Image"
    //       className={styles.heroImage}
    //       width={200}
    //       height={200}
    //     />
    //     <Link href="/posts">
    //       <button className={styles.getStartedButton}>Get Started</button>
    //     </Link>
    //   </div>
    // </div>
    <div className="flex items-center justify-center flex-col h-[100svh]">
      <Image
        src="/dsysd_logo.png"
        alt="Hero Image"
        className="m-8"
        width={100}
        height={100}
      />
      <div
        className={cn(
          'flex items-center justify-center flex-col',
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" /> Welcome No 1 tech channel
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          {siteConfig.name} helps team move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          work forward.
        </div>
      </div>
      <div
        className={cn(
          'text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto',
          textFont.className
        )}
      >
        Collaborate, manage articles, share your knowledge and reach new
        productivity peaks. From high rises to home office, the way your team
        works is unique - accomplish it all with {siteConfig.name}.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/posts"> Get Started </Link>
      </Button>
    </div>
  );
};

export default LandingPage;
