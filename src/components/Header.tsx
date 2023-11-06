const Header = () => {
  return (
    <header className="flex items-center justify-center bg-transparent">
      <nav className="shadow-xl my-4 p-4 px-8 flex gap-6 md:gap-8 lg:gap-12 max-w-lg bg-gray-900 rounded-full backdrop-blur-lg bg-opacity-30">
        <a href="#" className="text-sm font-semibold leading-6 text-white">
          About
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-white">
          Services
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-white">
          Contact
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-white">
          View CV
        </a>
      </nav>
    </header>
  )
}

export default Header;