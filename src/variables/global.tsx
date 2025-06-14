import {Project, ProjectGithubIcon} from "@/components/project";
import {
    IconContract,
    IconGhostOff,
    IconHeartBolt,
    IconProgressBolt,
    IconProps
} from "@tabler/icons-react";
import {AboutUsHighlight} from "@/components/about";
import {Review} from "@/components/review";
import {DiscordSocial, GithubSocial, MailSocial, Social} from "@/components/contacts";
import {ComponentType} from "react";

export type IconComponent = ComponentType<IconProps>;

export const aboutUsHighlights: AboutUsHighlight[] = [
    {
        icon: IconContract,
        title: "Revision Policy",
        description: "Not fully satisfied? No worries — you can request up to two free revisions to ensure it meets your needs"
    },
    {
        icon: IconHeartBolt,
        title: "Experienced Team",
        description: "We're group of individuals who are skilled in specific fields, and we'll make sure, your order will be perfect"
    },
    {
        icon: IconGhostOff,
        title: "Transparent Process",
        description: "Clear communication, defined milestones, and regular updates keep you in the loop from day one"
    },
    {
        icon: IconProgressBolt,
        title: "Client Empowerment",
        description: "We build tools and systems you can actually use, putting you in control of your own success"
    },
];

export const projects: Project[] = [
    {
        name: "Helios",
        description: "Helios is a lightweight, high-performance toolkit packed with essential Minecraft utilities — built to streamline your gameplay, modding, and server management with the power of the sun.",
        image: "",
        links: [
            ProjectGithubIcon({ link: "https://github.com/phastgg/helios" }),
        ]
    },
    {
        name: "Docs",
        description: "Comprehensive documentation for all Phast projects, providing clear and structured information to support development, integration, and maintenance.",
        image: "",
        links: [
            ProjectGithubIcon({ link: "https://github.com/phastgg/docs" }),
        ]
    },
    {
        name: "Web",
        description: "The official website for Phast, developed using the Next.js framework to provide a fast, reliable, and efficient web experience while maintaining a clean and scalable architecture.",
        image: "",
        links: [
            ProjectGithubIcon({ link: "https://github.com/phastgg/web" }),
        ]
    },
];

export const reviews: Review[] = [
    {
        author: "PashMash",
        rating: 5,
        comment: "Jakush’s Coin Plugin is a top-tier economy solution, offering excellent performance and quality. It’s lightweight, optimized, and runs smoothly without lag, even on busy servers.",
    },
    {
        author: "Arciale",
        rating: 4.5,
        comment: "Also if at the beginning he forgot my project because he had other one at the end the result was fantastic and he is avaible for question/support.",
    }
];

export const socials: Social[] = [
    DiscordSocial({ link: "https://discord.phast.gg/" }),
    GithubSocial({ link: "https://github.com/phastgg/docs" }),
    MailSocial({ link: "mailto:phast@phast.gg" })
];