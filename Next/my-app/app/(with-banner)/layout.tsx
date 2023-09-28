declare global {
    namespace JSX {
        interface IntrinsicElements {
            marquee: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}

export default function Layout({ children }: { children: JSX.Element }) {
    return (
        <>
            <div className='w-full'>
                <marquee className='text-purple-500 text-lg font-semibold'>Alvaro Navas developed this page</marquee>
            </div>
            {children}
        </>
    );
}
