import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import { destructureImageComponent, destructureSingleType } from '../../utils/app';

const Header = ({ nav, localepages }) => {
    const [active, setActive] = useState(false);
    const { links } = destructureSingleType(nav);
    const handleClick = () => setActive(!active);

    return (
        <header className={`py-3 lg:py-5 px-5 lg:px-20 
        flex justify-between items-center fixed w-full top-0 z-50 bg-light`}>
            <Image src={`/images/logo-dark.png`} width={55} height={55}
                alt={`My logo but with light background and dark font`} />
            <nav className={`text-white text-lg tracking-widest flex 
            gap-4 lg:gap-20 relative items-center bg-transparent`}>
                <div className={`block lg:hidden`}>
                    <input className={`menu-btn hidden`}
                        type="checkbox" id="menu-btn" onClick={handleClick} />
                    <label className={`relative select-none cursor-pointer 
                    flex justify-center items-center rounded-xl
                    w-11 h-11 p-2.5 border border-dark`}
                        htmlFor="menu-btn">
                        <span className={`bg-dark h-[1.75px] relative 
                        transition-all w-6 after:bg-dark after:block 
                        after:h-full after:absolute after:transition-all 
                        after:w-full ${active ? `rotate-45 after:-rotate-90 
                        after:top-[0.5px] bottom-[0px]` 
                        : `after:top-[8px] bottom-[2.5px]`}`} />
                    </label>
                </div>
                <ul className={`absolute bg-light top-16 right-0 w-64 text-base
                shadow-2xl lg:shadow-none rounded-lg transition-all ease-linear z-50 max-h-min
                lg:static lg:flex lg:rounded-none lg:w-auto lg:gap-14 
                items-center ${active ? `max-h-96` : `max-h-0`}`}>
                    {
                        links.map((link, index) => {
                            const { href, text } = link;
                            const isLast = index === links.length - 1;

                            return (
                                <li key={index} className={`bg-transparent z-50`}>
                                    <Link href={href}>
                                        <a className={`w-full transition-all lg:block
                                        py-3 px-8 lg:py-0 lg:px-0 border-theme 
                                        ease-linear lg:border-none relative 
                                        after:transition-all after:ease-linear
                                        after:h-0 after:w-0 after:hidden after:lg:inline
                                        hover:text-theme hover:after:h-1 
                                        hover:after:w-1 hover:after:rounded-full 
                                        hover:after:bg-theme hover:after:absolute 
                                        hover:after:left-1/2 font-semibold
                                        hover:after:top-8 bg-transparent
                                        ${active ? `block` : `hidden`}
                                        ${isLast ? `border-none` : `border-b`}`}>
                                            {text}
                                        </a>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className={`flex items-center bg-transparent`}>
                    {
                        localepages.map((localepage, i) => {
                            const { locale_link, href, locale } = localepage;
                            const { name, flag } =
                                destructureSingleType(locale_link);
                            const { url } = destructureImageComponent(flag);

                            return (
                                <li key={i}>
                                    <Link href={href} locale={locale}>
                                        <a className={`p-3 relative before:ease-linear 
                                    uppercase sm:p-4 before:absolute 
                                    before:top-0 before:left-0 transition-all 
                                    ease-linear hover:shadow-zero before:origin-left
                                    before:bottom-0 before:right-0 
                                    before:-z-10 before:transition-all
                                    before:scale-x-0 hover:before:scale-x-100 z-10 
                                    text-sm sm:text-base w-[42px] h-[42px] 
                                    sm:px-4 font-semibold tracking-wide drop-shadow-2xl 
                                    flex justify-center items-center sm:flex mt-0`}>
                                            <Image src={url} layout={`fill`} alt={name}
                                                objectFit={`contain`} />
                                        </a>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header