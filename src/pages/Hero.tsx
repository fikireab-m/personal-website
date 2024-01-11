import open_laptop from "../assets/images/971.png";
export default function Hero() {
  return (
    <div id="home" className="bg-gray-900">
      <div className="relative isolate px-6 lg:px-8">
        <div
          className="absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-40"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-slate-900 to-gray-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.2" />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
        <div className="mx-auto max-w-9xl px-8 py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-8 mx-auto">
          <div className="text-left">
            <h1 className="text-4xl font-bold tracking-tight text-transparent sm:text-9xl bg-gradient-to-br from-blue-600 to-purple-600" style={{ backgroundClip: "text" }}>
              Hi.
            </h1>
            <h1 className="text-4xl font-bold tracking-tight text-transparent sm:text-6xl bg-gradient-to-br from-blue-600 to-purple-600" style={{ backgroundClip: "text" }}>
              I'm Fikireab.
            </h1>
            <h1 className="text-4xl font-bold tracking-tight text-transparent sm:text-6xl bg-gradient-to-br from-blue-600 to-purple-600" style={{ backgroundClip: "text" }}>
              A software engineer.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Crafting Tomorrow's Solutions Today.<br /> Elevate Your Digital Experience with me.
            </p>
            
            <button className="ml-32 mt-10 bg-gradient-to-r from-blue-600 to-indigo-600 hover:bg-blue-500 text-white font-bold py-3 px-16 rounded-full shadow-md hover:text-white shadow-blue-300 transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
              <a href="#">
                Contact me
              </a>
            </button>
          </div>
          <div className="max-w-xl pt-2 pr-2" >
            <img src={open_laptop} alt="" />
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
