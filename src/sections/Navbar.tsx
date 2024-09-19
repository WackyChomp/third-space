import React from 'react'
import { useState } from 'react'
import { navLinks } from '../constants'

type Props = {}


const NavItems = ({ onClick = () => {} }) => (
  <ul className='nav-ul'>
    {navLinks.map(({ id, name, href }) =>(
      <li key={id} className='nav-li'>
        <a href={href} className='nav-li-a' onClick={onClick}>
          {name}
        </a>
      </li>
    ))}
  </ul>
)

const Navbar = (props: Props) => {
  const hamburgerIcon = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1lbnUiPjxsaW5lIHgxPSI0IiB4Mj0iMjAiIHkxPSIxMiIgeTI9IjEyIi8+PGxpbmUgeDE9IjQiIHgyPSIyMCIgeTE9IjYiIHkyPSI2Ii8+PGxpbmUgeDE9IjQiIHgyPSIyMCIgeTE9IjE4IiB5Mj0iMTgiLz48L3N2Zz4=`
  const closeIcon = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXgiPjxwYXRoIGQ9Ik0xOCA2IDYgMTgiLz48cGF0aCBkPSJtNiA2IDEyIDEyIi8+PC9zdmc+`

  const [count, setCount] = useState(-10);

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen( (prevIsOpen) => !prevIsOpen);

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-red-600/40'>
      <div className="max-w-7-xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          
          <a href="/" className='text-neutral-400 font-bold text-xl hover:text-cyan-600'>
            Third Space
          </a>

          <div className="bg-yellow-400 flex gap-5 p-0.5">
            <h1 className='bg-blue-800 text-2xl text-white underline'>Story of my life</h1>

            <button className='bg-pink-800 p-1'
              onClick={() => setCount((count) => count + 2*2)}
            >
              count is currently: {count}
            </button>
          </div>

          <button 
            onClick={toggleMenu}
            className='text-green-600 hover:text-yellow-500 focus:outline-none sm:hidden flex'
            aria-label='Toggle Menu'
          >
            <img src={isOpen ? closeIcon : hamburgerIcon} alt="toggle-burger" className='w-6 h-6' />
          </button>

          <nav className='sm:flex hidden'>
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className='p-5'>
          <NavItems />
        </nav>
      </div>

    </header>
  )
}

export default Navbar