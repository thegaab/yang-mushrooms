import React from 'react';
import Image from 'next/image';
import Navbar from '../navbar';

import cogumelosCover from '@/assets/cogumelos-cover.png';

const Header = () => {
  return (
    <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] w-full">
      <Image
        src={cogumelosCover}
        alt="Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
        quality={100} 
        className="z-0"
      />
      
      {/* Sobreposição de conteúdo */}
      <div className="absolute z-10 inset-0">
        <Navbar />
        
        {/* Texto sobreposto */}
        <div className="absolute -bottom-[40px] md:-bottom-[60px] left-0 w-full md:w-2/3 lg:w-1/2 bg-lime-900 p-6 md:p-8 lg:p-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-light">
            O Frescor da Natureza, a Tradição de Taiwan em Cada Colheita.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
