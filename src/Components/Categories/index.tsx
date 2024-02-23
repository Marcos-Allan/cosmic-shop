import { useState } from 'react'

export default function Categories() {

    const [category, setCategory] = useState<string>('tudo')

    function handleCategory(name:string){
        if(category == name){
            return
        }
        setCategory(name)
    }

    return(
        <div className={`mt-[20px] bg-color-1 w-full flex items-center justify-center py-2 gap-5 overflow-hidden h-[50px]`}>
            <p className={`uppercase ${category == 'tudo'
            ? 'text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-color-4'
            : 'text-[12px] sm:text-[16px] md:text-[16px] lg:text-[18px] hover:text-color-3'} font-medium cursor-pointer transition-all `}
            onClick={() => handleCategory('tudo')}>tudo</p>
            <p className={`uppercase ${category == 'camisas'
            ? 'text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-color-4'
            : 'text-[12px] sm:text-[16px] md:text-[16px] lg:text-[18px] hover:text-color-3'} font-medium cursor-pointer transition-all`}
            onClick={() => handleCategory('camisas')}>camisas</p>
            <p className={`uppercase ${category == 'tênis'
            ? 'text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-color-4'
            : 'text-[12px] sm:text-[16px] md:text-[16px] lg:text-[18px] hover:text-color-3'} font-medium cursor-pointer transition-all`}
            onClick={() => handleCategory('tênis')}>tênis</p>
            <p className={`uppercase ${category == 'calças'
            ? 'text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-color-4'
            : 'text-[12px] sm:text-[16px] md:text-[16px] lg:text-[18px] hover:text-color-3'} font-medium cursor-pointer transition-all`}
            onClick={() => handleCategory('calças')}>calças</p>
        </div>
    )
}