import reactIcon from "../assets/icons/reactjs.png"

export const aboutme = `Hello, I'm Fikireab Mekuriaw, a seasoned software engineer dedicated to crafting exceptional digital experiences with over 4 years of experience. My journey began with a love for problem-solving and has evolved into a passion for turning ideas into elegant, efficient, and scalable solutions. I approach software engineering as an art form, blending creativity and precision to build impactful digital experiences. Adapting to the rapid pace of technology is a continuous thrill for me, and I thrive in collaborative environments where diverse perspectives converge to create solutions greater than the sum of their parts. Beyond the code, I love traveling and learning the languages and cultures of others, believing that a well-rounded life enhances creativity.`

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
            { icon: reactIcon, title: "React js" },
            { icon: reactIcon, title: "React js" },
            { icon: reactIcon, title: "React js" },
            { icon: reactIcon, title: "React js" },]
    },
    {
        title: "Fullstack developer",
        company: "KGP2 SS India Pvt Ltd",
        location: "Fully remote",
        date: "Feb 06,2023 - Nov 15, 2023",
        desc: "",
        techstacks: [
            { icon: reactIcon, title: "React js" },
            { icon: reactIcon, title: "React js" },
            { icon: reactIcon, title: "React js" },
            { icon: reactIcon, title: "React js" },]
    },
    {
        title: "Front-end developer",
        company: "Adama Scince and Technology University",
        location: "Adama, Oromia, Ethiopia",
        date: "june 20,2023 - Sept 05, 2022",
        desc: "",
        techstacks: [
            { icon: reactIcon, title: "React js" },
            { icon: reactIcon, title: "React js" },
            { icon: reactIcon, title: "React js" },
            { icon: reactIcon, title: "React js" },]
    },
    {
        title: "Chatbot developer",
        company: "Adama Science and Technoloy University",
        location: "Adama, Oromia, Ethiopia",
        date: "June 28, 2021 - August 30",
        desc: `Developed and implemented chatbot solutions using Python,React,ChatterBot and Dialogflow.
        Applied NLP techniques like tokenization, part-of-speech-tagging, named entity recognition, and other usefull techniques for effective user interaction. Collaborated with cross-functional teams to ensure user-friendly conversational flows. Integrated chatbots with the learnig management system for seamless communication. Conducted testing and debugging, ensuring a smooth user experience. Demonstrated adaptability and commitment to staying updated on evolving technologies.`,
        techstacks: [
            { icon: reactIcon, title: "React js" },
            { icon: reactIcon, title: "React js" },
            { icon: reactIcon, title: "React js" },
            { icon: reactIcon, title: "React js" },]
    }
]