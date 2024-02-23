import { HiMiniBars3 } from "react-icons/hi2";
import Categories from "../Categories";

export default function Header(){
    return(
        <div className={`sticky top-0 z-[3] flex flex-wrap items-center justify-between bg-color-4 w-full pt-5`}>
            <h1 className={`ms-[60px] md:ms-[200px] text-color-1 font-bold text-[22px]`}>Cosmic Shop</h1>
            
            <HiMiniBars3 className={`me-[60px] md:me-[200px] text-color-1 font-bold text-[22px] cursor-pointer hover:scale-[1.2] transition-all duration-[150ms]`} />

            <Categories />
        </div>
    )
}