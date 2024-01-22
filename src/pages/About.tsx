import myPic from "../assets/images/picme.png"
const AboutMe = () => {
    return (
        <div id="aboutme" className="bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-900 via-slate-900 to-gray-900">
            <div className="relative isolate mx-auto max-w-7xl ">
                <h1 className="text-4xl font-bold text-center text-transparent bg-gradient-to-br from-blue-600 to-purple-600" style={{ backgroundClip: "text" }}>
                    About Me
                </h1>
                <div className="px-2 sm:px-8 py-8 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-7 content-center items-start gap-8 mx-auto md:mr-48">
                    <div className="md:text-left text-gray-400 md:col-span-3 lg:col-span-4 h-full">
                        <div className="rounded-lg p-4 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] hover:bg-slate-900 hover:text-gray-200">
                            <p className="text-justify leading-6">
                                Hello, I'm <span className="font-bold">Fikireab Mekuriaw</span>, a seasoned software engineer dedicated to crafting exceptional digital experiences with over 4 years of experience. My journey began with a love for problem-solving and has evolved into a passion for turning ideas into elegant, efficient, and scalable solutions. I approach software engineering as an art form, blending creativity and precision to build impactful digital experiences. Adapting to the rapid pace of technology is a continuous thrill for me, and I thrive in collaborative environments where diverse perspectives converge to create solutions greater than the sum of their parts. Beyond the code, I love traveling and learning the languages and cultures of others, believing that a well-rounded life enhances creativity.
                            </p>
                        </div>
                    </div>
                    <div className="img-container max-w-xl md:col-span-2 lg:col-span-3 rouded-full bg-gray-800 flex justify-center">
                        <img src={myPic} alt="My pic" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe