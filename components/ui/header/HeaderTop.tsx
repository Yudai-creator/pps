"use client";
import { useState, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { services, materials } from "../../data/defaults";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const terms = [
  { name: "Terms and Conditions", href: "/terms" },
  { name: "Cookies Policy", href: "/privacity" },
  // { name: "Warranty of Service", href: "#" },
  // { name: "Financing Program", href: "#" },
];

const contacts = [
  { name: "Free Estimate", href: "https://www.forms.poolpaintscreen.com" },
  {
    name: "Call Us",
    href: "tel:4075549393",
  },
  {
    name: "Chat With Us",
    href: "https://www.forms.poolpaintscreen.com/contact-us-chat",
  },
  {
    name: "Warranty Claim",
    href: "https://www.forms.poolpaintscreen.com/warranty-claim",
  },
  { name: "FAQs", href: "/faqs" },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function HeaderTop() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-main-black z-10">
      <nav
        className="lg:mx-8 flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center ">
          <Link href="/" className="-m-1.5">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="h-14 w-auto"
              src="/img/logo.svg"
              alt="Pool Paint Screen LLC"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center   p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-14 w-14 text-white" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex items-center">
          <div className="flex text-white gap-10 items-center">
            <Popover.Group className="hidden lg:flex lg:gap-10">
              <Link href="/" className="text-sm font-semibold leading-6  ">
                Home
              </Link>
              <Popover className="relative">
                <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 ">
                  Services
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
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
                  <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden   bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {services.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6   p-4 text-sm leading-6 hover:bg-gray-50 hover:text-gray-700"
                        >
                          <div className="flex-auto">
                            <Link
                              href={item.href}
                             
                              className="block font-semibold text-gray-900"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
              <Popover className="relative">
                <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6   ">
                  Materials
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
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
                  <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden   bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {materials.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6   p-4 text-sm leading-6 hover:bg-gray-50 hover:text-gray-700"
                        >
                          <div className="flex-auto">
                            <Link
                              href={item.href}
                              className="block font-semibold text-gray-900"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
              <Popover className="relative">
                <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6  ">
                  Terms
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
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
                  <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden   bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {terms.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6   p-4 text-sm leading-6 hover:bg-gray-50 hover:text-gray-700"
                        >
                          <div className="flex-auto">
                            <Link
                              href={item.href}
                              className="block font-semibold text-gray-900"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
              <Popover className="relative">
                <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6  ">
                  Contact Us
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
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
                  <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden   bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {contacts.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6   p-4 text-sm leading-6 hover:bg-gray-50 hover:text-gray-700"
                        >
                          <div className="flex-auto">
                            <Link
                              href={item.href}
                              className="block font-semibold text-gray-900"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </Popover.Group>

            <Link
              href="tel:4075549393"
              target="_blank"
              className="text-sm bg-white font-semibold leading-6 text-gray-700 px-7 py-2 "
            >
              Call Us
            </Link>
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 bg-main-black right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only"> </span>
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className="h-14 w-auto"
                src="https://ik.imagekit.io/cluzstudio/pool/logo_lZS6zl1ml.png?updatedAt=1684939730843"
                alt="Pool Paint Screen LLC"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5   p-2.5 text-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root text-gray-100">
            <div className="-my-6 divide-y divide-gray-100/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between   py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-50 hover:text-gray-700">
                        Services
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {...services.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block text-gray-50   py-2 pl-6 pr-3 text-sm font-semibold leading-7  hover:bg-gray-50 hover:text-gray-700"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between   py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-50 hover:text-gray-700">
                        Materials
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {...materials.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block   py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-50 hover:bg-gray-50 hover:text-gray-700"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between   py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-50 hover:text-gray-700">
                        Terms
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {...terms.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block   py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-50 hover:bg-gray-50 hover:text-gray-700"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between   py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-50 hover:text-gray-700">
                        Contact Us
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {...contacts.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block   py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-100 hover:bg-gray-50 hover:text-gray-700"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <div className="py-6">
                  <Link
                    href="#"
                    className="text-sm bg-white font-semibold leading-6 text-gray-700 px-7 py-2 "
                  >
                    Call Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
