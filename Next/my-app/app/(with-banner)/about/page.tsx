import RootLayout from '../layout';

export default function About() {
    return (
        <section className='flex-grow w-full flex flex-col justify-center items-center gap-y-4 px-12 pb-12'>
            <h1 className='text-4xl text-gray-50 font-bold'>About</h1>
            <span className='text-lg font-semibold text-gray-500'>This is a Next 13 course!</span>
        </section>
    );
}
