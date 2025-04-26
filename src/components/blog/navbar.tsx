"use client"; // This is a client component 👈🏽
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Article, Close, Handshake, HandshakeSharp, MonetizationOnOutlined, School, Storefront, Verified } from '@mui/icons-material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function BlogNavbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the state of the menu
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (
        <header className={`fixed text-black bg-white py-2 w-full lg:border-none border-b z-50 transition-all ease-in-out duration-200 ${isScrolled ? "" : ""}`}>
            <div className="container mx-auto w-full max-w-screen-xl xl:px-0 px-4 flex justify-between">
                <div className="flex space-x-4 items-center justify-center flex-shrink-0 lg:px-0 py-2">
                    <div className="flex items-center justify-center flex-row space-x-1">
                        <Link href={'/'}>
                            <img src="/standylogo.png" alt="Standy Logo" height={28} width={28} className="   rounded-full" />
                        </Link>
                        <Link href={'/'} className="font-condensed uppercase mb-1  font-semibold text-standy-pink text-4xl">
                            Standy
                        </Link>
                    </div>

                    <div className='space-x-1 items-center  flex-shrink-0 hidden lg:flex'>
                        <Link rel="noopener noreferrer" href="/" className="transition duration-200 ease-in-out hover:bg-standy-dark-pink text-white bg-standy-pink rounded-full px-3 py-2">
                            Kullanıcı
                        </Link>
                        <Link rel="noopener noreferrer" href="/business" className="transition duration-200 ease-in-out hover:bg-gray-100   rounded-full px-3 py-2">
                            İşletme
                        </Link>
                    </div>
                </div>

                <div className="items-center  flex-shrink-0 hidden lg:flex">
                  
                    <Link rel="noopener noreferrer" href="/sponsors" className="transition duration-200 ease-in-out hover:bg-gray-100 rounded-full px-3 py-1 ">
                        Sponsorluk
                    </Link>
                    <Link rel="noopener noreferrer" href="/universities" className="transition duration-200 ease-in-out hover:bg-gray-100 rounded-full px-3 py-1 ">
                        Üniversiteler
                    </Link>
                    <Link rel="noopener noreferrer" href="/blog" className="transition duration-200 ease-in-out hover:bg-gray-100 rounded-full px-3 py-1 ">
                        Blog
                    </Link>
                   
                </div>

                {/* Mobile Menu */}
                <div className='items-center flex lg:flex lg:hidden gap-2 flex-row'>
                   

                    {isMenuOpen ? (
                        <button onClick={toggleMenu}>
                            <Close />
                        </button>
                    ) : (
                        <button onClick={toggleMenu}>
                            <MenuIcon />
                        </button>
                    )}
                </div>
                {isMenuOpen && (
                    <div className="absolute  top-full h-screen left-0 w-full bg-standy-black ease-in-out duration-200 shadow-lg lg:hidden">
                        <ul>
                            <Link onClick={() => setIsMenuOpen(false)} href="/blog">
                                <li className="  bg-white  border-t flex flex-row items-center justify-between px-4 py-5  ">
                                    <div className='space-x-1 items-center  flex-shrink-0 lg:flex'>
                                        <Link rel="noopener noreferrer" href="/" className="transition duration-200 ease-in-out hover:bg-standy-dark-pink text-white bg-standy-pink rounded-full px-3 py-2">
                                            Kullanıcı
                                        </Link>
                                        <Link rel="noopener noreferrer" href="/business" className="transition duration-200 ease-in-out hover:bg-gray-100   rounded-full px-3 py-2">
                                            İşletme
                                        </Link>
                                    </div>
                                </li>
                            </Link>

 
                            <Link onClick={() => setIsMenuOpen(false)} href="/sponsors">
                                <li className="text-white flex flex-row items-center justify-between px-4 py-5 hover:text-black hover:bg-white">

                                    <div className='space-x-2 flex flex-row'>

                                        <Handshake></Handshake>
                                        <p >Sponsorluk</p>

                                    </div>
                                    <ArrowForwardIcon></ArrowForwardIcon>
                                </li>

                            </Link>

                       
                            <Link onClick={() => setIsMenuOpen(false)} href="/universities">
                                <li className="text-white flex flex-row items-center justify-between px-4 py-5 hover:text-black hover:bg-white">
                                    <div className='space-x-2 flex flex-row'>
                                        <School></School>
                                        <p >Üniversiteler</p>
                                    </div>
                                    <ArrowForwardIcon></ArrowForwardIcon>
                                </li>

                            </Link> <Link onClick={() => setIsMenuOpen(false)} href="/blog">
                                <li className="text-white flex flex-row items-center justify-between px-4 py-5 hover:text-black hover:bg-white">
                                    <div className='space-x-2 flex flex-row'>
                                        <Article />
                                        <p>Blog</p>
                                    </div>
                                    <ArrowForwardIcon />
                                </li>
                            </Link>

                        </ul>
                    </div>
                )}
            </div>
        </header>

    );
}

export default BlogNavbar;