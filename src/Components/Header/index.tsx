import { useState } from "react";
import { HiMiniBars3, HiMiniMagnifyingGlass } from "react-icons/hi2";
import Categories from "../Categories";
import SearchScreen from "../SearchScreen";
import Menu from "../Menu";

export default function Header(){

    const [searching, setSearching] = useState<boolean>(false)
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    function handleSearching(){
        setSearching(!searching)
    }
    
    function handleMenuOpen(){
        setMenuOpen(!menuOpen)
    }

    return(
        <div className={`sticky top-0 z-[3] flex flex-wrap items-center justify-between bg-color-4 w-full pt-5`}>
            <h1 className={`ms-[60px] md:ms-[200px] text-color-1 font-bold text-[22px]`}>Cosmic Shop</h1>
            
            <div className={`me-[60px] md:me-[200px] flex items-center justify-bewtween gap-6`}>

                <HiMiniMagnifyingGlass
                    className={`text-color-1 font-bold text-[22px] cursor-pointer hover:scale-[1.2] transition-all duration-[150ms]`} 
                    onClick={() => handleSearching()}
                    />

                <HiMiniBars3
                    className={`text-color-1 font-bold text-[22px] cursor-pointer hover:scale-[1.2] transition-all duration-[150ms]`}
                    onClick={() => handleMenuOpen()}
                    />
            </div>
            <Categories />
            <SearchScreen searching={searching} />
            <Menu open={menuOpen}/>
        </div>
    )
}