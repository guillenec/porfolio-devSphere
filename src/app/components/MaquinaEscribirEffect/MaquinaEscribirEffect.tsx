import React, { useEffect, useState } from 'react'
import "./MaquinaEscribirEffect.css"
type Props = {}

const MaquinaEscribirEffect = (props: Props) => {

  const palabras = [
    {id:0, name:'Contamos con un gran equipo.'},
    {id:1, name:'Diseñamos tu pagina web a medida. '}, 
    {id:2, name:'Diseñamos tu logo y moxkup. '},
    {id:3, name:'Diseñamos tu Base de datos. '}, 
    {id:4, name:'Brindamos Facilidades de pago. '}
  ]

  const [index, setIndex] = useState(0)
  const [palabraActual, setPalabraActual] = useState(palabras[0])
  const [direccion, setDireccion] = useState(true);

  console.log("valor ->", palabras[0].name.length)
  const timeCambio = 14

  const cambiarPalabra = () => {
    
  }

  return (
    <div className='cajaMaquinaEscribirEffect w-auto h-10 opacity-50 rounded-md z-10 flex justify-center items-center m-auto bg-black font-mono'>
      <h1 className='relative float-left bg-black text-white font-medium text-xl'>
        {palabras[1]?.name}.<span className='absolute right-0 w-0 bg-black border-l-2 border-l-blue-500'>&#160;</span>
      </h1>
    </div>
  )
}

export default MaquinaEscribirEffect