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
        <div className="w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-600 via-gray-800 to-black text-lime-100 flex flex-col justify-center items-center">
            {
                personalQualities.map((item, index) => (
                    <>
                        {index % 2 === 0 ? <div key={index} className="w-4/5 flex justfy-center items-center gap-4 p-16">
                            <div className="w-2/5 text-center">
                                <h1 className="text-4xl">{item.quality}</h1>
                            </div>
                            <div className="w-2/5 text-center">
                                <p>{item.desc}</p>
                            </div>
                        </div>
                            :
                            <div key={index} className="w-4/5 flex justfy-center items-center gap-4 p-16">
                                <div className="w-2/5 text-center">
                                    <p>{item.desc}</p>
                                </div>
                                <div className="w-2/5 text-center">
                                    <h1 className="text-4xl">{item.quality}</h1>
                                </div>
                            </div>}
                    </>
                ))
            }
        </div>
    )
}

export default About