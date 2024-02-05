const Home: React.FC = () => {
    return (
        <div className="bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-900 via-slate-900 to-gray-900 lg:h-screen">
            <div className="relative isolate lg:px-8">
                <div className="mx-auto max-w-7xl px-2 sm:px-8 lg:px-16 pt-32 pb-16 text-left lg:ml-16">
                    <h1 className="text-4xl font-bold tracking-tight text-transparent sm:text-6xl bg-gradient-to-br from-blue-600 to-purple-600" style={{ backgroundClip: "text" }}>
                        Hi.
                    </h1>
                    <h1 className="text-4xl font-bold text-gray-500" style={{ backgroundClip: "text" }}>
                        I'm <span className="sm:text-6xl transform transition-all duration-500 ease-in-out hover:tracking-widest hover:text-sky-600">Fikireab</span>.
                    </h1>
                    <h1 className="title-text text-6xl lg:text-8xl xl:9xl font-bold tracking-tight text-gray-400 transform transition-all duration-500 ease-in-out hover:text-blue-600" style={{ backgroundClip: "text" }}>
                        A software engineer.
                    </h1>
                    <p className="mt-6 text-xl font-thin leading-8 text-gray-200">
                        Crafting Tomorrow's Solutions Today.<br /> Elevate Your Digital Experience with me.
                    </p>
                    <button
                        className="relative px-8 mt-10 py-2 rounded-full bg-gradient-to-br from-blue-600 to-purple-900 isolation-auto z-10 text-xl py-3 px-8 lg:px-16 rounded-full tracking-normal text-white shadow-none transform transition-all duration-500 ease-in-out hover:shadow-2xl hover:shadow-sky-500 hover:text-2xl hover:font-bold hover:tracking-widest before:absolute before:w-full before:transition-all before:duration-1000 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-sky-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-1000">
                        Let's Talk
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Home

