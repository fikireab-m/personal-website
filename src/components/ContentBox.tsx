import { ReactNode } from "react"

interface ContentBoxProp {
    children: ReactNode
}
const ContentBox: React.FC<ContentBoxProp> = ({ children }) => {
    return (
        <div className="max-w-2xl h-full rounder-lg p-4 bg-gray-800 drop-shadow-sm drop-shadow-gray-200 transform transition-all duration-500 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
            {children}
        </div>
    )
}

export default ContentBox