export default function Container({children}:{children:any}) {
    return(
        <div className={`w-full h-[calc(100%-190px)] flex justify-center items-start flex-wrap px-[10px] sm:px-[20px] pb-3 overflow-y-scroll scrollbar-w-2 scrollbar scrollbar-thumb-color-4 scrollbar-track-color-1`}>
            {children}
        </div>
    )
}