import { BsFront } from "react-icons/bs"
import myPic from "../assets/images/picme.png"
import { aboutme } from "../data/data"
import { IconType } from "react-icons"
import { FaLaptopCode } from "react-icons/fa6"
import { GrSettingsOption } from "react-icons/gr"
import { FaMobileAlt } from "react-icons/fa"

const AboutMe = () => {
    return (
        <div id="aboutme" className="bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-900 via-slate-900 to-gray-900 py-16">
            <div className="relative isolate mx-auto max-w-7xl md:mr-40">
                <h1 className="text-4xl font-bold text-center text-transparent bg-gradient-to-br from-blue-600 to-purple-600 pb-8" style={{ backgroundClip: "text" }}>
                    About Me
                </h1>
                <div className="px-2 sm:px-8 py-8 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-7 content-center items-start gap-8 mx-auto">
                    <div className="md:text-left text-gray-400 md:col-span-3 lg:col-span-4 h-full">
                        <div className="rounded-lg p-4 transform transition all duration-500 hover:text-gray-200">
                            <p className="text-justify leading-7 ">
                                {aboutme}
                            </p>
                        </div>
                    </div>
                    <div className="overflow-hidden max-w-2xl min-w-80 md:col-span-2 lg:col-span-3 rouded-full bg-gray-800 flex justify-center group hover:shadow-[0.5rem_0.5rem_#0B60B0,-0.5rem_-0.5rem_#00BCD4]" style={{
                        borderRadius: "19% 52% 29% 23% / 16% 41% 21% 17%"
                    }}>
                        <img src={myPic} alt="My pic" className="sepia group-hover:scale-105 group-hover:sepia-0 transform transition all duration-500" />
                    </div>
                </div>
                <ServiceCards />
            </div>
        </div>
    )
}

const ServiceCards = () => {
    return (
        <div className="p-4">
            <h1 className="text-4xl font-bold text-center text-transparent bg-gradient-to-br from-blue-600 to-purple-600 pb-8" style={{ backgroundClip: "text" }}>
                What I do
            </h1>
            <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
                <Card
                    title="Front-end Development"
                    subtitle="I create stunning UIs using various technologies"
                    href="#"
                    Icon={FaLaptopCode}
                />
                <Card title="Backend Development" subtitle="I build fast and scalable systems" href="#" Icon={GrSettingsOption} />
                <Card title="Mobile aApplication Development" subtitle="Beautiful cross platform mobile applications for business" href="#" Icon={FaMobileAlt} />
                <Card
                    title="UI/UX Design"
                    subtitle="I create beautful yet simplified user interfaces for your users"
                    href="#"
                    Icon={BsFront}
                />
            </div>
        </div>
    );
};
interface CardProps {
    title: string,
    subtitle: string,
    Icon: IconType,
    href: string
}
const Card = ({ title, subtitle, Icon, href }: CardProps) => {
    return (
        <a
            href={href}
            className="w-full p-4 rounded relative overflow-hidden group bg-gray-800"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

            <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-400 group-hover:text-slate-100 group-hover:rotate-12 transition-transform duration-300" />
            <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
            <h3 className="font-medium text-lg text-gray-400 group-hover:text-white relative z-10 duration-300">
                {title}
            </h3>
            <p className="text-gray-400 group-hover:text-violet-200 relative z-10 duration-300">
                {subtitle}
            </p>
        </a>
    );
};


export default AboutMe