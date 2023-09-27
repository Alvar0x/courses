import Link from 'next/link';

const LINKS: Link[] = [
    { label: 'Home', route: '/', twColor: 'text-pink-500' },
    { label: 'About', route: '/about', twColor: 'text-red-400' },
    { label: 'Posts', route: '/posts', twColor: 'text-orange-500' },
];

export default function Navbar() {
    return (
        <nav>
            <ul className='flex gap-x-6'>
                {LINKS.map((link) => (
                    <li key={link.route}>
                        <Link href={link.route} className={'md:text-lg font-semibold tracking-wider transition-colors duration-200 hover:text-opacity-75 ' + link.twColor}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
