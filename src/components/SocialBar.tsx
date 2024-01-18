import { FaceFrownIcon, GiftTopIcon, InboxStackIcon, LinkIcon } from "@heroicons/react/24/outline"
import myPic from "../assets/images/picme_rounded.png"
const SocialBar = () => {
    return (
        <aside className="fixed z-10 top-0 right-0 left-0 flex items-center pt-4">
            <a href="" className="lg:ml-16">
                <img src={myPic} alt="My picture" className="w-12 h-12 rounded-full" />
            </a>
            <div className="flex-1" />
            <div className="flex gap-4 item-center lg:mr-16">
                <LinkIcon className="w-8 h-8 text-sky-500" />
                <GiftTopIcon className="w-8 h-8 text-sky-500" />
                <FaceFrownIcon className="w-8 h-8 text-sky-500" />
                <InboxStackIcon className="w-8 h-8 text-sky-500" />
            </div>
        </aside>
    )
}

export default SocialBar