import myPic from "../assets/images/picme.png"
const AboutMe = () => {
    return (
        <div id="aboutme" className="bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-900 via-slate-900 to-gray-900 lg:overflow-hidden lg:h-screen">
            <div className="relative isolate px-6 lg:px-8">

                <div className="mx-auto max-w-7xl px-8 py-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8 mx-auto">
                    <div className="text-justify md:text-left text-white text-xl">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos officia nesciunt, quos eveniet beatae id autem itaque quas illo odit, aliquid praesentium magni cumque amet enim sit sint molestias? Dignissimos!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sapiente expedita, ad nisi accusantium sequi dolores animi dolorum consequatur, unde quia alias aliquam at deleniti id rem veritatis similique! Quae!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae distinctio provident veritatis deserunt dignissimos tempora aspernatur voluptatibus inventore. Eos assumenda dolorem inventore veniam nesciunt explicabo quibusdam incidunt ducimus minus at?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa omnis recusandae hic ad. Explicabo nobis harum, aliquam illo iure vel expedita, eveniet ut non consectetur, corrupti aliquid? Eius, nulla dolorem.
                    </div>
                    <div className="col-span-1" >
                        <img src={myPic} alt="My pic" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe