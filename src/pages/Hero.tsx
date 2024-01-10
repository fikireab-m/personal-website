import myPic from "../assets/images/picme.svg";
export default function Hero() {
  return (
    <div className="bg-dark">
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
            <div className="mt-10">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contact me
              </a>
            </div>
          </div>
          <div className="max-w-xl bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-600 to-purple-300 bg-gradient-to-r p-2" style={{ clipPath: "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)", filter:"blure(20px)"}}>
            <div className="max-w-xl bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 bg-gradient-to-r " style={{ clipPath: "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)" }}>
              <div className="max-w-xl bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 bg-gradient-to-r" style={{ clipPath: "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)" }}>
                <img src={myPic} alt="my photo" />
              </div>
            </div>
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
