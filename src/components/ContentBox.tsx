import { ReactNode } from "react"

interface ContentBoxProp {
    children: ReactNode
}
const ContentBox: React.FC<ContentBoxProp> = ({ children }) => {
    return (
        <div className="max-w-2xl h-full rounder-lg p-4 bg-gray-800 transform transition-all duration-500 ease-in-out hover:scale-105 group">
            {children}
        </div>
    )
}

export default ContentBox