import ContentBox from "../components/ContentBox"
import LanguageChip from "../components/LangaugeChip"
import reactIcon from "../assets/icons/reactjs.png"
const Expriance = () => {
    return (
        <div id="experiance" className="bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-900 via-slate-900 to-gray-900">
            <div className="relative isolate mx-auto max-w-7xl ">
                <h1 className="text-4xl font-bold text-center text-transparent bg-gradient-to-br from-blue-600 to-purple-600 pb-8" style={{ backgroundClip: "text" }}>
                    Experiances
                </h1>
                <div className="px-2 sm:px-8 pt-2 pb-8 grid grid-cols-1 md:grid-cols-2 content-center items-start gap-8 mx-auto md:mr-32 text-gray-200">

                    <ContentBox>
                        <h4 className="font-bold text-center group-hover:text-sky-500">Chatbot Developer</h4>
                        <div className="text-center p-2 group-hover:text-gray-200">
                            <p className="font-semibold">Adama Science and Technology University</p>
                            <p>Adama, Oromia, Ethiopia</p>
                            <p className="font-thin text-sm">june 20-2021 to Sept 20-2021</p>
                        </div>
                        <p className="text-justify text-sm group-hover:text-gray-200 ">
                            Developed and implemented chatbot solutions using Python,React,ChatterBot and Dialogflow.
                            Applied NLP techniques like tokenization, part-of-speech-tagging, named entity recognition, and other usefull techniques for effective user interaction. Collaborated with cross-functional teams to ensure user-friendly conversational flows. Integrated chatbots with the learnig management system for seamless communication. Conducted testing and debugging, ensuring a smooth user experience. Demonstrated adaptability and commitment to staying updated on evolving technologies.

                        </p>
                        <div className="flex justify-center items-center gap-2 flex-wrap pt-2 px-8">
                            <LanguageChip label="Python" icon={reactIcon} />
                            <LanguageChip label="React js" icon={reactIcon} />
                            <LanguageChip label="ChatterBot" icon={reactIcon} />
                            <LanguageChip label="Dialogue Flow" icon={reactIcon} />
                        </div>
                    </ContentBox>

                    <ContentBox>
                        <h4 className="font-bold text-center group-hover:text-sky-500">Chatbot Developer</h4>
                        <div className="text-center p-2 group-hover:text-gray-200">
                            <p className="font-semibold">Adama Science and Technology University</p>
                            <p>Adama, Oromia, Ethiopia</p>
                            <p className="font-thin text-sm">june 20-2021 to Sept 20-2021</p>
                        </div>
                        <p className="text-justify text-sm group-hover:text-gray-200 ">
                            Developed and implemented chatbot solutions using Python,React,ChatterBot and Dialogflow.
                            Applied NLP techniques like tokenization, part-of-speech-tagging, named entity recognition, and other usefull techniques for effective user interaction. Collaborated with cross-functional teams to ensure user-friendly conversational flows. Integrated chatbots with the learnig management system for seamless communication. Conducted testing and debugging, ensuring a smooth user experience. Demonstrated adaptability and commitment to staying updated on evolving technologies.

                        </p>
                        <div className="flex justify-center items-center gap-2 flex-wrap pt-2 px-8">
                            <LanguageChip label="Python" icon={reactIcon} />
                            <LanguageChip label="React js" icon={reactIcon} />
                            <LanguageChip label="ChatterBot" icon={reactIcon} />
                            <LanguageChip label="Dialogue Flow" icon={reactIcon} />
                        </div>
                    </ContentBox>

                    <ContentBox>
                        <h4 className="font-bold text-center group-hover:text-sky-500">Chatbot Developer</h4>
                        <div className="text-center p-2 group-hover:text-gray-200">
                            <p className="font-semibold">Adama Science and Technology University</p>
                            <p>Adama, Oromia, Ethiopia</p>
                            <p className="font-thin text-sm">june 20-2021 to Sept 20-2021</p>
                        </div>
                        <p className="text-justify text-sm group-hover:text-gray-200 ">
                            Developed and implemented chatbot solutions using Python,React,ChatterBot and Dialogflow.
                            Applied NLP techniques like tokenization, part-of-speech-tagging, named entity recognition, and other usefull techniques for effective user interaction. Collaborated with cross-functional teams to ensure user-friendly conversational flows. Integrated chatbots with the learnig management system for seamless communication. Conducted testing and debugging, ensuring a smooth user experience. Demonstrated adaptability and commitment to staying updated on evolving technologies.

                        </p>
                        <div className="flex justify-center items-center gap-2 flex-wrap pt-2 px-8">
                            <LanguageChip label="Python" icon={reactIcon} />
                            <LanguageChip label="React js" icon={reactIcon} />
                            <LanguageChip label="ChatterBot" icon={reactIcon} />
                            <LanguageChip label="Dialogue Flow" icon={reactIcon} />
                        </div>
                    </ContentBox>

                    <ContentBox>
                        <h4 className="font-bold text-center group-hover:text-sky-500">Chatbot Developer</h4>
                        <div className="text-center p-2 group-hover:text-gray-200">
                            <p className="font-semibold">Adama Science and Technology University</p>
                            <p>Adama, Oromia, Ethiopia</p>
                            <p className="font-thin text-sm">june 20-2021 to Sept 20-2021</p>
                        </div>
                        <p className="text-justify text-sm group-hover:text-gray-200 ">
                            Developed and implemented chatbot solutions using Python,React,ChatterBot and Dialogflow.
                            Applied NLP techniques like tokenization, part-of-speech-tagging, named entity recognition, and other usefull techniques for effective user interaction. Collaborated with cross-functional teams to ensure user-friendly conversational flows. Integrated chatbots with the learnig management system for seamless communication. Conducted testing and debugging, ensuring a smooth user experience. Demonstrated adaptability and commitment to staying updated on evolving technologies.

                        </p>
                        <div className="flex justify-center items-center gap-2 flex-wrap pt-2 px-8">
                            <LanguageChip label="Python" icon={reactIcon} />
                            <LanguageChip label="React js" icon={reactIcon} />
                            <LanguageChip label="ChatterBot" icon={reactIcon} />
                            <LanguageChip label="Dialogue Flow" icon={reactIcon} />
                        </div>
                    </ContentBox>
                </div>
            </div>
        </div>
    )
}

export default Expriance