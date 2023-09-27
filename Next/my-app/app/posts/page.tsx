import PostThumbnail from '@/components/PostThumbnail';
import { getPosts } from '@/services/posts';
import Post from '@/types/Post';

export default async function Posts() {
    const posts: Post[] = await getPosts();
    const columns: number[] = [1, 2, 3, 4];
    const postPerColumn: number = Math.ceil(posts.length / columns.length);

    return (
        <section className='flex-grow w-full flex flex-col gap-y-8 px-12 pb-12'>
            <h1 className='w-full flex justify-center items-center text-4xl text-gray-50 font-bold'>Posts</h1>
            <div className='flex-grow w-full flex justify-center gap-x-8'>
                {columns.map((_, index) => {
                    return (
                        <div key={'posts-column-' + index} className='flex flex-col gap-y-8'>
                            {posts.slice(index * (postPerColumn + 1), (index + 1) * postPerColumn).map((post) => {
                                return <PostThumbnail key={post.id} post={post} />;
                            })}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
