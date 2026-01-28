'use client';

import Slider, {Slide} from "@/components/sliders/slider";
import {IconStar, IconStarFilled, IconStarHalfFilled} from "@tabler/icons-react";
import { useEffect, useRef } from "react";

export interface Review {
    author: string;
    rating: number;
    comment?: string;
}

interface ComponentProps {
    reviews: Review[];
    key?: number;
}

export default function ReviewComponent(props: ComponentProps) {
    const slides = props.reviews.map((review) => ReviewToSlide(review));
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
        <div ref={ref} style={{opacity: 0}} className="overflow-x-hidden">
            <Slider
                slides={slides}
                key={props.key}
                className={"w-full"}
                rightButtonClassName="cursor-pointer hover:scale-110 transition-transform duration-300"
                leftButtonClassName="cursor-pointer hover:scale-110 transition-transform duration-300"
                main={{ className: "bg-neutral-950 p-8 border-2 border-zinc-700 rounded-md shadow-sm max-lg:w-full hover:border-violet-600 " +
                        "hover:shadow-[#8412FF] hover:-translate-y-2 transition-all duration-500" }}
            />
        </div>
    );
}

function ReviewToSlide(props: Review): Slide {
    const commentMaxLength = 185;

    return {
        children: (
            <div style={{animation: 'fadeInUp 0.4s ease-out'}}>
                <div className="flex flex-col w-full gap-3 items-start justify-start">
                    <div className="flex flex-row w-full gap-4 items-start max-lg:flex-col">
                        <h1 className="text-white font-bold text-[1.6rem] leading-none transition-colors duration-300 hover:text-violet-300">{props.author}</h1>
                        <div
                            className={"flex flex-row items-end gap-1 self-end mb-[2px] max-lg:items-start max-lg:self-start"}
                            style={{animation: 'popIn 0.5s ease-out 0.2s forwards', opacity: 0}}
                        >
                            {NumberToStars(props.rating)}
                        </div>
                    </div>
                    {!props.comment ? null :
                        (
                            <p className="text-left text-zinc-300 transition-colors duration-300 hover:text-zinc-100" style={{animation: 'fadeInUp 0.4s ease-out 0.1s forwards', opacity: 0}}>
                                &quot;
                                {props.comment?.length >= commentMaxLength ?
                                    props.comment?.substring(0, commentMaxLength) + "..." :
                                    props.comment
                                }
                                &quot;
                            </p>
                        )
                    }
                </div>
            </div>
        )
    };
}

function NumberToStars(stars: number) {
    const iconSize = 18;

    stars = Math.max(0, Math.min(5, stars));
    const icons = [];
    let track = stars;

    for (let i = 0; i < 5; i++) {
        if (track >= 1) {
            icons.push(<IconStarFilled key={i} size={iconSize} className="text-yellow-500 hover:scale-110 transition-transform duration-300" style={{animation: `popIn 0.3s ease-out ${i * 50}ms forwards`, opacity: 0}}/>);
        } else if (track > 0) {
            icons.push(<IconStarHalfFilled key={i} size={iconSize} className="text-yellow-500 hover:scale-110 transition-transform duration-300" style={{animation: `popIn 0.3s ease-out ${i * 50}ms forwards`, opacity: 0}} />);
        } else {
            icons.push(<IconStar key={i} size={iconSize} className="text-gray-500 hover:scale-110 transition-transform duration-300" style={{animation: `popIn 0.3s ease-out ${i * 50}ms forwards`, opacity: 0}} />);
        }
        track -= 1;
    }

    return icons;
}