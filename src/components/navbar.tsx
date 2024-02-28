"use client"; // This is a client component 👈🏽
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Footer from './footer';
/* eslint-disable @next/next/no-img-element */

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <header className={`fixed py-1 backdrop-blur-lg       text-standy-white w-full z-50 transition-all   ease-in-out  duration-200 ${isScrolled ? "border-b border-standy-white" : "    "}  `}>
            <div className="container mx-auto w-full max-w-screen-xl px-4       flex justify-between ">
                <div className="items-center flex-shrink-0 flex lg:px-0   py-2 ">
                    <Link
                        href={'/'}
                        className='tracking-wide hover:text-standy-light-pink transition-all   ease-in-out  duration-300  mb-[-7px]  font-din-condensed text-4xl'>
                        STANDY
                    </Link>
                </div>
                <div className="items-center space-x-3 flex-shrink-0 hidden lg:flex">



                    <Link rel="noopener noreferrer" href="/about" className="flex items-center inline-block px-2 py-0.5 rounded-md space-x-2 flex flex-row transition duration-200 ease-in-out hover:text-standy-black hover:bg-standy-light-pink ">
                        Hakkımızda
                    </Link>

                    <Link rel="noopener noreferrer" href="/business" className="flex items-center inline-block px-2 py-0.5 rounded-md space-x-2 flex flex-row transition duration-200 ease-in-out hover:text-standy-black hover:bg-standy-light-pink ">
                        Business
                    </Link>
                    <Link rel="noopener noreferrer" href="https://www.linkedin.com/company/standy/jobs/" className="flex items-center inline-block px-2 py-0.5 rounded-md space-x-2 flex flex-row transition duration-200 ease-in-out hover:text-standy-black hover:bg-standy-light-pink ">

                        Kariyer
                    </Link>


                </div>

                <div className='items-center flex lg:flex lg:hidden gap-2   flex-row'>

                    {isMenuOpen ? <button onClick={toggleMenu} className=" e inline-block px-2 py-0.5 rounded-lg space-x-2 flex flex-row transition duration-300 ease-in-out   hover:text-standy-black hover:bg-standy-light-pink ">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="  ">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                    </button> : <button onClick={toggleMenu} className=" e inline-block px-2 py-0.5  rounded-lg space-x-2 flex flex-row transition duration-300 ease-in-out  hover:text-standy-black hover:bg-standy-light-pink ">
                        Menü
                    </button>}


                </div>
                {isMenuOpen && (
                    <div className="absolute top-full h-screen      left-0 w-full bg-standy-black  ease-in-out  duration-200 shadow-lg lg:hidden">
                        {/* Duplicate your menu here for mobile */}
                        <ul>

                            <Link onClick={() => setIsMenuOpen(false)} href="/about">
                                <li className="text-white flex flex-row items-center justify-between px-5 py-5 hover:text-black hover:bg-white">
                                    <p className="margin-right: 10px;">Hakkımızda</p>
                                    <div className='rotate-90'>
                                        <svg width="20" height="20" className='rotate-180' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M19 12L12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </li>

                            </Link>
                            <Link onClick={() => setIsMenuOpen(false)} href="/business">
                                <li className="text-white flex flex-row items-center justify-between px-5 py-5 hover:text-black hover:bg-white">
                                    <p className="margin-right: 10px;">Business</p>
                                    <div className='rotate-90'>
                                        <svg width="20" height="20" className='rotate-180' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M19 12L12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </li>

                            </Link>
                            <Link onClick={() => setIsMenuOpen(false)} href="https://www.linkedin.com/company/standy/jobs/">
                                <li className="text-white flex flex-row items-center justify-between px-5 py-5 hover:text-black hover:bg-white">
                                    <p className="margin-right: 10px;">Kariyer</p>
                                    <div className='rotate-90'>
                                        <svg width="20" height="20" className='rotate-180' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M19 12L12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </li>
                            </Link>

                        </ul>

                    </div>
                )}
            </div>
        </header>
    );
}

export default Navbar;