import React from 'react';
import { ShoppingCart } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';

interface ProductCardProps {
  image: string | StaticImageData;
  name: string;
  price: string;
  rating: number;
  color: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price, rating, color }) => {
    return (
      <div className={`p-4 rounded-lg w-full md:w-1/2 lg:h-[350px] shadow-md flex flex-col items-center text-center ${color}`}>
      <div className="w-full h-40 mb-4 rounded-lg overflow-hidden flex justify-center">
        <Image src={image} alt={name} className="w-full md:w-2/3 object-fill" />
      </div>
      <div className="flex flex-wrap">
        <h3 className="text-base md:text-lg font-bold mb-1 text-black mr-8 md:mr-16">{name}</h3>
        <p className="text-sm md:text-base text-gray-500">{price}</p>
      </div>
      <div className="flex flex-wrap">
        <div className="flex items-center justify-center mt-2 mr-10 md:mr-20">
          {Array(rating).fill(null).map((_, index) => (
            <span key={index} className="text-black">&#9733;</span>
          ))}
          {Array(5 - rating).fill(null).map((_, index) => (
            <span key={index} className="text-gray-300">&#9733;</span>
          ))}
        </div>
        <button className="mt-1 p-1 md:p-2 rounded-full bg-black hover:bg-lime-600">
          <ShoppingCart className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>
    </div>

    );
  }
  

export default ProductCard;
