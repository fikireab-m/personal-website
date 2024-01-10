import myPic from "../assets/images/picme.svg";
export default function Hero() {
  return (
    <div className="bg-gray-900">
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
        <div className="mx-auto max-w-9xl px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-transparent sm:text-9xl bg-gradient-to-br from-blue-600 to-purple-600" style={{ backgroundClip: "text" }}>
              Hi.
            </h1>
            <h1 className="text-4xl font-bold tracking-tight text-transparent sm:text-6xl bg-gradient-to-br from-blue-600 to-purple-600" style={{ backgroundClip: "text" }}>
              I'm Fikireab Mekuriaw.
            </h1>
            <h1 className="text-4xl font-bold tracking-tight text-transparent sm:text-6xl bg-gradient-to-br from-blue-600 to-purple-600" style={{ backgroundClip: "text" }}>
              A software engineer.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>

            <button className="mt-10 bg-gradient-to-r from-blue-600 to-indigo-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-full shadow-md hover:text-white shadow-blue-300 transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
              <a href="#">
                Contact me
              </a>
            </button>
          </div>
          <div className="max-w-xl flex flex-col jusfiy-center items-center gap-2">
            <div className="max-w-xl bg-[#3e3080] pt-2 pr-2" style={{
              clipPath: "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)", transform: "skewX(-10deg)"
            }}>
              <div className="max-w-xl bg-purple-900 pt-4 pr-1" style={{ clipPath: "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)", filter: "grayscale(75%)" }}>
                <div className="max-w-xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black" style={{ clipPath: "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)", filter: "grayscale(75%)" }}>
                  <img src={myPic} alt="my photo" className="w-96"/>
                </div>
              </div>
            </div>
            <div className="-ml-36 w-1/2 h-16 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 via-blue-600 to-blue-600 shadow-2xl shadow-purple-600 rounded-full" style={{ transform: "skewX(-10deg)", filter: "blur(5px)" }} />
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
