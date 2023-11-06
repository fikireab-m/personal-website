import { Fragment} from 'react'
import {Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon} from '@heroicons/react/20/solid'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]

const Header = ()=> {

  return (
    <header className="flex items-center justify-center bg-transparent">
      <nav className="shadow-xl my-4 p-4 max-w-lg bg-gray-900 rounded-full">
        <Popover.Group className="flex gap-x-6 md:gap-x-8 lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center text-sm font-semibold leading-6 text-white">
              Services
              <ChevronDownIcon className="h-5 w-5 flex-none text-white" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-dark shadow-xl outline-0 bg-dark">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-900"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-teal-600 group-hover:bg-gray-900">
                        <item.icon className="h-6 w-6 text-gray-100 group-hover:text-teal-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-100">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-100">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a href="#" className="text-sm font-semibold leading-6 text-white">
            About
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Contact
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            View CV
          </a>
        </Popover.Group>
      </nav>
    </header>
  )
}

export default Header;