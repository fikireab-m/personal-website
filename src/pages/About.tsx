const About = () => {
    const personalQualities = [
        {
            quality: "Adaptable",
            desc: "I am quick to learn new technologies and can easily adapt to changing project requirements."
        },
        {
            quality: "Problem Solver",
            desc: "I have a knack for identifying issues and implementing effective solutions."
        },
        {
            quality: "Team Player",
            desc: "I work well in a team, valuing the input of others and contributing my own ideas effectively."
        },
        {
            quality: "Communication",
            desc: "I am able to clearly express my thoughts and ideas, both verbally and in writing."
        },
        {
            quality: "Technical Skills",
            desc: "I have a strong understanding of full-stack development, including front-end, back-end, server, hardware, network, and database management."
        }
    ]
    return (
        <div className="w-full h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-600 via-gray-800 to-black text-lime-100 flex justify-center items-center">
            <div className="flex justify-center items-center">
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    {
                        personalQualities.map((item, index) => (
                            <span key={index}>
                                <h1 className="text-4xl">{item.quality}</h1>
                                <p>{item.desc}</p>
                            </span>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default About