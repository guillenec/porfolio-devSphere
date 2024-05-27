import Link from 'next/link'
import React, { useEffect, useState } from 'react'



const NavMenu = () => {
  const [activeToggle, setActiveToggle] = useState(false)
  const [hoverMouse, seHoverMouse] = useState(0)
  const handleActiveToggle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    e.stopPropagation()
    setActiveToggle(!activeToggle)
  }

  useEffect(() => {

  },[])

  const handleMouse = (index: number) => () => {
    seHoverMouse(index)

    index === 0 && seHoverMouse(0)
  }

  return (
    <header className="header fixed max-w-5xl w-full h-auto lg:h-16 flex flex-row items-center justify-between font-mono text-sm lg:flex bg-gradient-to-r 
      from-[#020428] from-10% via-[#457d95] via-[30%] to-[#d4eae0] to-90%
      px-2 z-10 ">   
        {/* logo */}
        <div className="logotipo relative left-0 flex h-auto w-auto items-center justify-center text-white font-bold text-lg lg:text-2xl">
          DevSphere
        </div>

        {/* menu */}
        <nav className={`menuNavegacion absolute w-full h-screen lg:h-full left-0 ${activeToggle ? 'top-[62px]' : '-top-[100vh]'} transition-top ease-linear duration-200 flex flex-col justify-start items-center pt-4 lg:pt-0 lg:relative lg:h-auto lg:right-0 lg:top-0 lg:flex lg:flex-row lg:w-auto lg:justify-center lg:transition-none lg:left-0 gap-2 bg-gradient-to-r 
      from-[#020428] from-10% via-[#457d95] via-[30%] to-[#d4eae0] to-90% lg:bg-none`}>
          <Link 
          className='w-28 h-8 grid place-content-center rounded-lg text-sm lg:text-base capitalize font-semibold  z-10' 
          href={''}
          onMouseMove={handleMouse(0)}
          >inicio</Link>
          <Link 
          className='w-28 h-8 grid place-content-center rounded-lg text-sm lg:text-base capitalize font-semibold  z-10' 
          href={''}
          onMouseMove={handleMouse(1)}
          >Proyectos</Link>
          <Link 
          className='w-28 h-8 grid place-content-center rounded-lg text-sm lg:text-base capitalize font-semibold z-10' 
          href={''}
          onMouseMove={handleMouse(2)}
          >Nosotros</Link>
          {/* hover lg */}
          <div className={`hidden lg:block lg:absolute lg:left-0 ${hoverMouse === 0 ? 'lg:translate-x-[0px]' : hoverMouse === 1 ? 'lg:translate-x-[127px]' : hoverMouse === 2 ? 'lg:translate-x-[254px]' : 'lg:left-0'} left-0 right-0 w-28 h-8 rounded-sm  bg-black transition-transform ease-linear duration-300 z-0`}></div>
          {/* hover movile */}
          <div className={`lg:hidden flex absolute w-[120px] mt-4 h-auto bg-teal-500 lg:left-0 justify-center items-center z-0`}>
            <div className={`lg:hidden flex absolute lg:left-0 ${hoverMouse === 0 ? 'translate-y-[0px]' : hoverMouse === 1 ? 'translate-y-[42px]' : hoverMouse === 2 ? 'translate-y-[84px]' : 'top-0'} left-0 right-0 w-28 h-8 rounded-sm  bg-black transition-transform ease-linear duration-300 z-0`}>
            
            </div>
          </div>
        </nav>   
        
        {/* toggle */}
        <div className='toggle w-14 h-14 flex flex-col justify-center items-center lg:hidden gap-1 overflow-hidden z-0' onClick={handleActiveToggle}>
            <span className={`w-8 h-1 bg-slate-50 rounded-xl ${activeToggle ? 'rotate-45 translate-y-2' : 'rotate-0'} ease-linear duration-200`}></span>
            <span className={`w-8 h-1 bg-slate-50 rounded-xl ${activeToggle ? 'translate-x-12' : 'translate-x-0'} ease-linear duration-200`}></span>
            <span className={`w-8 h-1 bg-slate-50 rounded-xl ${activeToggle ? '-rotate-45 -translate-y-2' : 'rotate-0'} ease-linear duration-200`}></span>
        </div>
      </header>
  )
}

export default NavMenu