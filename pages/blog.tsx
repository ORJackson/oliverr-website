import Thumbnail from '../components/Thumbnail';
import type { NextPage, GetStaticProps } from 'next'
import { IPost } from "../types/post";
import Link from 'next/link'
import { getAllPosts } from "../utils/mdxUtils";

// props type
type Props = {
  posts: [IPost]
}

// component render function
const Blog: NextPage<Props> = ({ posts }: Props) => {
  return (
    <div >
        {/* <div className="pt-6 md:pt-20 max-w-2xl mx-auto mb-16 px-2"> */}
        <div className="pt-6 md:pt-20 max-w-2xl mx-auto mb-16 px-2">
       
            <h1 className="mb-6 text-4xl md:text-6xl font-semibold tracking-wide">Articles</h1>

            <div className="space-y-12">
                {posts.map((post) => (
                <div key={post.slug}>
                  <h2 className="text-2xl font-bold mb-4">
                    <Link href={`/posts/${post.slug}`}>
                        <a>{post.title}</a>
                    </Link>
                    </h2>
                    <div className="mb-4">
                    <Thumbnail
                        slug={post.slug}
                        title={post.title}
                        src={post.thumbnail}
                    />
                    </div>

                    

                    <p>{post.description}</p>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Blog;

// get posts from serverside at build time
export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts([
    'title',
    'slug',
    'date',
    'description',
    'thumbnail'
  ]);

  // return the posts props
  return { props: { posts } }
}