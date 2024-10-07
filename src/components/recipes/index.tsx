import Image from 'next/image';
import React from 'react';

import { recipesMock } from '@/mocks/recipes';

import A from '@/assets/recipes/image-A.png';
import B from '@/assets/recipes/image-B.png';
import C from '@/assets/recipes/image-C.png';
import D from '@/assets/recipes/image-D.png';

const Recipes = () => {
  return (
    <div className="flex flex-col">
        <div className="flex flex-col md:flex-row flex-grow w-full mt-24">
            <div className="m-2">
                <Image src={A} alt='image A' />
            </div>
            <div className="flex flex-col">
                <Image src={B} alt='image B' className='m-2' />
                <Image src={C} alt='image C' className='m-2 h-full' />
            </div>
            <div className="m-2">
                <Image src={D} alt='image D' />
            </div>
        </div>
        <div className="text-black flex flex-col justify-center items-center m-4">
            <p className='text-xs font-sans'>Tasty</p>
            <h2 className='text-2xl'>Alguns modos de preparo</h2>
            <p className='text-xs font-sans'>Aqui são algumas dicas de como podem aproveitar os nossos cogumelos da melhor maneira possivel!</p>
        </div>

        {recipesMock.map((recipe) => (
        <div key={recipe.id} className="flex flex-grow mb-6">
          <div className="order-1">
            <Image src={recipe.image} alt={recipe.name} className='m-2' width={200} height={200} />
          </div>
          <div className="order-2">
            <h3 className='text-lime-950'>{recipe.name}</h3>
            <h5 className='bg-lime-950 p-4'>
              <span className='font-bold text-lg'>Ingredientes:</span>
              <ul className='list-disc pl-5'>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <span className='font-bold text-lg'>Modo de preparo:</span>
              <ul className='list-disc pl-5'>
                {recipe.preparation.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </h5>
          </div>
        </div>
        ))}
    </div>
  );
};

export default Recipes;
