import { useState } from 'react'
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

export default function CardProduct(
    {
        index,
        img,
        title,
        description,
        stars,
        price
    }:CardProductProps
){
    
    function handleFavorite(){
        setFavorite(!favorite)
    }
    
    function renderStars(quantidade:number) {
        const estrelas = [];
      
        for (let i = 0; i < quantidade; i++) {
          estrelas.push(<HiStar key={i} className="text-[#FFEC94] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]" />);
        }
      
        return estrelas;
    }

    const [favorite, setFavorite] = useState<boolean>(false)

    return (
        <>
            <div key={index} className="
            w-[300px] h-[200px]
            sm:w-[370px] sm:h-[250px]
            md:w-[420px] md:h-[300px]
            lg:w-[470px] lg:h-[350px]
            my-3 flex justify-start items-center p-1 pe-0 mx-2 relative
            
            ">
                <img src={img} className={`
                w-[200px]
                sm:w-[250px]
                md:w-[300px]
                lg:w-[350px]
                z-3 border-[2px] border-solid border-color-3 hover:opacity-50 transition-all duration-300 cursor-pointer`} alt={title} />

                {/* INFORMAÇÕES DO PRODUTO */}
                <div className={`
                    h-[200px] w-[100px]
                    sm:h-[250px] sm:w-[160px]
                    md:h-[300px] md:w-[210px]
                    lg:h-[350px] lg:w-[260px]
                    relative flex-1 bg-color-3 p-1 flex justify-start items-center flex-col
                `}>
                    
                    <p className="
                    text-color-1 text-center font-bold
                    text-[10px]
                    sm:text-[12px]
                    md:text-[14px]
                    lg:text-[16px]
                    "
                    >{title}</p>

                    <p className="
                    py-1 mt-1 text-center bg-color-3 text-color-1 overflow-y-auto scrollbar-thin scrollbar-thumb-color-1 scrollbar-track-color-3
                    h-[60px] 
                    sm:h-[90px] 
                    md:h-[100px] 
                    lg:h-[120px] 
                    text-[10px]
                    sm:text-[12px]
                    md:text-[14px]
                    lg:text-[16px]
                    ">{description}</p>

                    <div className="absolute w-full flex flex-col items-center bottom-[3px]">
                        <div
                            // ref={favoriteIcon}
                        className="w-[84%] flex flex-col items-center justify-between mb-[2px]">
                            <HiHeart
                            className={`
                            ${favorite == true
                                ? 'text-[#D23C3C] scale-[1] rotate-[360deg]'
                                : 'text-[#d9d9d9] scale-[1] rotate-[0deg]'
                            }
                            text-[14px]
                            sm:text-[16px]
                            md:text-[18px]
                            lg:text-[20px]
                            mb-2
                            transition-all
                            cursor-pointer
                            hover:scale-[1.5] duration-[300ms]
                            `}
                            onClick={() => handleFavorite()}
                        />
                            <div className="flex items-center justify-center mb-2">
                               {renderStars(Math.floor(Number(stars)))}
                            </div>

                        </div>
                        <p className="
                        mb-1 text-color-1 font-extrabold
                        text-[12px]
                        sm:text-[14px]
                        md:text-[16px]
                        lg:text-[18px]
                        ">
                            R${price}
                        </p>
                        <button className="w-[94%] bg-color-4 p-1 rounded-[2px] text-color-1 hover:text-color-4 hover:bg-color-1  transition-all duration-[400ms]">
                            <p className="
                            uppercase font-medium
                            text-[12px]
                            sm:text-[14px]
                            md:text-[16px]
                            lg:text-[18px]
                            ">
                                Comprar
                            </p>
                        </button>
                    </div>
                </div>

            </div>

            {index == 3 && (<Reminders />)}
            
        </>
    );
};