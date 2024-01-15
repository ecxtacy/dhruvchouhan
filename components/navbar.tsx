import Link from 'next/link'
import React from 'react'
import { Toggle } from './ui/toggle'
import ThemeSwitcher from './theme-switcher'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <header className="flex justify-between items-center backdrop-blur-md bg-opacity-30 bg-gray-400 dark:text-slate-50 rounded-xl p-4 sticky top-4">
        <div className="font-bold text-xl">Dhruv Chouhan</div>
        <nav className="space-x-4">
          <Link className="hover:underline" href="#">
            About
          </Link>
          <Link className="hover:underline" href="#">
            Projects
          </Link>
          <Link className="hover:underline" href="#">
            Skills
          </Link>
          <Link className="hover:underline" href="#">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-2">
          <ThemeSwitcher/>
        </div>
      </header>
  )
}

export default Navbar