import LoadingIcon from '@/components/LoadingIcon';

export default function Loading() {
    return (
        <section className='flex-grow w-full flex justify-center items-center'>
            <LoadingIcon delay={200} />
        </section>
    );
}
