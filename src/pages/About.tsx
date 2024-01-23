import myPic from "../assets/images/picme.png"
import { aboutme } from "../data/data"
const AboutMe = () => {
    return (
        <div id="aboutme" className="bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-900 via-slate-900 to-gray-900 py-16">
            <div className="relative isolate mx-auto max-w-7xl ">
                <h1 className="text-4xl font-bold text-center text-transparent bg-gradient-to-br from-blue-600 to-purple-600 pb-8" style={{ backgroundClip: "text" }}>
                    About Me
                </h1>
                <div className="px-2 sm:px-8 py-8 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-7 content-center items-start gap-8 mx-auto md:mr-48">
                    <div className="md:text-left text-gray-400 md:col-span-3 lg:col-span-4 h-full">
                        <div className="rounded-lg p-4 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] hover:bg-slate-900 hover:text-gray-200">
                            <p className="text-justify leading-6">
                                {aboutme}
                            </p>
                        </div>
                    </div>
                    <div className="img-container max-w-xl md:col-span-2 lg:col-span-3 rouded-full bg-gray-800 flex justify-center group">
                        <img src={myPic} alt="My pic" className="group-hover:scale-105 transform transition all duration-500"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe