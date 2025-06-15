import Image from "next/image";
import Link from "next/link";
import {IconHeart, IconLocation, IconPhone} from "@tabler/icons-react";

export default function Footer() {
    const exploreMap = [
        { name: "About", url: "/#about" },
        { name: "Projects", url: "/#projects" },
        { name: "Reviews", url: "/#reviews" },
        { name: "Contact", url: "/#contact" },
    ]

    return (
        <footer>
            <hr className={"bg-gradient-to-r from-[#8412FF] to-[#06000A] h-1 w-full border-none"}/>
            <div className="w-full bg-neutral-950 py-6">
                <div className="py-8 px-16 max-[500px]:px-2">
                    <div className="flex flex-row max-lg:flex-col gap-y-8">
                        <div className="flex flex-col justify-center items-start px-12 w-1/3 max-lg:w-full max-lg:items-center max-lg:justify-center">
                            <Link href={"/"}>
                                <Image src={"/logo.png"} alt={"logo"} width={200} height={150} unoptimized={true} />
                            </Link>
                            <p className="mt-2 text-sm text-neutral-400 text-center">
                                Building purposeful, public-facing tools and experiences.
                            </p>
                        </div>
                        <div className="flex flex-row w-2/3 max-lg:w-full max-lg:items-center justify-center max-[500px]:flex-col gap-y-8">
                            <div className="flex flex-col justify-start items-center px-12 gap-2">
                                <div className="flex flex-row gap-2 text-lg font-bold font-poppins text-white mb-2">
                                    <IconLocation size={28}/>
                                    <h3>Explore</h3>
                                </div>
                                <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm text-neutral-200">
                                    {exploreMap.map((item, index) => (
                                        <Link href={item.url}
                                              className={"w-min hover:text-violet-400 transition-all duration-300"}
                                              key={index}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col justify-start items-center px-12 gap-2">
                                <div className="flex flex-row gap-2 text-lg font-bold font-poppins text-white mb-2">
                                    <IconPhone size={28}/>
                                    <h3>Contact</h3>
                                </div>
                                <div className="flex flex-col gap-1 text-sm text-neutral-200 px-9 max-[500px]:text-center">
                                    <p>Have a project in mind or just want to say hi?</p>
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
                    <div className="flex flex-row justify-center items-center gap-1">
                        <p>Crafted with</p>
                        <IconHeart size={20} color={"#e11d48"}/>
                        <p>by Phast team</p>
                    </div>
                    <div className="flex flex-row items-center gap-1">
                        <p>&copy; {new Date().getFullYear()} Phast. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

