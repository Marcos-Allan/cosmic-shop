export default function Container({children}:{children:any}) {
    return(
        <div className={`w-full bg-color-1 flex items-start flex-wrap px-[10px] sm:px-[20px] pb-3 overflow-y-hidden justify-center`}>
            {children}
        </div>
    )
}