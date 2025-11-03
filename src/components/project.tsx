'use client';

import React, {JSX, useEffect, useRef} from "react"
import {
    IconBrandDiscord,
    IconBrandGithub
} from "@tabler/icons-react";
import Link from "next/link"

export const ProjectDiscordIcon = ({ link }: { link: string }): ProjectSocialLink => {
    return { icon: <IconBrandDiscord />, link, className: "bg-[#5865F2] hover:bg-[#2C3EFF] hover:shadow-[#6161ff] hover:scale-110 transition-transform duration-300" }
}

export const ProjectGithubIcon = ({ link }: { link: string }): ProjectSocialLink => {
    return { icon: <IconBrandGithub color={"#06000A"} />, link, className: "bg-[#f7f7f7] hover:bg-[#d0d0d0] hover:shadow-[#d0d0d0] hover:scale-110 transition-transform duration-300" }
}

export interface Project {
    name: string;
    description: string;
    image: string;
    links: ProjectSocialLink[];
}

interface ProjectSocialLink {
    icon: JSX.Element
    link: string
    className: string
}

interface ComponentProps {
    project: Project;
    key: number;
}

const descriptionCharacterLimit = 162;
export default function ProjectComponent(props: ComponentProps) {
    const project = props.project;
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
        <div
            key={key}
            ref={ref}
            style={{opacity: 0}}
            className={"flex flex-col p-8 bg-neutral-950 rounded-md border-2 border-zinc-700 hover:border-violet-600 shadow-sm " +
                "hover:shadow-[#8412FF] hover:-translate-y-2 z-50 transition-all duration-500 group"}
        >
            <h1 className="font-poppins font-bold text-[1.5rem] text-center pb-2 transition-colors duration-300 group-hover:text-violet-300">{project.name}</h1>
            <p className="text-left transition-colors duration-300 group-hover:text-zinc-100">
                {project.description.length > descriptionCharacterLimit ?
                    project.description.substring(0, descriptionCharacterLimit) + "..." :
                    project.description
                }
            </p>
            <div className="mt-auto">
                {!project.links ? null : (
                    <div className="py-2 mt-4 w-full flex flex-row items-center rounded-md gap-2">
                        {project.links.map((link, index) => (
                            <div key={index} style={{animation: `popIn 0.5s ease-out ${index * 100}ms forwards`, opacity: 0}}>
                                <Link href={link.link} target={"_blank"}>
                                    <div
                                        className={`rounded-sm p-2 shadow-[0_0_10px_var(--tw-shadow-color)] hover:text-white transition-all duration-500 ${link.className}`}>
                                        {link.icon}
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}