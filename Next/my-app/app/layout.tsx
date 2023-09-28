import '../styles/globals.css';
import { Poppins } from 'next/font/google';
import Navbar from '../components/Navbar';

const font = Poppins({
    weight: ['200', '300', '400', '500', '600', '700'],
    subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <head>
                <title>Homepage</title>
            </head>
            <body className={'w-full min-h-screen flex flex-col ' + font.className}>
                <header className='w-full h-[100px] flex items-center px-12'>
                    <div className='relative w-[300px]'>
                        <h1 style={{ WebkitTextFillColor: 'transparent' }} className='w-auto text-2xl md:text-6xl text-opacity-50 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text italic font-bold select-none'>
                            NEXT 13
                        </h1>
                        <h1 style={{ WebkitTextFillColor: 'transparent' }} className='w-auto absolute top-0 left-0 text-2xl md:text-6xl text-opacity-50 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text italic font-bold select-none blur-md'>
                            NEXT 13
                        </h1>
                    </div>
                    <Navbar />
                </header>
                {children}
            </body>
        </html>
    );
}
