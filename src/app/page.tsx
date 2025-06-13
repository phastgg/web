import Menu from "@/components/menu";
import {
    IconContract
} from "@tabler/icons-react";
import AboutComponent from "@/components/about";
import ProjectComponent from "@/components/project";
import {ButtonScroll} from "@/components/scrolling/scroll";
import {aboutUsHighlights, projects, reviews, socials} from "@/variables/global";
import ReviewComponent from "@/components/review";
import SocialComponent from "@/components/contacts";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <div className="overflow-x-hidden">
            <Menu/>
            <div className="container mx-auto p-16 pt-20 max-[425px]:px-4 max-[32rem]:overflow-scroll-y">
                <section id="main" className="p-32 pt-48 font-inter text-center flex flex-col items-center w-full max-sm:p-16">
                    <div className="font-lexend-deca font-semibold text-center">
                        <h1 className="text-8xl bg-clip-text text-[#8412FF] max">we</h1>
                        <h1 className="text-6xl">make your <span
                            className="underline-offset-8 underline decoration-[#8412FF]">dreams</span>
                        </h1>
                    </div>
                    <p className="text-[1.2rem] p-4 w-[32rem] font-poppins font-medium text-gray-500 max-sm:text-base max-sm:max-w-[24rem]">
                        A passionate team delivering top-tier quality — in public projects and commissions alike.
                    </p>
                    <div className="pt-40 pb-44 text-center font-poppins font-medium text-xl">
                        <ButtonScroll tagId={"about"}
                                      className={"p-4 border-2 rounded-lg border-[#ECE6FF] cursor-pointer transition-all " +
                                          "duration-400 hover:bg-[#ECE6FF] hover:text-[#06000A] flex flex-row gap-3 items-center justify-center " +
                                          "max-sm:w-64"}
                        >
                            <IconContract/>
                            <p>Contact us</p>
                        </ButtonScroll>
                    </div>
                </section>
                <section id="about" className="p-8 text-center flex flex-col gap-4 mb-32">
                    <h1 className="font-inter text-4xl font-bold">Who are we?</h1>
                    <div className="w-4/6 mx-auto mt-4">
                        <p className="font-poppins text-[1.1rem]">We are a passionate team dedicated to
                            turning ideas into impactful digital experiences. With a
                            blend of creativity and technical expertise, we craft websites and appss that truly resonate
                            with your vision.
                        </p>
                    </div>
                    <div className="py-8 flex flex-col xl:flex-row gap-8">
                        {aboutUsHighlights.map((highlight, i) => (
                            <AboutComponent highlight={highlight} key={i} />
                        ))}
                    </div>
                </section>
                <section id="projects" className="p-8 text-center flex flex-col gap-4 mb-32">
                    <h1 className="font-inter text-4xl font-bold">Our projects</h1>
                    <div className="w-4/6 mx-auto mt-4">
                        <p className="font-poppins text-[1.1rem]">
                            A collection of public-facing work developed under the Phast umbrella —
                            from tools and libraries to platforms and digital experiences.
                            Each project reflects our dedication to thoughtful creation,
                            open sharing, and long-term impact.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 auto-rows-fr gap-4 py-8">
                        {projects.map((project, index) => (
                            <ProjectComponent project={project} key={index} />
                        ))}
                    </div>
                </section>
                <section id="reviews" className="p-8 text-center flex flex-col gap-4 mb-28">
                    <h1 className="font-inter text-4xl font-bold">Reviews</h1>
                    <div className="w-4/6 mx-auto mt-4">
                        <p className="font-poppins text-[1.1rem]">
                            If you’re still wondering what it’s like to work with us, don’t just take our word for it.
                            Here’s what others have said after partnering with Phast — real feedback from real customers.
                        </p>
                    </div>
                    <div className="py-8">
                        <ReviewComponent reviews={reviews} />
                    </div>
                </section>
                <section id="contact" className="p-8 text-center flex flex-col gap-4">
                    <h1 className="font-inter text-4xl font-bold">Contact</h1>
                    <div className="w-4/6 mx-auto mt-4">
                        <p className="font-poppins text-[1.1rem]">
                            What are you waiting for? Contact us on sites below.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 auto-rows-fr gap-4 py-8 px-64 max-xl:px-32 max-lg:px-16 max-md:px-4">
                        {socials.map((social, index) => (
                            <SocialComponent key={index} social={social} />
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}