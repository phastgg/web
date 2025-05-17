import Image from "next/image";

export default function Menu() {
    const logo = "/logo.png"
    const pages: Page[] = [
        { name: "Home", url: "/" },
        { name: "About", url: "/about" },
        { name: "Contact", url: "/contact" }
    ]

    return (
        <>
            <Build logo={logo} pages={pages} additionalCss={"fixed"} />
            <Build logo={logo} pages={pages} additionalCss={"invisible"} />
            <hr className={"bg-gradient-to-r from-[#8412FF] to-[#06000A] h-1 w-full fixed border-none"} />
        </>
    )
}

interface Page {
    name: string
    url: string
}

interface BuildProps {
    logo: string
    pages: Page[]
    additionalCss: string | undefined
}

function Build(props: BuildProps) {
    return (
        <div className={"backdrop-brightness-[30%] w-full p-6 pl-16 pr-16 flex flex-row " + props.additionalCss}>
            <div className="w-1/2 flex flex-row items-center">
                <a href={"/"}>
                    <Image width={120} height={200} src={props.logo} alt="logo"/>
                </a>
            </div>
            <div className="w-1/2 flex flex-row items-center justify-end gap-16">
                {props.pages.map((page) => (
                    <div key={page.url}
                         className="hover:text-[#A9C6DE] transition-all duration-[350ms] font-poppins text-md font-medium"
                    >
                        <a href={page.url}>
                            <p>{page.name}</p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}