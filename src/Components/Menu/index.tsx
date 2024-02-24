import { HiOutlineXMark } from "react-icons/hi2";

interface Menu {
    open: boolean,
}

export default function Menu(props: Menu) {
    return(
        <div className={`absolute top-0 left-0 h-screen transition-all ${props.open == true ? 'w-[500px]' : 'w-[0px]'} h-full bg-color-1 border-r border-solid border-color-3 z-[4]`}>
            <HiOutlineXMark
                className={`absolute top-0 right-0 m-3 text-color-3 text-[26px] hover:scale-[1.2] transition-all cursor-pointer`}
            />
        </div>
    )
}