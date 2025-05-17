"use client";

import {ReactNode, useEffect} from "react";

interface ButtonScrollProps {
    tagId: string
    children: ReactNode
    className: string | null
}

export default function ButtonScroll(props: ButtonScrollProps) {
    let htmlElement: HTMLElement | null = null

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        htmlElement = document.getElementById(props.tagId)
    }, []);

    const handleScroll = () => {
        if (htmlElement == null) {
            console.log("null")
            return
        }

        htmlElement.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <button onClick={handleScroll} className={props.className ? props.className : ""}>
            {props.children}
        </button>
    );
}