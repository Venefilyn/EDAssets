import Link from 'next/link';

export const navItems: {
    href: string;
    label: string;
}[] = [
    {
        href: '/About',
        label: 'About',
    },
    {
        href: '/CharacterPortraits',
        label: 'Character Portraits'
    },
];

const Navbar = () => {
    return (
        <header className='bg-gray-900'>
            <div className='max-w-6xl mx-auto p-6 text-white flex justify-between items-center'>
                <div className='italic font-semibold text-2xl'>
                    {/* Logo */}
                    <Link href='/' key='/'>
                    <a className='p-2 px-3 bg-white bg-opacity-0 hover:bg-opacity-10 rounded'><strong>ED</strong>Assets</a>
                    </Link>
                </div>
                <nav className='hidden md:block'>
                    {navItems.map((link) => (
                        <Link href={link.href} key={link.href}>
                            <a className='p-2 px-3 bg-white bg-opacity-0 hover:bg-opacity-10 rounded'>{link.label}</a>
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
