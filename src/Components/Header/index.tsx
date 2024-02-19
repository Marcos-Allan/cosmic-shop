import { HiMiniBars3 } from "react-icons/hi2";

export default function Header(){
    return(
        <div className={`flex items-center justify-between bg-color-4 w-full p-5 h-[70px] px-[60px]`}>
            <h1 className={`text-color-1 font-bold text-[22px]`}>Cosmic Shop</h1>
            <HiMiniBars3 className={`text-color-1 font-bold text-[22px] cursor-pointer hover:scale-[1.2] transition-all duration-[150ms]`} />
        </div>
    )
}