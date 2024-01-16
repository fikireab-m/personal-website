import { FaceFrownIcon, GiftTopIcon, InboxStackIcon, LinkIcon } from "@heroicons/react/24/outline"

const SocialBar = () => {
    return (
        <aside className="fixed z-10 top-8 right-32">
            <div className="flex gap-4 item-center">
                <LinkIcon className="w-8 h-8 text-sky-500"/>
                <GiftTopIcon className="w-8 h-8 text-sky-500"/>
                <FaceFrownIcon className="w-8 h-8 text-sky-500"/>
                <InboxStackIcon className="w-8 h-8 text-sky-500"/>
            </div>
        </aside>
    )
}

export default SocialBar