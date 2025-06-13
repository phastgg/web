"use client";

import React, {ReactNode, useState} from "react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import {motion, AnimatePresence} from "framer-motion";

export interface Slide {
    children: ReactNode;
}

interface SliderProps {
    rightButtonClassName?: string;
    leftButtonClassName?: string;
    className?: string;
    slides: Slide[];
}

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 300 : -300,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        x: direction > 0 ? -300 : 300,
        opacity: 0,
    }),
};

export default function Slider(props: SliderProps) {
    const slides = props.slides;
    const [[currentIndex, direction], setState] = useState<[number, number]>([0, 0]);

    const paginate = (dir: number) => {
        setState([
            (currentIndex + dir + slides.length) % slides.length,
            -dir,
        ]);
    };

    const previousButton = (
        <button onClick={() => paginate(-1)} aria-label="Previous slide" className={`${props.leftButtonClassName}`}>
            <IconArrowLeft size={32}/>
        </button>
    );

    const nextButton = (
        <button onClick={() => paginate(1)} aria-label="Next slide" className={`${props.rightButtonClassName}`}>
            <IconArrowRight size={32}/>
        </button>
    );

    return (
        <div className="flex items-center justify-between space-x-4 p-4 min-h-56 max-lg:flex-col max-lg:gap-8">
            <div className="max-lg:flex flex-row justify-between hidden w-full">
                {previousButton}
                {nextButton}
            </div>
            <div className="max-lg:hidden block">
                {previousButton}
            </div>

            <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{duration: 0.4}}
                    className={`${props.className}`}
                    layout
                >
                    {slides[currentIndex].children}
                </motion.div>
            </AnimatePresence>

            <div className="max-lg:hidden block">
                {nextButton}
            </div>
        </div>
    );
};