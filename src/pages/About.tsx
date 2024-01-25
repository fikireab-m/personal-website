import myPic from "../assets/images/picme.png"
import { aboutme } from "../data/data"
const AboutMe = () => {
    return (
        <div id="aboutme" className="bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-900 via-slate-900 to-gray-900 py-16">
            <div className="relative isolate mx-auto max-w-7xl ">
                <h1 className="text-4xl font-bold text-center text-transparent bg-gradient-to-br from-blue-600 to-purple-600 pb-8" style={{ backgroundClip: "text" }}>
                    About Me
                </h1>
                <div className="px-2 sm:px-8 py-8 lg:flex justify-center items-start gap-8 lg:mr-48">
                    <div className="md:max-w-lg xl:max-w-2xl md:text-left text-gray-400 md">
                        <div className="rounded-lg p-4 transform transition all duration-500 hover:text-gray-200">
                            <p className="text-justify md:leading-7">
                                {aboutme}
                            </p>
                        </div>
                    </div>
                    <div className="overflow-hidden max-w-xl md:col-span-2 lg:col-span-3 rouded-full bg-gray-800 flex justify-center group hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4]" style={{
                        borderRadius: "19% 52% 29% 23% / 16% 41% 21% 17%"
                    }}>
                        <img src={myPic} alt="My pic" className="sepia group-hover:scale-105 group-hover:sepia-0 transform transition all duration-500"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe