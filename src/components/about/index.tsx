import React from 'react'
import Image from 'next/image'
import mulherCultivando from '@/assets/mulherCultivando.png'

const About = () => {
  return (
    <div className="flex flex-grow mt-60 justify-end">
      <div className="text-black w-1/4 ml-30">
        <h2 className='text-3xl'>Juntos cultivando os melhores cogumelos desde 1970</h2>
        <p className='font-serif text-lg'>Uma tradição mantida na familia yang <span className='text-lime-800'>杨</span> por gerações e quepermanece viva levando os melhores produtos pra mesa da sua casa.</p>
      </div>
      <div className="">
        <Image src={mulherCultivando} alt="Cogumelos" className=''/>
      </div>
    </div>
  )
}

export default About