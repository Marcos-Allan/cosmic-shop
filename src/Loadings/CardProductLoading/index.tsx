import { HiHeart, HiStar } from "react-icons/hi";

export default function CardProductLoading() {
    return(
        <div className="w-[340px] h-[208px] bg-color-3 mt-3 flex justify-start items-center p-1 pe-0">
            <div className={`min-w-[200px] h-[200px] bg-[#d9d9d9] animate-pulse`}></div>


            <div className={`w-full h-[200px] flex flex-col justify-start items-center relative animate-pulse`}>
            
                <div className={`w-[90%] h-[36px] bg-[#d9d9d9] mb-2 animate-pulse`}></div>
                <div className={`w-[90%] h-[84px] bg-[#d9d9d9] mb-2 animate-pulse`}></div>
                
                <div className={`w-[90%] flex flex-col justify-center items-center absolute bottom-0`}>
                    <div className={`flex flex-row justify-between items-center w-[100%] h-[20px] mb-2`}>
                        <HiHeart
                            className={`text-[#d9d9d9] text-[16px] animate-pulse`}
                        />
                        <HiStar
                            className={`text-[#d9d9d9] text-[16px] animate-pulse`}
                        />
                    </div>
                    <div className={`bg-[#d9d9d9] w-[100%] h-[14px] mb-1`}>

                    </div>
                    <div className={`bg-[#d9d9d9] w-[100%] h-[20px]`}>

                    </div>
                </div>

            </div>
        </div>
    )
}