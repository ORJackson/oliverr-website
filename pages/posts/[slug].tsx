import { serialize } from 'next-mdx-remote/serialize';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useEffect } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { useMdxComponentsContext } from '../../context/mdxContext';
import Thumbnail from '../../components/Thumbnail';
import { IPost } from '../../types/post';
import { getPost, getAllPosts } from '../../utils/mdxUtils';
// import Prerequisites from '../../components/Prerequisites';
import { ParsedUrlQuery } from 'querystring';
// import Stacks from '../../components/Stacks';

// props type
type Props = {
    source: MDXRemoteSerializeResult,
    frontMatter: Omit<IPost, 'slug'>;
}

// // components to render
// const components = {
//     Prerequisites,
//     Stacks,
// }

const PostPage: React.FC<Props> = ({ source, frontMatter }: Props) => {

    return (
       <div >

{/* <div className="pt-6 md:pt-20 max-w-2xl mx-auto mb-16 px-2"> */}
            <article className="  max-w-4xl m-auto prose md:prose-lg prose-p:text-gray-900 dark:prose-p:text-gray-100 dark:prose-invert prose-gray mb-16 ">
                
                <h1 className="mb-6 text-4xl md:text-4xl sm:text-4xl font-semibold tracking-wide py-6 ">{frontMatter.title}</h1>
                <p>{frontMatter.description}</p>
                <div className="mb-4">
                    <Thumbnail title={frontMatter.title} src={frontMatter.thumbnail} />
                </div>

            

                

                
                <MDXRemote {...source} />
            </article>
        </div>
    )
}

export default PostPage;

interface Iparams extends ParsedUrlQuery {
    slug: string
}

export const getStaticProps: GetStaticProps = async (context) => {

    const { slug } = context.params as Iparams;
    // get the slug
    const { content, data } = getPost(slug);
    // serialize the data on the server side
    const mdxSource = await serialize(content, { scope: data });
    return {
        props: {
            source: mdxSource,
            frontMatter: data
        }
    }
}

export const getStaticPaths: GetStaticPaths = () => {
    //only get the slug from posts 
    const posts = getAllPosts(['slug']);

    // map through to return post paths
    const paths = posts.map((post) => ({
        params: {
            slug: post.slug
        }
    }));

    return {
        paths,
        fallback: false
    }
}