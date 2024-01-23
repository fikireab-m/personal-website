import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import myPic from "../assets/images/picme_rounded.png"
const SocialBar = () => {
    return (
        <aside className="fixed z-10 top-0 right-0 left-0 flex justify-between items-center pt-4 px-8 lg:pr-16">
            <a href="">
                <img src={myPic} alt="My picture" className="w-12 h-12 rounded-full" />
            </a>
            <div className="flex gap-4 items-center text-gray-400 transform transitions all duration-500">
                <a href="" className="p-2 bg-gray-800 rounded-lg hover:text-sky-500">
                    <FiGithub className="w-6 h-6" />
                </a>
                <a href="" className="p-2 bg-gray-800 rounded-lg hover:text-sky-500">
                    <SiGmail className="w-6 h-6" />
                </a>
                <a href="" className="p-2 bg-gray-800 rounded-lg hover:text-sky-500">
                    <FaLinkedin className="w-6 h-6" />
                </a>
            </div>
        </aside>
    )
}

export default SocialBar