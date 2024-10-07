"use client"

import Image from 'next/image'
import React, { useState } from 'react'

import logo from '@/assets/logo.png'
import { ShoppingCart, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    console.log('Menu toggle:', !isOpen); // Adicionado para depuração
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative z-50">
      <div className="flex justify-between items-center p-5 text-lime-950">
        <Image src={logo} alt="Logo" className="w-28 h-auto sm:w-16 md:w-28 lg:w-32" priority={true} />
        
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        <ul className="hidden lg:flex flex-grow justify-end space-x-8 m-5">
          <li className="font-bold hover:text-lime-700 transition-colors">
            <a href="#">Sobre nós</a>
          </li>
          <li className="font-bold text-lime-700 transition-colors">
            <a href="#">Produtos</a>
          </li>
          <li className="font-bold hover:text-lime-700 transition-colors">
            <a href="#">Receitas</a>
          </li>
          <li className="font-bold hover:text-lime-700 transition-colors">
            <a href="#">Entre em contato</a>
          </li>
          <li>
            <a href="#"><ShoppingCart color="black" size={32} /></a>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-lime-950/50 text-white flex flex-col items-center justify-center p-5 z-50">
          <button onClick={toggleMenu} className="absolute top-5 right-5 text-white">
            <X size={32} />
          </button>
          <ul className="space-y-8 text-center">
            <li className="font-bold text-2xl hover:text-black transition-colors">
              <a href="#" onClick={toggleMenu}>Sobre nós</a>
            </li>
            <li className="font-bold text-2xl hover:text-black transition-colors">
              <a href="#" onClick={toggleMenu}>Produtos</a>
            </li>
            <li className="font-bold text-2xl hover:text-black transition-colors">
              <a href="#" onClick={toggleMenu}>Receitas</a>
            </li>
            <li className="font-bold text-2xl hover:text-black transition-colors">
              <a href="#" onClick={toggleMenu}>Entre em contato</a>
            </li>
            <li>
              <a href="#" className='flex items-center justify-center'><ShoppingCart color="white" size={40} /></a>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
