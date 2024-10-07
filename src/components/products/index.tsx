import { ShoppingCart } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import ProductCard from '@/components/productCard'

import shimeji from '@/assets/productItems/shimeji.png'
import champignon from '@/assets/productItems/champignon.png'
import ostra from '@/assets/productItems/ostra.png'
import basket from '@/assets/picnic-basket.png'
import cogumelo from '@/assets/cogumelo.png'

const Products = () => {
  return (
    <div className="flex flex-col">
      <div className="text-black flex flex-col justify-center items-center m-4 mt-20">
        <p className='text-xs font-sans'>All natural</p>
        <h2 className='text-2xl'>Nossos produtos</h2>
        <p className='text-xs font-sans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper convallis fermentum.</p>
        <ul className='flex flex-row justify-center items-center p-4'>
          <li className='mr-4 flex items-center flex-col'>
            <Image src={basket} alt="picnik basquet" width='32' />
            <h3 className='hover:text-lime-800'>Mostrar tudo</h3>
          </li>
          <li className='ml-4 flex items-center flex-col'>
            <Image src={cogumelo} alt="picnik basquet" width='32' />
            <h3 className='hover:text-lime-800'>Cogumelos</h3>
          </li>
        </ul>
      </div>

      <div className=" flex flex-col justify-center">
        <h3 className='text-black m-4 font-bold text-lg'>250gr</h3>
        <div className="grid grid-cols-3 gap-4 p-4">
          <ProductCard
            name="Shimeji"
            price="$5/kg"
            rating={4}
            image={shimeji}
            color='bg-lime-100'
          />
          <ProductCard
            name="Champignon"
            price="$6/kg"
            rating={3}
            image={champignon}
            color='bg-amber-100'
          />
          <ProductCard
            name="Ostra"
            price="$8/kg"
            rating={4}
            image={ostra}
            color='bg-lime-100'
          />
        </div>

        <h3 className='text-black m-4 font-bold text-lg'>500gr</h3>
        <div className="grid grid-cols-3 gap-2">
          <ProductCard
            name="Shimeji"
            price="$5/kg"
            rating={4}
            image={shimeji}
            color='bg-sky-100'
          />
          <ProductCard
            name="Champignon"
            price="$6/kg"
            rating={3}
            image={champignon}
            color='bg-amber-200'
          />
          <ProductCard
            name="Ostra"
            price="$8/kg"
            rating={4}
            image={ostra}
            color='bg-sky-100'
          />
        </div>

        <h3 className='text-black m-4 font-bold text-lg'>1kg</h3>
        <div className="grid grid-cols-3 gap-4 p-4">
          <ProductCard
            name="Shimeji"
            price="$5/kg"
            rating={4}
            image={shimeji}
            color='bg-lime-100'
          />
          <ProductCard
            name="Champignon"
            price="$6/kg"
            rating={3}
            image={champignon}
            color='bg-amber-100'
          />
          <ProductCard
            name="Ostra"
            price="$8/kg"
            rating={4}
            image={ostra}
            color='bg-lime-100'
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button className='border-black hover:border-lime-800 border text-black hover:text-lime-800 p-2 rounded-lg m-4 w-md flex flex-wrap'>Fazer pedido especial <ShoppingCart className='ml-3' /></button>
      </div>
    </div>
  )
}

export default Products
