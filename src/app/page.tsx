'use client'
import BannerParticulas from './components/BannerParticles/BannerParticulas'
import BotoneraRedes from './components/BotoneraRedes/BotoneraRedes'
import MaquinaEscribirEffect from './components/MaquinaEscribirEffect/MaquinaEscribirEffect'
import SaludoDev from './components/SaludoDev/SaludoDev'

export default function Home() {

  return (
      <section className="relative flex flex-col justify-start items-center gap-2 w-full max-w-5xl h-auto min-h-[calc(100vh-85px)] z-10 pt-2">
        <SaludoDev />
        <BannerParticulas />
        <MaquinaEscribirEffect /> 
        <BotoneraRedes />
      </section>
  )
}
