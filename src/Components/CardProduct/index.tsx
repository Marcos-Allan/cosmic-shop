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
          estrelas.push(<HiStar key={i} className="text-[#fcff65]
          text-[12px]" />);
        }
      
        return estrelas;
    }

    const [favorite, setFavorite] = useState<boolean>(false)
    const [hover, setHover] = useState<boolean>(false)

    return (
        <>
            <div className={`
                bg-color-3 max-w-[472px] mt-[6px] flex items-center p-[5px]
                w-[84%]
                ${index == 0 || index % 2 == 0 ? 'me-[6px]' : ''}
                h-[200px]
                relative
                `}>
                
                <img src={img} className={`w-[190px] hover:opacity-[0.6] transition-all duration-[250ms] cursor-pointer`} />

                <div className={`flex-grow-[1] flex flex-col items-center justify-between h-full pb-[28px] px-[5px] pt-[3px] relative`}>
                    <h1 className={`text-center text-[11px] text-color-1 mb-1 hover:underline cursor-pointer`}>{title}</h1>

                    <p className={`text-center text-[9px] text-color-1 mb-1 hover:underline cursor-pointer`}>{description}</p>

                    <div className={`flex`}>
                        {renderStars(Number(stars))}
                    </div>

                    <HiHeart
                        onClick={() => handleFavorite()}
                        className={`
                            ${favorite == true ? 'text-[#ff3a3a] scale-[1.5] rotate-[360deg]' : 'text-color-1 scale-[1] rotate-[0deg]'}
                            transition-all duration-[350ms] cursor-pointer
                            text-[14px]
                        `}
                    />

                    <h2 className={`text-center text-[14px] text-color-1`}>R$ {price}</h2>

                    <button className={`
                        absolute w-[calc(100%-12px)] h-[24px] bottom-[3px] flex justify-center items-center cursor-pointer
                        transition-all duration-[250ms]
                        ${hover == true ? 'bg-color-1' : 'bg-color-4'}
                        `}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    >
                        <p className={`
                            text-center uppercase text-[11px]
                            transition-all duration-[250ms] font-medium
                            ${hover == true ? 'text-color-4' : 'text-color-1'}
                        `}>add to cart</p>
                    </button>
                </div>
            </div>

            {index == 3 && (<Reminders />)}
            
        </>
    );
};