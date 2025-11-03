import {IconComponent} from "@/variables/global";
import Link from "next/link";
import React from "react";
import {IconBrandDiscord, IconBrandGithub, IconMail} from "@tabler/icons-react";

export const DiscordSocial = ({ link }: { link: string }): Social => {
    return { ariaLabel: "Discord", link: link, icon: IconBrandDiscord, className: "hover:border-[#2C3EFF]" };
}

export const GithubSocial = ({ link }: { link: string }): Social => {
    return { ariaLabel: "Github", link: link, icon: IconBrandGithub, className: "hover:border-[#2C3EFF]" };
}

export const MailSocial = ({ link }: { link: string }): Social => {
    return { ariaLabel: "Email", link: link, icon: IconMail, className: "hover:border-[#2C3EFF]" };
}

export interface Social {
    ariaLabel?: string;
    className?: string;
    link: string;
    icon: IconComponent;
}

interface ComponentProps {
    key?: number;
    social: Social;
}

export default function SocialComponent(props: ComponentProps) {
    return (
        <>
            <Link href={props.social.link}>
                <div
                    className={`py-6 px-8 flex items-center justify-center rounded-lg border-charcoal border-2 bg-neutral-950 shadow-sm hover:shadow-[#8412FF] hover:-translate-y-2 transition-all duration-500 ${props.social.className}`}
                    key={props.key}
                    aria-label={props.social.ariaLabel}
                >
                    <props.social.icon size={32} />
                </div>
            </Link>
        </>
    );
}