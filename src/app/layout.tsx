'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import React, { useState } from 'react'
import NavMenu from './components/NavMenu/NavMenu'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Dev Sphere',
//   description: 'Porfolio base Dev Sphere!!!',
// }

export default function RootLayout({children,}: {children: React.ReactNode}) {
  

  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="flex min-h-screen  w-full flex-col items-center justify-between p-0 bg-[#0a0713] dark:bg-[#000000]">

      <NavMenu /> 
        
      <main id='particles-js' className="relative flex flex-col place-items-center place-content-center w-full max-w-5xl h-auto min-h-[calc(100vh-85px)] mt-[70px] lg:mt-[70px] z-0">
        {children}
      </main>

      <div className="w-full bg-gradient-to-r dark:from-[rgba(108,41,22,1)] from-10% dark:via-[rgba(39,15,10,1)] via-30% dark:to-[rgba(0,0,0,1)] to-90%  grid text-center h-20 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left mt-2 p-3 z-10">
        <h2>footer</h2>
      </div>
      </div>
      </body>
    </html>
  )
}
