"use client"; // This is a client component 👈🏽
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Article, Close, School, Storefront, Verified } from '@mui/icons-material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function BusinessNavbar() {
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
        <header className={`   fixed text-black  bg-white py-2   w-full z-50 transition-all   ease-in-out  duration-200 ${isScrolled ? " shadow-md" : "     "}  `}>
            <div className="container mx-auto w-full max-w-screen-xl  xl:px-0 px-4      flex justify-between ">
                <div className="items-center flex-shrink-0 flex lg:px-0   py-2 ">
                    <div className=" items-center flex-row space-x-2 flex">

                        <Link
                            href={'/'}>
                            <img src="standylogo.png" alt="Standy Logo" height={30} width={30} className="rounded-full" />
                        </Link>

                        <p

                            className='  mb-[-12px]	 tracking-wide text-standy-pink    font-din-condensed text-4xl'>
                            BUSINESS
                        </p>

                    </div>
                </div>
                <div className="items-center    space-x-8 flex-shrink-0 hidden  lg:flex">

                    <Link rel="noopener noreferrer" href="/blog" className="  transition duration-200 ease-in-out hover:text-standy-pink  ">
                        Blog
                    </Link>


                    <Link rel="noopener noreferrer" href="/creators" className="hover:text-standy-pink  transition duration-200 ease-in-out   ">
                        Creators
                    </Link>
                    <Link rel="noopener noreferrer" href="/universities" className="hover:text-standy-pink  transition duration-200 ease-in-out   ">
                        Universities
                    </Link>
                    <Link rel="noopener noreferrer" href="/business" className="hover:text-standy-pink  transition duration-200 ease-in-out   ">
                        Business
                    </Link>

                    <div className=" border-l-2 h-6 border-black rounded-lg"></div>
                    <a
                        className="   px-5 py-2 rounded-lg flex flex-row transition duration-300 ease-in-out bg-standy-pink  text-white hover:bg-standy-dark-pink       "
                        href="http://business.standyroutes.com"

                    >
                        Başlayalım
                    </a>
                </div>

                <div className='items-center flex lg:flex lg:hidden gap-2 flex-row'>
                    <a
                        className="   px-5 py-2 rounded-lg flex flex-row transition duration-300 ease-in-out bg-standy-pink  text-white hover:bg-standy-dark-pink       "
                        href="http://business.standyroutes.com"

                    >
                        Başlayalım
                    </a>
                    {isMenuOpen ? <button onClick={toggleMenu} className=" ">
                        <Close></Close>

                    </button> : <button onClick={toggleMenu} className="  ">
                        <MenuIcon></MenuIcon>

                    </button>}


                </div>
                {isMenuOpen && (
                    <div className="absolute top-full h-screen      left-0 w-full bg-standy-black  ease-in-out  duration-200 shadow-lg lg:hidden">
                        {/* Duplicate your menu here for mobile */}
                        <ul>

                            <Link onClick={() => setIsMenuOpen(false)} href="/blog">
                                <li className="text-white flex flex-row items-center justify-between px-4 py-5 hover:text-black hover:bg-white">

                                    <div className='space-x-2 flex flex-row'>

                                        <Article></Article>
                                        <p>Blog</p>
                                    </div>
                                    <ArrowForwardIcon></ArrowForwardIcon>
                                </li>

                            </Link>
                            <Link onClick={() => setIsMenuOpen(false)} href="/creators">
                                <li className="text-white flex flex-row items-center justify-between px-4 py-5 hover:text-black hover:bg-white">

                                    <div className='space-x-2 flex flex-row'>

                                        <Verified></Verified>
                                        <p >Creators</p>

                                    </div>
                                    <ArrowForwardIcon></ArrowForwardIcon>
                                </li>

                            </Link>
                            <Link onClick={() => setIsMenuOpen(false)} href="/universities">
                                <li className="text-white flex flex-row items-center justify-between px-4 py-5 hover:text-black hover:bg-white">

                                    <div className='space-x-2 flex flex-row'>

                                        <School></School>
                                        <p >Universities</p>
                                    </div>
                                    <ArrowForwardIcon></ArrowForwardIcon>
                                </li>

                            </Link>
                            <Link onClick={() => setIsMenuOpen(false)} href="/business">
                                <li className="text-white flex flex-row items-center justify-between px-4 py-5 hover:text-black hover:bg-white">

                                    <div className='space-x-2 flex flex-row'>

                                        <Storefront></Storefront>
                                        <p >Business</p>
                                    </div>
                                    <ArrowForwardIcon></ArrowForwardIcon>
                                </li>

                            </Link>



                        </ul>


                    </div>
                )}
            </div>
        </header>
    );
}

export default BusinessNavbar;