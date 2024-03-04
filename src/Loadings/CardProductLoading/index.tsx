import { HiHeart, HiStar } from "react-icons/hi";

export default function CardProductLoading() {

    function renderStars(quantidade:number) {
        const estrelas = [];
      
        for (let i = 0; i < quantidade; i++) {
          estrelas.push(<HiStar key={i} className="text-color-1 animate-pulse
          text-[16px]" />);
        }
      
        return estrelas;
    }

    return(
        <div className="
            bg-color-3 max-w-[472px] mt-[6px] flex items-center p-[5px]
                w-[84%]
                ${index == 0 || index % 2 == 0 ? 'me-[6px]' : ''}
                h-[200px]
                relative">
                <div className={`
                w-[190px]
                h-[190px]
                z-3 border-[3px] border-solid border-color-3 hover:opacity-50 transition-all duration-300 cursor-pointer bg-[#d9d9d9] animate-pulse`}></div>

                {/* INFORMAÇÕES DO PRODUTO */}
                <div className={`
                    flex-grow-[1] flex flex-col items-center justify-between h-full pb-[28px] px-[5px] pt-[3px] relative
                `}>
                    
                    <h1 className={`text-center text-[11px] w-full bg-[#d9d9d9] animate-pulse mb-1 text-transparent`}>Nome do produto </h1>

                    <p className={`text-center text-[9px] text-color-1 mb-1 animate-pulse w-full text-transparent h-[70px] bg-[#d9d9d9]`}>Texto descritivo do produto</p>

                    <div className={`flex`}>
                        {renderStars(5)}
                    </div>

                    <HiHeart
                        className={`
                            transition-all duration-[350ms] cursor-pointer animate-pulse text-color-1
                            text-[14px]
                        `}
                    />

                    <h2 className={`text-center text-[14px] text-transparent w-full bg-[#d9d9d9] mb-1`}>R$ 999,99</h2>

                    <button className={`
                        absolute w-[calc(100%-12px)] h-[24px] bottom-[3px] flex justify-center items-center cursor-pointer
                        transition-all duration-[250ms]
                        bg-[#d9d9d9]
                        `}
                    >
                        <p className={`
                            text-center uppercase text-[11px]
                            transition-all duration-[250ms]
                            text-transparent
                        `}>add to cart</p>
                    </button>
                </div>

            </div>
    )
}