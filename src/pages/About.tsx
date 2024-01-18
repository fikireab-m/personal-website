import myPic from "../assets/images/picme.png"
const AboutMe = () => {
    return (
        <div id="aboutme" className="bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-900 via-slate-900 to-gray-900 lg:overflow-hidden lg:h-screen">
            <div className="relative isolate px-6 lg:px-8 mx-auto max-w-7xl ">
                <h1 className="text-4xl font-bold text-center text-transparent bg-gradient-to-br from-blue-600 to-purple-600" style={{ backgroundClip: "text" }}>
                    About Me
                </h1>
                <div className="px-8 py-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8 mx-auto">

                    <div className="text-justify md:text-left text-white">
                        <p className=" leading-7">
                            Hello there! I'm <strong>Fikireab Mekuriaw</strong>, a passionate and innovative software engineer dedicated to crafting exceptional digital experiences. With a strong foundation in full-stack development and a commitment to continuous learning, I thrive on turning ideas into reality through clean, efficient, and scalable code.
                        </p>
                        <h1 className="px-8 pt-8 text-2xl font-bold text-transparent bg-gradient-to-br from-blue-600 to-purple-600" style={{ backgroundClip: "text" }}>
                            Skills
                        </h1>
                        <ul>
                            <li>Languages</li>
                            <li>Frameworks</li>
                            <li>Tools</li>
                            <li>Clouds</li>
                            <li>Methodologies</li>
                        </ul>
                    </div>
                    <div className="col-span-1" >
                        <div className="img-container w-96 h-96">
                            <img src={myPic} alt="My pic" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe