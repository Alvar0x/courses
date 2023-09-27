import Loading from '@/components/Loading';
import { getPostById } from '@/services/posts';
import Image from 'next/image';

export default async function Post({ params }: { params: { id: number } }) {
    const post = await getPostById(params.id);

    return (
        <section className='flex-grow w-full flex flex-col justify-center items-center'>
            {post && (
                <article className='flex-grow flex flex-col gap-y-8 px-36 mt-16'>
                    <header className='w-full flex justify-start items-center'>
                        <h1 className='text-4xl text-gray-50 font-bold tracking-wider'>{post.title}</h1>
                    </header>
                    <main className='flex-grow w-full flex justify-center items-start gap-x-24'>
                        <Image src='/post.jpg' width={500} height={500} alt='post' className='rounded-lg' />
                        <div className='flex flex-col gap-y-1'>
                            <h2 className='text-xl font-semibold tracking-wider'>Description</h2>
                            <p className='max-w-[400px] text-gray-400'>{post.body}</p>
                        </div>
                    </main>
                </article>
            )}
        </section>
    );
}
