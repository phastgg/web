'use client';

import {IconComponent} from "@/variables/global";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import {IconBrandDiscord, IconBrandGithub, IconMail} from "@tabler/icons-react";

export const DiscordSocial = ({ link }: { link: string }): Social => {
    return { ariaLabel: "Discord", link: link, icon: IconBrandDiscord, className: "hover:border-[#2C3EFF] hover:drop-shadow-[0_0_12px_rgba(132,18,255,0.6)]" };
}

export const GithubSocial = ({ link }: { link: string }): Social => {
    return { ariaLabel: "Github", link: link, icon: IconBrandGithub, className: "hover:border-[#2C3EFF] hover:drop-shadow-[0_0_12px_rgba(132,18,255,0.6)]" };
}

export const MailSocial = ({ link }: { link: string }): Social => {
    return { ariaLabel: "Email", link: link, icon: IconMail, className: "hover:border-[#2C3EFF] hover:drop-shadow-[0_0_12px_rgba(132,18,255,0.6)]" };
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
        <>
            <Link href={props.social.link}>
                <div
                    ref={ref}
                    style={{opacity: 0}}
                    className={`py-6 px-8 flex items-center justify-center rounded-lg border-charcoal border-2 bg-neutral-950 shadow-sm hover:shadow-[#8412FF] hover:-translate-y-2 transition-all duration-500 group hover:scale-110 ${props.social.className}`}
                    key={props.key}
                    aria-label={props.social.ariaLabel}
                >
                    <props.social.icon size={32} className="transition-transform duration-300 group-hover:scale-125" />
                </div>
            </Link>
        </>
    );
}