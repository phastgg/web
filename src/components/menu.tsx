"use client";

import Image from "next/image";
import {useState} from "react";
import {IconBrandDiscord, IconBrandGithub, IconMenu2} from "@tabler/icons-react";
import Link from "next/link";

export default function Menu() {
    const [hamburger, setHamburger] = useState(false);
    const logo = "/logo.png"
    const pages: Page[] = [
        { name: "Home", url: "/" },
        { name: "About", url: "/#about" },
        { name: "Contact", url: "/#contact" }
    ]

    return (
        <div className="fixed w-full z-[100]">
            <div
                className={"backdrop-brightness-[30%] w-full p-6 px-16 flex flex-row justify-between items-center max-sm:justify-center max-sm:flex-col gap-y-4"}>
                <Link href={"/"}>
                    <Image width={120} height={120} src={logo} alt="logo"/>
                </Link>
                <div className="flex flex-row items-center gap-16 max-sm:hidden">
                    <div className="flex flex-row items-center justify-end gap-16">
                        {pages.map((page) => (
                            <div key={page.url}
                                 className="hover:text-violet-400 transition-all duration-300 font-poppins text-base font-medium"
                            >
                                <a href={page.url}>
                                    <p>{page.name}</p>
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-row items-center gap-8">
                        <Link aria-label={"Repository"} href={"https://github.com/phastgg/web"} target={"_blank"} >
                            <IconBrandGithub size={28} className="hover:text-violet-400 transition-all duration-300" />
                        </Link>
                        <Link aria-label={"Discord"} href={"https://discord.phast.gg/"} target={"_blank"} >
                            <IconBrandDiscord size={28} className="hover:text-violet-400 transition-all duration-300" />
                        </Link>
                    </div>
                </div>
                <div
                    className={"hidden cursor-pointer transition-all duration-500 max-sm:flex flex-col items-center "
                        + (hamburger ? "text-blue-300" : "text-white")}
                    onClick={() => setHamburger(!hamburger)}
                >
                    <IconMenu2 size={32}/>

                    <div
                        className={"text-white flex flex-col items-center gap-1 mt-4 transition-all duration-500 "
                            + (hamburger ? "h-20" : "h-0")}
                    >
                        {pages.map((page, index) => (
                            <div key={index}
                                 className={"hover:text-[#A9C6DE] transition-all duration-300 font-poppins font-medium "
                                     + (hamburger ? "text-md" : "text-zero")}
                            >
                                <a href={page.url}>
                                    <p>{page.name}</p>
                                </a>
                            </div>
                        ))}
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