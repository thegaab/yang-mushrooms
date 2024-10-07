import Image from 'next/image'
import React from 'react'

import logo from '@/assets/logo.png'
import { ShoppingCart } from 'lucide-react'

const Navbar = () => {
  return (
    <div className="">
        <div className="flex flex-row">
            <Image src={logo} alt="Logo" className='w-28 h-auto sm:w-16 md:w-28 lg:w-32 m-5' priority={true}/>
            <li className='flex flex-grow justify-end space-x-5 m-5'>
                <ul className='text-black font-bold hover:text-lime-800'>
                    <a href="">Sobre nós</a>
                </ul>
                <ul className='text-lime-800 font-bold hover:text-black'>
                    <a href="">Produtos</a>
                </ul>
                <ul className='text-black font-bold hover:text-lime-800'>
                    <a href="">Receitas</a>
                </ul>
                <ul className='text-black font-bold hover:text-lime-800'>
                    <a href="">Entre em contato</a>
                </ul>
                <ul className=''>
                    <a href=''><ShoppingCart color='black' size={32}/></a>
                </ul>
            </li>
        </div>
    </div>
  )
}

export default Navbar