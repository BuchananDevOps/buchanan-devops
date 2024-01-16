import Link from "next/link"
import Router, { useRouter } from "next/router"
import { FC, useEffect, useState } from "react"

import { Dialog } from "@headlessui/react"
import clsx from "clsx"

import Logo from "./Logo"

type NavProps = {
  className?: string
  display: string
}

export const NavPopover: FC<NavProps> = ({ display, className, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    function handleRouteChange() {
      setIsOpen(false)
    }
    Router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [isOpen])

  return (
    <div className={clsx("lg:hidden", className, display)} {...props}>
      <button
        className="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        <span className="sr-only">Navigation</span>
        <svg aria-hidden="true" fill="none" height="24" width="24">
          <path
            d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </button>
      <Dialog
        as="div"
        className={clsx("fixed z-50 inset-0", display)}
        open={isOpen}
        onClose={setIsOpen}
      >
        <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80" />
        <div className="fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5">
          <button
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            type="button"
            onClick={() => setIsOpen(false)}
          >
            <span className="sr-only">Close navigation</span>
            <svg
              aria-hidden="true"
              className="w-2.5 h-2.5 overflow-visible"
              viewBox="0 0 10 10"
            >
              <path
                d="M0 0L10 10M10 0L0 10"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>
          </button>
          <ul className="space-y-6">
            <NavItems />
            <li>
              <Link
                className="hover:text-sky-500 dark:hover:text-sky-400"
                href=""
              >
                GitHub
              </Link>
            </li>
          </ul>
          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-200/10">
            <div className="flex items-center justify-between">
              <Link
                className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700 w-full"
                href="/contact"
                id="nav-contact-button"
                type="button"
              >
                <span>Get In Touch</span>
              </Link>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

export const NavItems: FC = () => {
  return (
    <>
      <li>
        <Link
          className="hover:text-sky-500 dark:hover:text-sky-400"
          href="/seo"
          title="Search Engine Optimization"
        >
          Seo
        </Link>
      </li>
      <li>
        <Link
          className="hover:text-sky-500 dark:hover:text-sky-400"
          href="/web-design"
          title="Web Design"
        >
          Web Design
        </Link>
      </li>
      <li>
        <Link
          className="hover:text-sky-500 dark:hover:text-sky-400"
          href="/articles"
          title="Articles"
        >
          Articles
        </Link>
      </li>
      <li>
        <Link
          className="hover:text-sky-500 dark:hover:text-sky-400"
          href="/showcase"
          title="Portfolio Showcase"
        >
          Showcase
        </Link>
      </li>
      <li>
        <Link
          className="hover:text-sky-500 dark:hover:text-sky-400"
          href="/contact"
          title="Contact Buchanan DevOps"
        >
          Contact
        </Link>
      </li>
    </>
  )
}

type HeaderProps = {
  hasNav: boolean
  navIsOpen: any
  onNavToggle: any
  title: any
}

const Header: FC<HeaderProps> = ({ hasNav }) => {
  const [isOpaque, setIsOpaque] = useState(false)

  const router = useRouter()
  const handleContact = () => {
    router.push("/contact")
  }

  useEffect(() => {
    const offset = 50
    function onScroll() {
      if (!isOpaque && window.scrollY > offset) {
        setIsOpaque(true)
      } else if (isOpaque && window.scrollY <= offset) {
        setIsOpaque(false)
      }
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [isOpaque])

  return (
    <>
      <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none" />
      <div
        className={clsx(
          "sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06]",
          isOpaque
            ? "bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75"
            : "bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent"
        )}
      >
        <div className="max-w-container mx-auto">
          <div
            className={clsx(
              "py-4 px-4 sm:px-6 lg:px-8",
              hasNav ? "mx-4 lg:mx-0" : "px-4"
            )}
          >
            <div className="relative flex items-center">
              <Link
                className="mr-3 flex-none overflow-hidden md:w-auto"
                href="/"
                onContextMenu={e => {
                  e.preventDefault()
                  Router.push("/")
                }}
              >
                <span className="sr-only">Buchanan DevOps Home Page</span>
                <Logo className="w-auto h-5" />
              </Link>
              <div className="relative hidden lg:flex items-center ml-auto">
                <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
                  <ul className="flex space-x-8">
                    <NavItems />
                  </ul>
                </nav>
                <div className="flex items-center border-l border-slate-200 ml-6  dark:border-slate-800">
                  <Link
                    className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                    href="https://www.linkedin.com/in/buchanandevops/"
                    target="_blank"
                  >
                    <span className="sr-only">Buchanan DevOps LinkedIn</span>
                    <svg height="24" viewBox="0 0 16 16" width="24">
                      <path
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <button
                className="ml-auto text-slate-500 w-8 h-8 -my-1 flex items-center justify-center hover:text-slate-600 lg:hidden dark:text-slate-400 dark:hover:text-slate-300"
                type="button"
                onClick={handleContact}
              >
                <span className="sr-only">Contact</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <NavPopover className="ml-2 -my-1" display="lg:hidden" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
