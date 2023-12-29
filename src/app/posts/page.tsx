import Link from "next/link";
import { PostMetadata } from "@/components/PostMetadata";
import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";
import PageWrapper from '@/components/page-wrapper';
import Header from '@/components/header';
import HeaderMobile from '@/components/header-mobile';
import MarginWidthWrapper from '@/components/margin-width-wrapper';
import SideNav from '@/components/side-nav';
import Daddy from "@/components/daddy";
// import { useRouter } from "next/navigation";
// import { useParams } from 'next/navigation'

const HomePage = () => {
  const postMetadata: PostMetadata[] = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>;
};


// const X = ({ children }: { children: React.ReactNode }) => {
const X = () => {
  // const params = useParams();
  // console.log(params);
  return (
    <Daddy>
      <HomePage />
    </Daddy>
  )
}

export default X;