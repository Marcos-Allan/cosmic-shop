import { HiHeart, HiStar } from "react-icons/hi";

export default function CardProductLoading() {
    return(
        <div className="
            w-[300px] h-[200px]
            sm:w-[370px] sm:h-[250px]
            md:w-[420px] md:h-[300px]
            lg:w-[470px] lg:h-[350px]
            bg-color-3 my-3 flex justify-start items-center p-1 pe-0 mx-2 relative">
                <div className={`
                w-[200px]
                sm:w-[250px]
                md:w-[300px]
                lg:w-[350px]
                h-[200px]
                sm:h-[250px]
                md:h-[300px]
                lg:h-[350px]
                z-3 border-[3px] border-solid border-color-3 hover:opacity-50 transition-all duration-300 cursor-pointer bg-[#d9d9d9] animate-pulse`}></div>

                {/* INFORMAÇÕES DO PRODUTO */}
                <div className={`
                    h-[180px] w-[100px]
                    sm:h-[230px] sm:w-[160px]
                    md:h-[280px] md:w-[210px]
                    lg:h-[330px] lg:w-[260px]
                    relative flex-1 bg-color-3 p-1 flex justify-start items-center flex-col
                `}>
                    
                    <p className="
                    bg-[#d9d9d9] w-full h-[16px] animate-pulse mb-2
                    "
                    ></p>

                    <p className="
                    bg-[#d9d9d9] w-full animate-pulse mb-2
                    h-[60px] 
                    sm:h-[90px] 
                    md:h-[100px] 
                    lg:h-[120px] 
                    text-[10px]
                    sm:text-[12px]
                    md:text-[14px]
                    lg:text-[16px]
                    "></p>

                    <div className="absolute w-full flex flex-col items-center bottom-0">
                        <div className="w-[84%] flex flex-row items-center justify-between mb-[2px]">
                            <HiHeart className="text-[#d9d9d9]
                            text-[18px]
                            sm:text-[20px]
                            md:text-[22px]
                            lg:text-[24px]
                            " />
                            <div className="flex items-center justify-center">
                                <HiStar className="
                                text-[#d9d9d9]
                                text-[18px]
                                sm:text-[20px]
                                md:text-[22px]
                                lg:text-[24px]
                                " />
                            </div>
                        </div>
                        <p className="
                        mb-2 bg-[#d9d9d9] w-[94%] animate-pulse
                        h-[12px]
                        sm:h-[14px]
                        md:h-[16px]
                        lg:h-[18px]
                        ">
                            
                        </p>
                        <div className="bg-[#d9d9d9] w-[94%] animate-pulse
                        h-[22px]
                        sm:h-[24px]
                        md:h-[26px]
                        lg:h-[28px]">
                        </div>
                    </div>
                </div>

            </div>
    )
}