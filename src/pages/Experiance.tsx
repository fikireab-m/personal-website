import ContentBox from "../components/ContentBox"
import LanguageChip from "../components/LangaugeChip"
import { experiences } from "../data/data"
const Expriance = () => {
    return (
        <div id="experiance" className="bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-900 via-slate-900 to-gray-900">
            <div className="relative isolate mx-auto max-w-7xl ">
                <h1 className="text-4xl font-bold text-center text-transparent bg-gradient-to-br from-blue-600 to-purple-600 pb-8" style={{ backgroundClip: "text" }}>
                    Experiances
                </h1>
                <div className="px-2 sm:px-8 pt-2 pb-8 grid grid-cols-1 md:grid-cols-2 content-center items-start gap-8 mx-auto md:mr-32 text-gray-200">
                    {
                        experiences.map((experience, index) => <ContentBox key={index}>
                            <h4 className="font-bold text-center group-hover:text-sky-500">{experience.title}</h4>
                            <div className="text-center p-2 group-hover:text-gray-200">
                                <p className="font-semibold">{experience.company}</p>
                                <p>{experience.location}</p>
                                <p className="font-thin text-sm">june 20-2021 to Sept 20-2021</p>
                            </div>
                            <p className="text-justify text-sm group-hover:text-gray-200 ">
                                {experience.desc}
                            </p>
                            <div className="flex justify-center items-center gap-1 xl:gap-2 flex-wrap pt-2 px-4 xl:px-8">
                                {
                                    experience.techstacks.map((techstack, i) => <LanguageChip key={i} label={techstack.title} icon={techstack.icon} />)
                                }
                            </div>
                        </ContentBox>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Expriance