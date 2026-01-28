'use client';

import Image from "next/image";
import Link from "next/link";
import {IconHeart, IconLocation, IconPhone} from "@tabler/icons-react";
import { useEffect, useRef } from "react";

export default function Footer() {
    const exploreMap = [
        { name: "About", url: "/#about" },
        { name: "Projects", url: "/#projects" },
        { name: "Reviews", url: "/#reviews" },
        { name: "Contact", url: "/#contact" },
    ]

    const ref = useRef<HTMLElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <footer ref={ref} style={{animation: hasAnimated ? 'fadeInUp 0.6s ease-out forwards' : 'none'}}>
            <hr className={"bg-gradient-to-r from-[#8412FF] to-[#06000A] h-1 w-full border-none"}/>
            <div className="w-full bg-neutral-950 py-6">
                <div className="py-8 px-16 max-[500px]:px-2">
                    <div className="flex flex-row max-lg:flex-col gap-y-8">
                        <div className="flex flex-col justify-center items-start px-12 w-1/3 max-lg:w-full max-lg:items-center max-lg:justify-center group">
                            <Link href={"/"} className="hover:animate-float">
                                <Image src={"/logo.png"} alt={"logo"} width={200} height={150} unoptimized={true} className="transition-transform duration-300 group-hover:scale-105" />
                            </Link>
                            <p className="mt-2 text-sm text-neutral-400 text-center transition-colors duration-300 group-hover:text-neutral-300">
                                Building purposeful, public-facing tools and experiences.
                            </p>
                        </div>
                        <div className="flex flex-row w-2/3 max-lg:w-full max-lg:items-center justify-center max-[500px]:flex-col gap-y-8">
                            <div className="flex flex-col justify-start items-center px-12 gap-2">
                                <div className="flex flex-row gap-2 text-lg font-bold font-poppins text-white mb-2 transition-colors duration-300 hover:text-violet-400 group">
                                    <IconLocation size={28} className="transition-transform duration-300 group-hover:scale-110"/>
                                    <h3>Explore</h3>
                                </div>
                                <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm text-neutral-200">
                                    {exploreMap.map((item, index) => (
                                        <Link href={item.url}
                                              className={"w-min hover:text-violet-400 transition-all duration-300 relative group"}
                                              key={index}
                                        >
                                            {item.name}
                                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8412FF] to-[#a78bfa] group-hover:w-full transition-all duration-300"></div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col justify-start items-center px-12 gap-2">
                                <div className="flex flex-row gap-2 text-lg font-bold font-poppins text-white mb-2 transition-colors duration-300 hover:text-violet-400 group">
                                    <IconPhone size={28} className="transition-transform duration-300 group-hover:scale-110"/>
                                    <h3>Contact</h3>
                                </div>
                                <div className="flex flex-col gap-1 text-sm text-neutral-200 px-9 max-[500px]:text-center">
                                    <p className="transition-colors duration-300 group-hover:text-neutral-100">Have a project in mind or just want to say hi?</p>
                                    <a
                                        href="mailto:phast@phast.gg"
                                        className="text-sm text-white hover:text-violet-400 transition-all duration-300"
                                    >
                                        phast@phast.gg
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="flex flex-row justify-center items-center gap-16 p-8 pb-0 text-base text-zinc-400 w-full max-sm:flex-col gap-y-2">
                    <div className="flex flex-row justify-center items-center gap-1 group">
                        <p className="transition-colors duration-300 group-hover:text-zinc-300">Crafted with</p>
                        <IconHeart size={20} color={"#e11d48"} className="hover:animate-heartbeat"/>
                        <p className="transition-colors duration-300 group-hover:text-zinc-300">by Phast team</p>
                    </div>
                    <div className="flex flex-row items-center gap-1">
                        <p>&copy; {new Date().getFullYear()} Phast. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

