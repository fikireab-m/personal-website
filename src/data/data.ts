import reactIcon from "../assets/icons/reactjs.png"

export const aboutme = `Hello, I'm Fikireab Mekuriaw, a seasoned software engineer with over 4 years of experience dedicated to crafting exceptional digital products. My journey began with a love for problem-solving and has evolved into a passion for turning ideas into elegant, efficient, and scalable solutions. I approach software engineering as an art form, blending creativity and precision to build impactful digital experiences. Adapting to the rapid pace of technology is a continuous thrill for me, and I thrive in collaborative environments where diverse perspectives converge to create solutions greater than the sum of their parts. Beyond the code, I love traveling and learning the languages and cultures of others, believing that a well-rounded life enhances creativity.`

interface TechStack { icon: string, title: string }
interface Experience {
    title: string,
    company: string,
    location: string,
    date: string,
    desc: string,
    techstacks: TechStack[]
}
export const experiences: Experience[] = [
    {
        title: "Fullstack developer",
        company: "Ministry of Innovation and Technology",
        location: "Addis Ababa, Ethiopia",
        date: "Nov 20,2023 - Present",
        desc: "",
        techstacks: [
            { icon: reactIcon, title: "Typescript" },
            { icon: reactIcon, title: "React js" },
            { icon: reactIcon, title: "Python" },
            { icon: reactIcon, title: "Django" },
            { icon: reactIcon, title: "Tailwind CSS" },
            { icon: reactIcon, title: "Material UI" },
            { icon: reactIcon, title: "ERP Next" },]
    },
    {
        title: "Fullstack developer | Flutter developer",
        company: "KGP2 SS India Pvt Ltd",
        location: "Fully remote",
        date: "Feb 06,2023 - Nov 15, 2023",
        desc: "",
        techstacks: [
            { icon: reactIcon, title: "Flutter" },
            { icon: reactIcon, title: "Typescript" },
            { icon: reactIcon, title: "React js" },
            { icon: reactIcon, title: "Redux js" },
            { icon: reactIcon, title: "Tailwind CSS" },
            { icon: reactIcon, title: "Express js" },
            { icon: reactIcon, title: "MongoDB" },
            { icon: reactIcon, title: "Firebase" },
            { icon: reactIcon, title: "Node js" },]
    },
    {
        title: "Front-end developer",
        company: "Adama Scince and Technology University",
        location: "Adama, Oromia, Ethiopia",
        date: "june 20,2023 - Sept 05, 2022",
        desc: `As a Front-end Developer, I have crafted a seamless Learning Management System (LMS) utilizing React.js, Material UI, Tailwind CSS, Redux.js, and Figma. Collaborating closely with the design team, I ensured an intuitive interface that prioritized user experience. Leveraging Redux Toolkit, I achieved efficient state management, while meticulous performance optimization efforts enhanced the overall responsiveness. The project not only showcased technical proficiency but also demonstrated a commitment to delivering a cutting-edge educational platform.`,
        techstacks: [
            { icon: reactIcon, title: "React js" },
            { icon: reactIcon, title: "Redux js" },
            { icon: reactIcon, title: "Material UI" },
            { icon: reactIcon, title: "Tailwind CSS" },]
    },
    {
        title: "Chatbot developer",
        company: "Adama Science and Technoloy University",
        location: "Adama, Oromia, Ethiopia",
        date: "June 28, 2021 - August 30",
        desc: `Developed and implemented chatbot solutions using Python,React,ChatterBot and Dialogflow.
        Applied NLP techniques like tokenization, part-of-speech-tagging, named entity recognition, and other usefull techniques for effective user interaction. Collaborated with cross-functional teams to ensure user-friendly conversational flows. Integrated chatbots with the learnig management system for seamless communication. Conducted testing and debugging, ensuring a smooth user experience. Demonstrated adaptability and commitment to staying updated on evolving technologies.`,
        techstacks: [
            { icon: reactIcon, title: "Python" },
            { icon: reactIcon, title: "ChatBot" },
            { icon: reactIcon, title: "Dialog Flow" },
            { icon: reactIcon, title: "React js" },]
    }
]