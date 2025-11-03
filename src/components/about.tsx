'use client';

import {IconComponent} from "@/variables/global";
import {useEffect, useRef} from "react";

export interface AboutUsHighlight {
    icon: IconComponent;
    title: string;
    description: string;
}

interface ComponentProps {
    highlight: AboutUsHighlight;
    key?: number;
}

export default function AboutComponent(props: ComponentProps) {
    const highlight = props.highlight;
    const key = props.key;
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    if (entry.target instanceof HTMLElement) {
                        entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                    }
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
        <div key={key}
             ref={ref}
             style={{opacity: 0}}
             className="w-full xl:w-1/4 bg-neutral-950 border-2 border-zinc-700 rounded-md py-8 xl:p-4 xl:py-4 hover:border-violet-600 shadow-sm hover:shadow-[#8412FF] hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex justify-center xl:justify-start items-start">
                <div className="hidden xl:block group-hover:scale-110 transition-transform duration-300">
                    <highlight.icon size={28} className="transition-all duration-300 group-hover:text-violet-400" />
                </div>

                <div className="flex-1 flex items-center justify-center gap-2">
                    <div className="block xl:hidden group-hover:scale-110 transition-transform duration-300">
                        <highlight.icon size={28} className="transition-all duration-300 group-hover:text-violet-400"/>
                    </div>

                    <h1 className="text-lg font-inter font-bold text-center text-zinc-100 transition-all duration-300 group-hover:text-violet-300">
                        {highlight.title}
                    </h1>
                </div>
            </div>

            <div className="pl-4 pr-4 pt">
                <p className="font-poppins text-sm mt-4 text-zinc-300 transition-colors duration-300 group-hover:text-zinc-100">{highlight.description}</p>
            </div>
        </div>
    );
}