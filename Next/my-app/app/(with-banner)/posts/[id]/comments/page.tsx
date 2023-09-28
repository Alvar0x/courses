import { getPostComments } from '@/services/posts';
import PostComment from '@/types/PostComment';
import Image from 'next/image';

const waitForResults = async (id: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return await getPostComments(id);
};

export default async function Comments({ params }: { params: { id: number } }) {
    const comments: PostComment[] = await waitForResults(params.id);

    return (
        <div className='flex-grow w-full flex flex-col items-center gap-y-8 px-12 pb-12'>
            <h1 className='text-4xl font-bold text-gray-50'>Comments</h1>
            <div className='flex flex-col gap-y-1'>
                {comments.map((comment, index) => {
                    const isLast: boolean = index === comments.length - 1;
                    return (
                        <>
                            <article key={comment.id} className='w-[1000px] flex flex-col gap-y-2 p-3'>
                                <header className='w-full flex items-center gap-x-3'>
                                    <Image unoptimized src={'https://api.dicebear.com/7.x/pixel-art-neutral/svg?seed=' + comment.email} width={75} height={75} alt={comment.name} className='rounded-lg' />
                                    <div className='flex flex-col'>
                                        <span className='text-gray-300 font-semibold'>{comment.email.split('@')[0]}</span>
                                        <span className='text-sm text-gray-500'>{comment.email}</span>
                                    </div>
                                </header>
                                <main className='w-full'>
                                    <h3 className='text-2xl text-gray-300 font-semibold'>{comment.name}</h3>
                                    <p className='text-gray-400'>{comment.body}</p>
                                </main>
                                <footer className='w-full flex justify-end items-center'></footer>
                            </article>
                            {!isLast && <div className='w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent' />}
                        </>
                    );
                })}
            </div>
        </div>
    );
}
