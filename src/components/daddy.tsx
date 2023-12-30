import Link from 'next/link';
import { PostMetadata } from '@/components/PostMetadata';
import getPostMetadata from '@/components/getPostMetadata';
import PostPreview from '@/components/PostPreview';
import PageWrapper from '@/components/page-wrapper';
import Header from '@/components/header';
import HeaderMobile from '@/components/header-mobile';
import MarginWidthWrapper from '@/components/margin-width-wrapper';
import SideNav from '@/components/side-nav';
import { CommandMenu } from '@/components/command-menu';

// export default function PageWrapper({ children }: { children: React.ReactNode }) {
//     return (
//         <div className="flex flex-col pt-2 px-4 space-y-2 bg-zinc-100 flex-grow pb-4">
//             {children}
//         </div>
//     );
// }

const Daddy = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <main className="flex-1">
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <SideNav />
          <div className="container flex h-14 max-w-screen-2xl items-center">
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
              <div className="w-full flex-1 md:w-auto md:flex-none">
                <CommandMenu />
              </div>
            </div>
          </div>
        </header>
        <MarginWidthWrapper>
          {/* <Header />
          <HeaderMobile /> */}
          <PageWrapper>{children}</PageWrapper>
        </MarginWidthWrapper>
      </main>
    </div>
  );
};

export default Daddy;
