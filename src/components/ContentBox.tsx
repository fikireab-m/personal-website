import { ReactNode } from "react"

interface ContentBoxProp {
    children: ReactNode
}
const ContentBox: React.FC<ContentBoxProp> = ({ children }) => {
    return (
        <div className="group max-w-2xl h-full cursor-pointer rounded-2xl p-4 bg-gray-800 text-gray-400 transform transition all duration-500 ease-in-out hover:scale-105 hover:shadow-sm hover:shadow-sky-500">
            {children}
        </div>
    )
}

export default ContentBox