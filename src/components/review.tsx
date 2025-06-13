import Slider, {Slide} from "@/components/sliders/slider";
import {IconStar, IconStarFilled, IconStarHalfFilled} from "@tabler/icons-react";

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

    return (
        <div className="overflow-x-hidden">
            <Slider
                slides={slides}
                key={props.key}
                className="bg-neutral-950 p-8 border-2 border-zinc-700 rounded-md w-2/4 max-lg:w-full"
                rightButtonClassName="cursor-pointer"
                leftButtonClassName="cursor-pointer"
            />
        </div>
    );
}

function ReviewToSlide(props: Review): Slide {
    const commentMaxLength = 185;

    return {
        children: (
            <div>
                <div className="flex flex-col w-full gap-3 items-start justify-start">
                    <div className="flex flex-row w-full gap-4 items-start max-lg:flex-col">
                        <h1 className="text-white font-bold text-[1.6rem] leading-none">{props.author}</h1>
                        <div
                            className={"flex flex-row items-end gap-1 self-end mb-[2px] max-lg:items-start max-lg:self-start"}
                        >
                            {NumberToStars(props.rating)}
                        </div>
                    </div>
                    {!props.comment ? null :
                        (
                            <p className="text-left text-zinc-300 ">
                                “
                                {props.comment?.length >= commentMaxLength ?
                                    props.comment?.substring(0, commentMaxLength) + "..." :
                                    props.comment
                                }
                                ”
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

    stars = Math.max(0, Math.min(5, stars)); // clamp 0–5
    const icons = [];
    let track = stars;

    for (let i = 0; i < 5; i++) {
        if (track >= 1) {
            icons.push(<IconStarFilled key={i} size={iconSize} className="text-yellow-500"/>);
        } else if (track > 0) {
            icons.push(<IconStarHalfFilled key={i} size={iconSize} className="text-yellow-500" />);
        } else {
            icons.push(<IconStar key={i} size={iconSize} className="text-gray-500" />);
        }
        track -= 1;
    }

    return icons;
}