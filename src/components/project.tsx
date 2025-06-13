import React, {JSX} from "react"
import {
    IconBrandDiscord,
    IconBrandGithub
} from "@tabler/icons-react";
import Link from "next/link"

export const ProjectDiscordIcon = ({ link }: { link: string }): ProjectSocialLink => {
    return { icon: <IconBrandDiscord />, link, className: "bg-[#5865F2] hover:bg-[#2C3EFF] hover:shadow-[#6161ff]" }
}

export const ProjectGithubIcon = ({ link }: { link: string }): ProjectSocialLink => {
    return { icon: <IconBrandGithub color={"#06000A"} />, link, className: "bg-[#f7f7f7] hover:bg-[#d0d0d0] hover:shadow-[#d0d0d0]" }
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

    return (
        <div
            key={key}
            className={"flex flex-col p-8 bg-neutral-950 rounded-md border-2 border-zinc-700 hover:border-violet-600 shadow-sm " +
                "hover:shadow-[#8412FF] hover:-translate-y-2 z-50 transition-all duration-500"}
        >
            <h1 className="font-poppins font-bold text-[1.5rem] text-center pb-2">{project.name}</h1>
            <p className="text-left">
                {project.description.length > descriptionCharacterLimit ?
                    project.description.substring(0, descriptionCharacterLimit) + "..." :
                    project.description
                }
            </p>
            <div className="mt-auto">
                {!project.links ? null : (
                    <div className="py-2 mt-4 w-full flex flex-row items-center rounded-md gap-2">
                        {project.links.map((link, index) => (
                            <div key={index}>
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