import {ReactNode, RefObject, useEffect} from "react";

interface ButtonScrollProps {
    scrollToElement: RefObject<HTMLElement | null>;
    children: ReactNode;
    className: string | null;
}

export function ButtonScroll(props: ButtonScrollProps) {
    const refElement = props.scrollToElement;

    const handleScroll = () => {
        if (refElement.current == null) {
            console.log("null")
            return
        }

        refElement.current.scrollIntoView({behavior: "smooth", block: "center"});
    };

    return (
        <button onClick={handleScroll} className={props.className ? props.className : ""}>
            {props.children}
        </button>
    );
}

interface TextScrollProps {
    text: string;
    tagId: string;
    className: string | null;
}

export function TextScroll(props: TextScrollProps) {
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

        htmlElement.scrollIntoView({behavior: "smooth", block: "center"});
    };

    return (
        <a onClick={handleScroll} className={props.className ? props.className : ""}>
            <p>
                {props.text}
            </p>
        </a>
    );
}