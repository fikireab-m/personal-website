import { ReactNode } from "react"

interface ContentBoxProp {
    content: ReactNode
}
const ContentBox: React.FC<ContentBoxProp> = ({ content }) => {
    return (
        <div className="max-w-5xl hover:bg-gray-800 rounder-lg">
            {content}
        </div>
    )
}

export default ContentBox