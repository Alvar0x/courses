import { getPostById } from '@/services/posts';
import Link from 'next/link';
import Image from 'next/image';

export default async function Post({ params, children }: { params: { id: number }; children: JSX.Element }) {
    const post = await getPostById(params.id);

    return (
        <section className='flex-grow w-full flex flex-col justify-center items-center px-12 pb-12'>
            {post && (
                <article className='flex-grow w-[1600px] flex flex-col gap-y-8 px-36 mt-16'>
                    <header className='w-full flex justify-start items-center'>
                        <h1 className='text-4xl text-gray-50 font-bold tracking-wider'>{post.title}</h1>
                    </header>
                    <main className='flex-grow w-full flex justify-center items-start gap-x-24'>
                        <Image src='/post.jpg' width={500} height={500} alt='post' className='rounded-lg' />
                        <div className='flex flex-col gap-y-1'>
                            <h2 className='text-xl font-semibold tracking-wider'>Description</h2>
                            <p className='text-gray-400'>{post.body}</p>
                            <Link href={`/posts/${params.id}/comments`} className='font-semibold text-gray-300'>
                                See comments
                            </Link>
                        </div>
                    </main>
                    <footer>{children}</footer>
                </article>
            )}
        </section>
    );
}
