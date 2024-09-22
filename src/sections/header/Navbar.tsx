import React, { useState } from 'react';

import { NavItems } from './NavItems';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex justify-between items-center py-5 mx-auto c-space'>
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors" data-testid="main-link">
                        Eng.Bassem
                    </a>
                    <button onClick={toggleMenu} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex' aria-label="Toggle menu" data-testid="mobile-sidebar-button">
                        <img src={ isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className='w-6 h-6' />
                    </button>
                    <nav className='sm:flex hidden' data-testid="desktop-nav">
                        <NavItems />
                    </nav>
                </div>
                <div className={`nav-sidebar ${isOpen ? 'max-h-screen': 'max-h-0'}`}>
                    <nav className="p-5" data-testid="mobile-sidebar-nav">
                        <NavItems />
                    </nav>
                </div>
            </div>
        </header>
    );
}