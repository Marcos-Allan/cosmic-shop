export default function Container({children}:{children:any}) {
    return(
        <div className={`w-full flex justify-center items-center flex-wrap gap-8 px-[60px] pb-3`}>
            {children}
        </div>
    )
}