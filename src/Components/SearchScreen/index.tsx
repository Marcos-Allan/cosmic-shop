import { useEffect, useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";

interface Searching{
    searching: boolean,
}

export default function SearchScreen(props: Searching) {

    const [isEmpty, setIsEmpty] = useState<boolean>(true)
    const [text, setText] = useState<string>('')

    useEffect(() => {
        if(text.trim().length > 0){
            setIsEmpty(false)
        }else{
            setIsEmpty(true)
        }
    },[text])

    return(
        <>
            <div className={`w-full h-screen opacity-95 z-[5] bg-color-1 absolute ${props.searching == true ? 'top-0' : 'top-[-100vh]'} left-0 transition-all flex flex-col items-center justify-start p-20`}>
                <HiOutlineXMark
                    className={`absolute top-0 right-0 m-3 text-color-3 text-[36px] hover:scale-[1.2] transition-all cursor-pointer`}
                /> 
                <form className={`w-full flex items-center justify-center`}>
                    <input
                        type='text' placeholder='pesquisar na cosmic shop'
                        className={`border border-solid border-color-2 w-[40%] p-3 rounded-[8px] rounded-se-none rounded-ee-none bg-color-1 outline-none focus:outline-none focus:rounded-[8px] focus:rounded-se-none focus:rounded-ee-none`}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <input
                        type='submit' value='pesquisar'
                        className={`border border-solid border-color-2 h-full w-[120px] text-[14px] rounded-[8px] rounded-ss-none rounded-es-none uppercase font-light transition-all border-l-0 outline-none focus:outline-none
                        ${isEmpty == false
                            ? 'bg-color-4 text-color-1 hover:bg-color-1 hover:text-color-4 focus:bg-color-1 focus:text-color-4 cursor-pointer'
                            : 'bg-color-3 text-color-1'}
                        `}
                            
                    />
                </form>
            </div>
        </>
    )
}