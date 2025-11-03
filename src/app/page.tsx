"use client";

import Menu from "@/components/menu";
import {
    IconContract
} from "@tabler/icons-react";
import AboutComponent from "@/components/about";
import ProjectComponent from "@/components/project";
import {ButtonScroll} from "@/components/scrolling/scroll";
import {aboutUsHighlights, projects, reviews, socials} from "@/variables/global";
import ReviewComponent from "@/components/review";
import SocialComponent from "@/components/contacts";
import Footer from "@/components/footer";
import {useRef, useEffect, useState} from "react";
import AnimatedSpace from "@/components/background/animated-space";
import Lenis from 'lenis'


export default function Home() {
    const contactRefObject = useRef<HTMLElement | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className="max-[400px]:overflow-x-hidden">
            <Menu/>
            <AnimatedSpace/>
            <div className="container mx-auto p-16 pt-20 max-[425px]:px-4 max-[32rem]:overflow-scroll-y">
                <section id="main" className="p-32 pt-48 font-inter text-center flex flex-col items-center w-full max-sm:p-16">
                    <div className="font-lexend-deca font-semibold text-center" style={{animation: isLoaded ? 'fadeInScale 0.8s ease-out forwards' : 'none'}}>
                        <h1 className="text-8xl bg-clip-text text-[#8412FF] max animate-[glowText_3s_ease-in-out_infinite]">we</h1>
                        <h1 className="text-6xl animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]" style={{opacity: 0}}>make your <span
                            className="underline-offset-8 underline decoration-[#8412FF] hover:decoration-violet-400 transition-colors duration-300">dreams</span>
                        </h1>
                    </div>
                    <p className="text-[1.2rem] p-4 w-[32rem] font-poppins font-medium text-gray-500 max-sm:text-base max-sm:max-w-[24rem] animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]" style={{opacity: 0}}>
                        A passionate team delivering top-tier quality — in public projects and commissions alike.
                    </p>
                    <div className="pt-40 pb-44 text-center font-poppins font-medium text-xl animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]" style={{opacity: 0}}>
                        <ButtonScroll
                            scrollToElement={contactRefObject}
                            className={"p-4 border-2 rounded-lg border-[#ECE6FF] cursor-pointer transition-all " +
                                          "duration-400 hover:bg-[#ECE6FF] hover:text-[#06000A] flex flex-row gap-3 items-center justify-center " +
                                          "max-sm:w-64 hover:shadow-[0_0_20px_rgba(132,18,255,0.6)] hover:scale-105 group"}
                        >
                            <IconContract className="transition-transform duration-300 group-hover:rotate-12"/>
                            <p>Contact us</p>
                        </ButtonScroll>
                    </div>
                </section>
                <section id="about" className="p-8 text-center flex flex-col gap-4 mb-32" style={{animation: 'fadeInUp 0.7s ease-out forwards'}}>
                    <h1 className="font-inter text-4xl font-bold hover:text-violet-300 transition-colors duration-300">Who are we?</h1>
                    <div className="w-4/6 mx-auto mt-4 group">
                        <p className="font-poppins text-[1.1rem] transition-colors duration-300 group-hover:text-zinc-100">We are a passionate team dedicated to
                            turning ideas into impactful digital experiences. With a
                            blend of creativity and technical expertise, we craft websites and apps that truly resonate
                            with your vision.
                        </p>
                    </div>
                    <div className="py-8 flex flex-col xl:flex-row gap-8">
                        {aboutUsHighlights.map((highlight, i) => (
                            <AboutComponent highlight={highlight} key={i} />
                        ))}
                    </div>
                </section>
                <section id="projects" className="p-8 text-center flex flex-col gap-4 mb-32" style={{animation: 'fadeInUp 0.7s ease-out forwards'}}>
                    <h1 className="font-inter text-4xl font-bold hover:text-violet-300 transition-colors duration-300">Our projects</h1>
                    <div className="w-4/6 mx-auto mt-4 group">
                        <p className="font-poppins text-[1.1rem] transition-colors duration-300 group-hover:text-zinc-100">
                            A collection of public-facing work developed under the Phast umbrella —
                            from tools and libraries to platforms and digital experiences.
                            Each project reflects our dedication to thoughtful creation,
                            open sharing, and long-term impact.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 auto-rows-fr gap-4 py-8">
                        {projects.map((project, index) => (
                            <ProjectComponent project={project} key={index} />
                        ))}
                    </div>
                </section>
                <section id="reviews" className="p-8 text-center flex flex-col gap-4 mb-28" style={{animation: 'fadeInUp 0.7s ease-out forwards'}}>
                    <h1 className="font-inter text-4xl font-bold hover:text-violet-300 transition-colors duration-300">Reviews</h1>
                    <div className="w-4/6 mx-auto mt-4 group">
                        <p className="font-poppins text-[1.1rem] transition-colors duration-300 group-hover:text-zinc-100">
                            If you&apos;re still wondering what it&apos;s like to work with us, don&apos;t just take our word for it.
                            Here&apos;s what others have said after partnering with Phast — real feedback from real customers.
                        </p>
                    </div>
                    <div className="py-8">
                        <ReviewComponent reviews={reviews} />
                    </div>
                </section>
                <section id="contact" className="p-8 text-center flex flex-col gap-4" ref={contactRefObject} style={{animation: 'fadeInUp 0.7s ease-out forwards'}}>
                    <h1 className="font-inter text-4xl font-bold hover:text-violet-300 transition-colors duration-300">Contact</h1>
                    <div className="w-4/6 mx-auto mt-4 group">
                        <p className="font-poppins text-[1.1rem] transition-colors duration-300 group-hover:text-zinc-100">
                            What are you waiting for? Contact us on sites below.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 auto-rows-fr gap-4 py-8 px-64 max-xl:px-32 max-lg:px-16 max-md:px-4">
                        {socials.map((social, index) => (
                            <SocialComponent key={index} social={social} />
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}