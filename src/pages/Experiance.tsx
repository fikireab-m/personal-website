import ContentBox from "../components/ContentBox"
import LanguageChip from "../components/LangaugeChip"
import tsIcon from "../assets/icons/ts.png"
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
                        <h4 className="p-2 font-bold text-center">Experiance 1</h4>
                        <p className="text-justify">Description</p>
                        <div className="flex justify-center items-center gap-2 flex-wrap">
                            <LanguageChip label="TypeScript" icon={tsIcon} />
                            <LanguageChip label="TypeScript" icon={tsIcon} />
                            <LanguageChip label="TypeScript" icon={tsIcon} />
                            <LanguageChip label="TypeScript" icon={tsIcon} />
                        </div>
                    </ContentBox>
                    <ContentBox>
                        <h4 className="p-2 font-bold text-center">Experiance 2</h4>
                        <p className="text-justify">Description</p>
                        <div className="flex justify-center items-center gap-4 flex-wrap">
                            <LanguageChip label="React js" icon={reactIcon} />
                            <LanguageChip label="React js" icon={reactIcon} />
                            <LanguageChip label="React js" icon={reactIcon} />
                            <LanguageChip label="React js" icon={reactIcon} />
                        </div>
                    </ContentBox>
                    <ContentBox>
                        <h4 className="p-2 font-bold text-center">Experiance 3</h4>
                        <p className="text-justify">Description</p>
                        <div className="flex justify-center items-center gap-2 flex-wrap">
                            <LanguageChip label="React js" icon={reactIcon} />
                            <LanguageChip label="React js" icon={reactIcon} />
                            <LanguageChip label="React js" icon={reactIcon} />
                            <LanguageChip label="React js" icon={reactIcon} />
                        </div>
                    </ContentBox>
                    <ContentBox>
                        <h4 className="p-2 font-bold text-center">Experiance 4</h4>
                        <p className="text-justify">Description</p>
                        <div className="flex justify-center items-center gap-2 flex-wrap">
                            <LanguageChip label="React js" icon={reactIcon} />
                            <LanguageChip label="React js" icon={reactIcon} />
                            <LanguageChip label="React js" icon={reactIcon} />
                            <LanguageChip label="React js" icon={reactIcon} />
                        </div>
                    </ContentBox>
                </div>
            </div>
        </div>
    )
}

export default Expriance