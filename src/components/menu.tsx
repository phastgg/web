"use client";

import Image from "next/image";
import {useState, useEffect} from "react";
import {IconBrandDiscord, IconBrandGithub, IconMenu2} from "@tabler/icons-react";
import Link from "next/link";

export default function Menu() {
    const [hamburger, setHamburger] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const logo = "/logo.png"
    const pages: Page[] = [
        { name: "Home", url: "/" },
        { name: "About", url: "/#about" },
        { name: "Contact", url: "/#contact" }
    ]

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="fixed w-full z-[100]" style={{animation: isLoaded ? 'slideInDown 0.6s ease-out forwards' : 'none'}}>
            <div
                className={"backdrop-brightness-[30%] w-full p-6 px-16 flex flex-row justify-between items-center max-md:justify-center max-md:flex-col gap-y-4 transition-all duration-300"}
                style={{backdropFilter: 'blur(10px)'}}>
                <Link href={"/"} className="hover:animate-float">
                    <Image width={120} height={120} src={logo} alt="logo" unoptimized={true} className="transition-transform duration-300 hover:scale-105"/>
                </Link>
                <div className="flex flex-row items-center gap-16 max-md:hidden">
                    <div className="flex flex-row items-center justify-end gap-16">
                        {pages.map((page) => (
                            <div key={page.url}
                                 className="relative hover:text-violet-400 transition-all duration-300 font-poppins text-base font-medium group"
                            >
                                <a href={page.url}>
                                    <p className="relative">{page.name}</p>
                                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8412FF] to-[#a78bfa] group-hover:w-full transition-all duration-300"></div>
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-row items-center gap-8">
                        <Link aria-label={"Repository"} href={"https://github.com/phastgg/web"} target={"_blank"} >
                            <IconBrandGithub size={28} className="hover:text-violet-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(132,18,255,0.6)]" />
                        </Link>
                        <Link aria-label={"Discord"} href={"https://discord.phast.gg/"} target={"_blank"} >
                            <IconBrandDiscord size={28} className="hover:text-violet-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(132,18,255,0.6)]" />
                        </Link>
                    </div>
                </div>
                <div
                    className={"hidden cursor-pointer transition-all duration-500 max-md:flex flex-col items-center "
                        + (hamburger ? "text-blue-300" : "text-white")}
                    onClick={() => setHamburger(!hamburger)}
                >
                    <IconMenu2 size={32} className="transition-transform duration-300" style={{transform: hamburger ? 'rotate(90deg)' : 'rotate(0deg)'}}/>

                    <div
                        className={"text-white flex flex-col items-center gap-1 mt-4 transition-all duration-500 overflow-hidden "
                            + (hamburger ? "h-32" : "h-0")}
                    >
                        {pages.map((page, index) => (
                            <div key={index}
                                 className={"hover:text-[#A9C6DE] transition-all duration-300 font-poppins font-medium "
                                     + (hamburger ? "text-md opacity-100" : "text-zero opacity-0")}
                            >
                                <a href={page.url}>
                                    <p>{page.name}</p>
                                </a>
                            </div>
                        ))}


                        <div className={"flex flex-row items-center gap-4 pt-2 transition-all duration-300 " + (hamburger ? "text-white opacity-100" : "text-transparent opacity-0")}>
                            <Link aria-label={"Repository"} href={"https://github.com/phastgg/web"} target={"_blank"}>
                                <IconBrandGithub size={28} className="hover:text-violet-400 transition-all duration-300 hover:scale-110"/>
                            </Link>
                            <Link aria-label={"Discord"} href={"https://discord.phast.gg/"} target={"_blank"}>
                                <IconBrandDiscord size={28} className="hover:text-violet-400 transition-all duration-300 hover:scale-110"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <hr className={"bg-gradient-to-r from-[#8412FF] to-[#06000A] h-1 w-full border-none"}/>
        </div>
    )
}

interface Page {
    name: string
    url: string
}