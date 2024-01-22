import myPic from "../assets/images/picme.png"
import Card from "../components/Card"
import ContentBox from "../components/ContentBox"
import LanguageChip from "../components/LangaugeChip"
import tsIcon from "../assets/icons/ts.png"
const AboutMe = () => {
    return (
        <div id="aboutme" className="bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-900 via-slate-900 to-gray-900">
            <div className="relative isolate mx-auto max-w-7xl ">
                <h1 className="text-4xl font-bold text-center text-transparent bg-gradient-to-br from-blue-600 to-purple-600" style={{ backgroundClip: "text" }}>
                    About Me
                </h1>
                <div className="px-2 sm:px-8 py-8 grid grid-cols-1 md:grid-cols-2 items-start gap-8 mx-auto md:mr-32">
                    <div className="md:text-left text-gray-400">
                        <div className="rounded-lg p-4 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] hover:bg-slate-900 hover:text-gray-200 transition">
                            <p className="text-justify leading-6">
                                Hello, I'm <span className="font-bold">Fikireab Mekuriaw</span>, a seasoned software engineer dedicated to crafting exceptional digital experiences with over 4 years of experience. My journey began with a love for problem-solving and has evolved into a passion for turning ideas into elegant, efficient, and scalable solutions. I approach software engineering as an art form, blending creativity and precision to build impactful digital experiences. Adapting to the rapid pace of technology is a continuous thrill for me, and I thrive in collaborative environments where diverse perspectives converge to create solutions greater than the sum of their parts. Beyond the code, I love traveling and learning the languages and cultures of others, believing that a well-rounded life enhances creativity.
                            </p>
                        </div>
                        <h1 className="px-8 pt-8 text-2xl font-bold text-transparent bg-gradient-to-br from-blue-600 to-purple-600" style={{ backgroundClip: "text" }}>
                            Skills
                        </h1>
                        <ContentBox>
                            <h4 className="p-2 font-bold">Languages</h4>
                            <div className="flex justify-center items-center gap-4 flex-wrap">
                                <LanguageChip label="TypeScript" icon={tsIcon}/>
                                <LanguageChip label="TypeScript" icon={tsIcon}/>
                                <LanguageChip label="TypeScript" icon={tsIcon}/>
                                <LanguageChip label="TypeScript" icon={tsIcon}/>
                                <LanguageChip label="TypeScript" icon={tsIcon}/>
                                <LanguageChip label="TypeScript" icon={tsIcon}/>
                                <LanguageChip label="TypeScript" icon={tsIcon}/>
                                <LanguageChip label="TypeScript" icon={tsIcon}/>
                                <LanguageChip label="TypeScript" icon={tsIcon}/>
                            </div>
                        </ContentBox>
                        <ul>
                            <li>Languages</li>
                            <li>Frameworks</li>
                            <li>Tools</li>
                            <li>Clouds</li>
                            <li>Methodologies</li>
                        </ul>
                    </div>
                    <div>
                        <Card height={400} width={400}>
                            <img src={myPic} alt="My pic" className="w-96" />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe