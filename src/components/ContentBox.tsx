import { ReactNode } from "react"

interface ContentBoxProp {
    children: ReactNode
}
const ContentBox: React.FC<ContentBoxProp> = ({ children }) => {
    return (
        <div className="max-w-5xl rounder-lg p-4 bg-gray-800 transform transition-all duration-500 ease-in-out">
            {children}
        </div>
    )
}

export default ContentBox