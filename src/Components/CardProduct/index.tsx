import React from 'react'
import { HiStar, HiHeart } from "react-icons/hi2";

const CardProduct: any = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
            default: () => (
                <div className="w-[340px] h-[208px] bg-color-3 mt-3 flex justify-start items-center p-1 pe-0">
                <img
                    src="https://imgnike-a.akamaihd.net/250x250/0269827T.jpg"
                    className={`w-[200px]`}
                /> 
                <div className="w-full h-full relative bg-color-3 p-1 flex justify-start items-center flex-col">
                    
                    <p className={`text-color-1 text-center text-[12px]`}>Tênis Air Jordan 1 Low SE Craft Masculino</p>
                    
                    <p className={`mt-2 text-center text-[12px] bg-color-3 text-color-1`}>Tênis da moda atual com estética casual para usar no dia a dia ou em eventos casuais</p>

                    <div className={`absolute w-full flex flex-col items-center bottom-0`}>
                        <div className={`w-[84%] flex flex-row items-center justify-between mb-[2px]`}>
                            <HiHeart
                                className={`text-[#D23C3C] text-[16px]`}
                            />
                            <div className={`flex items-center justify-center`}>
                                <p className={`me-1 text-[12px] font-extrabold text-color-1`}>5</p>
                                <HiStar
                                    className={`text-[#FFEC94] text-[16px]`}
                                />
                            </div>
                        </div>
                        
                        <p className={`text-[14px] mb-1 text-color-1 font-extrabold`}>R$1.230,00</p>

                        <button className={`w-[94%] bg-color-4 p-1 rounded-[2px]`}>
                            <p className={`uppercase text-[12px] text-color-1 font-medium`}>Comprar</p>
                        </button>
                    </div>
                </div>
            </div>
            ),
        });
      }, 10000);
    }) as Promise<{ default: React.FC }>;
  };

  export default CardProduct