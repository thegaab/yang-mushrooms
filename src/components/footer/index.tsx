import React from 'react'
import Image from 'next/image'

import logo from '@/assets/logo.png'

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <div className="flex items-center justify-center my-8 w-full">
        {/* Traço à esquerda */}
        <div className="flex-grow h-px bg-zinc-700"></div>

        {/* Logo centralizado */}
        <div className="mx-4">
          <Image src={logo} alt="Logo" width={100} height={40} /> {/* Ajuste as dimensões conforme necessário */}
        </div>

        {/* Traço à direita */}
        <div className="flex-grow h-px bg-zinc-700"></div>
      </div>

      <div className="flex flex-col lg:flex-grow lg:flex-row justify-around w-full px-4 text-black mb-10">
  <div className="w-full lg:w-1/5 mb-4 lg:mb-0">
    <h3 className='font-bold'>Sobre nós</h3>
    <p className='text-xs'>
      Com raízes na tradição taiwanesa, cultivamos cogumelos de alta qualidade, trazendo frescor e sabor da natureza diretamente para sua mesa. Nosso compromisso é com a excelência e a sustentabilidade.
    </p>
  </div>
  <div className="w-full lg:w-auto mb-4 lg:mb-0">
    <h3 className='font-bold'>Fale Conosco</h3>
    <ul className='text-xs'>
      <li>E-mail</li>
      <li>Telefone</li>
      <li>Endereço</li>
    </ul>
  </div>
  <div className="w-full lg:w-auto">
    <h3 className='font-bold'>Siga-nos</h3>
    <ul className='text-xs'>
      <li>Instagram</li>
      <li>Facebook</li>
    </ul>
  </div>
</div>

    </div>
  )
}

export default Footer
