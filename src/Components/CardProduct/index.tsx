import React from 'react';
import { HiStar, HiHeart } from 'react-icons/hi2';
import Reminders from '../Reminders';

interface CardProductProps {
    index: number;
    img: string;
    title: string;
    description: string;
    stars: string;
    price: string;
}

const CardProduct: React.FC<CardProductProps> = ({
    index,
    img,
    title,
    description,
    stars,
    price,
}) => {
    return (
        <>
        {index == 2 && (<Reminders />)}
        <div key={index} className="w-[340px] h-[208px] bg-color-3 mt-3 flex justify-start items-center p-1 pe-0">
            <img src={img} className={`
            w-[200px] z-3 border-[3px] border-solid border-color-3 hover:scale-[1.04] transition-all duration-[200ms] cursor-pointer`} alt={title} />
            <div className="w-full h-full relative bg-color-3 p-1 flex justify-start items-center flex-col">
                <p className="text-color-1 text-center text-[12px] font-semibold">{title}</p>
                <p className="py-1 mt-2 text-center text-[12px] bg-color-3 text-color-1">{description}</p>
                <div className="absolute w-full flex flex-col items-center bottom-0">
                    <div className="w-[84%] flex flex-row items-center justify-between mb-[2px]">
                        <HiHeart className="text-[#D23C3C] text-[16px]" />
                        <div className="flex items-center justify-center">
                            <p className="me-1 text-[12px] font-extrabold text-color-1">{stars}</p>
                            <HiStar className="text-[#FFEC94] text-[16px]" />
                        </div>
                    </div>
                    <p className="text-[14px] mb-1 text-color-1 font-extrabold">
                        R${price}
                    </p>
                    <button className="w-[94%] bg-color-4 p-1 rounded-[2px] border border-solid border-[transparent]  hover:border-color-1 transition-all duration-[200ms]">
                        <p className="uppercase text-[12px] text-color-1 font-medium">
                            Comprar
                        </p>
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};

export default CardProduct;