import Post from '@/types/Post';
import Link from 'next/link';
import LikeButton from './LikeButton';
import FavButton from './FavButton';

export default function PostThumbnail({ post }: { post: Post }) {
    return (
        <div className='relative'>
            <article className='w-[370px] p-4 flex flex-col gap-y-2 rounded-lg bg-black transition-colors duration-200 hover:bg-opacity-90'>
                <header className='w-full'>
                    <Link href={'/posts/' + post.id}>
                        <h1 className='text-xl text-gray-50 font-semibold'>{post.title}</h1>
                    </Link>
                </header>
                <main className='flex flex-col gap-y-3'>
                    <p className='text-gray-400'>{post.body}</p>
                    <div className='flex justify-end items-center gap-x-3'>
                        <FavButton />
                        <LikeButton />
                    </div>
                </main>
            </article>
            <div className='absolute inset-0 rounded-lg filter blur-sm bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 -z-10'></div>
        </div>
    );
}
