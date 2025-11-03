import {IconComponent} from "@/variables/global";

export interface AboutUsHighlight {
    icon: IconComponent;
    title: string;
    description: string;
}

interface ComponentProps {
    highlight: AboutUsHighlight;
    key?: number;
}

export default function AboutComponent(props: ComponentProps) {
    const highlight = props.highlight;
    const key = props.key;

    return (
        <div key={key}
             className="w-full xl:w-1/4 bg-neutral-950 border-2 border-zinc-700 rounded-md py-8 xl:p-4 xl:py-4 hover:border-violet-600 shadow-sm hover:shadow-[#8412FF] hover:-translate-y-2 transition-all duration-500">
            <div className="flex justify-center xl:justify-start items-start">
                <div className="hidden xl:block">
                    <highlight.icon size={28} />
                </div>

                <div className="flex-1 flex items-center justify-center gap-2">
                    <div className="block xl:hidden">
                        <highlight.icon size={28}/>
                    </div>

                    <h1 className="text-lg font-inter font-bold text-center text-zinc-100">
                        {highlight.title}
                    </h1>
                </div>
            </div>

            <div className="pl-4 pr-4 pt">
                <p className="font-poppins text-sm mt-4 text-zinc-300">{highlight.description}</p>
            </div>
        </div>
    );
}