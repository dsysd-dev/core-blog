
import Link from "next/link";
import { PostMetadata } from "@/components/PostMetadata";
import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";
import PageWrapper from '@/components/page-wrapper';
import Header from '@/components/header';
import HeaderMobile from '@/components/header-mobile';
import MarginWidthWrapper from '@/components/margin-width-wrapper';
import SideNav from '@/components/side-nav';

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
            <SideNav />
            <main className="flex-1">
              <MarginWidthWrapper>
                <Header />
                <HeaderMobile />
                
                <PageWrapper>
                  {children}
                </PageWrapper>
  
              </MarginWidthWrapper>
            </main>
          </div>
    )
  }
  
  export default Daddy;