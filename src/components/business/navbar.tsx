"use client"; // This is a client component 👈🏽
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Article, Close, Login, School, Storefront, SupportAgent, Verified } from '@mui/icons-material';
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

        <header className={`fixed text-mimi-pink bg-standy-dark-pink py-2 w-full lg:border-none   z-50 transition-all ease-in-out duration-200 ${isScrolled ? "" : ""}`}>
            <div className="container mx-auto w-full max-w-screen-xl xl:px-0 px-4 flex justify-between">
                <div className="flex space-x-4 items-center justify-center flex-shrink-0 lg:px-0 py-2">
                    <div className="flex items-center justify-center flex-row space-x-1">
                        <img src="standylogo.png" alt="Standy Logo" height={28} width={28} className="   rounded-full" />
                        <div className="font-condensed uppercase mb-1  font-semibold   text-4xl">
                            BUSINESS
                        </div>
                    </div>

                    <div className='space-x-1 items-center  flex-shrink-0 hidden lg:flex'>
                        <Link rel="noopener noreferrer" href="/" className="transition duration-200 ease-in-out   hover:bg-mimi-pink hover:text-standy-black rounded-full px-3 py-2">
                            Kullanıcı
                        </Link>
                        <Link rel="noopener noreferrer" href="/business" className="transition duration-200 ease-in-out   hover:bg-mimi-pink text-standy-black bg-cherry-blossom-pink rounded-full px-3 py-2">
                            İşletme
                        </Link>
                    </div>
                </div>

                <div className="items-center  flex-shrink-0 hidden lg:flex">

                    <Link rel="noopener noreferrer" href="mailto:baha@standyroutes.com"
                        target='_blank'
                        className="transition duration-200 ease-in-out hover:bg-mimi-pink  hover:text-standy-black rounded-full px-3 py-1 ">
                        Destek
                    </Link>
                    <Link rel="noopener noreferrer" href="https://business.standyroutes.com/"
                        target='_blank'
                        className="transition duration-200 ease-in-out hover:bg-mimi-pink  hover:text-standy-black rounded-full px-3 py-1 ">
                        Giriş Yap
                    </Link>
                    <Link
                        href="https://business.standyroutes.com/"
                        target='_blank'
                        className="mx-2 inline-flex px-5 py-2 rounded-full transition duration-300 ease-in-out bg-cherry-blossom-pink text-standy-black hover:bg-mimi-pink"
                    >
                        Başlayalım
                    </Link>
                </div>

                {/* Mobile Menu */}
                <div className='items-center flex lg:flex lg:hidden gap-2 flex-row'>
                    <Link
                        className="mx-2 inline-flex px-5 py-2 rounded-full transition duration-300 ease-in-out bg-cherry-blossom-pink text-standy-black hover:bg-mimi-pink"
                        href="https://business.standyroutes.com/"
                        target='_blank'
                    >
                        Başlayalım
                    </Link>

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
                                        <Link rel="noopener noreferrer" href="/" className="transition duration-200 ease-in-out text-standy-black hover:bg-gray-100 rounded-full px-3 py-2">
                                            Kullanıcı
                                        </Link>
                                        <Link rel="noopener noreferrer" href="/business" className="transition duration-200 ease-in-out hover:bg-standy-dark-pink text-white bg-standy-pink  rounded-full px-3 py-2">
                                            İşletme
                                        </Link>
                                    </div>
                                </li>
                            </Link>


                            <Link onClick={() => setIsMenuOpen(false)} href="mailto:baha@standyroutes.com"
                                target='_blank'>
                                <li className="text-white flex flex-row items-center justify-between px-4 py-5 hover:text-black hover:bg-white">

                                    <div className='space-x-2 flex flex-row'>

                                        <SupportAgent></SupportAgent>
                                        <p >Destek</p>

                                    </div>
                                    <ArrowForwardIcon></ArrowForwardIcon>
                                </li>

                            </Link>

                            <Link onClick={() => setIsMenuOpen(false)} href="https://business.standyroutes.com/"
                                target='_blank'>
                                <li className="text-white flex flex-row items-center justify-between px-4 py-5 hover:text-black hover:bg-white">
                                    <div className='space-x-2 flex flex-row'>
                                        <Login></Login>
                                        <p >Giriş Yap</p>
                                    </div>
                                    <ArrowForwardIcon></ArrowForwardIcon>
                                </li>

                            </Link>

                        </ul>
                    </div>
                )}
            </div>
        </header >
    );
}

export default BusinessNavbar;