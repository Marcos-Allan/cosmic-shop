import { useState } from 'react'

export default function Reminders() {
    
    const [isHover, setIsHover] = useState<number>(0)

    return(
        <div className="w-full flex justify-center">
            <div className={`flex w-full max-w-[950px] h-[400px] flex-row gap-[6px]`}>
                <div className={`flex flex-col gap-[6px] w-[50%] h-full`}>
                    <div
                        className={`h-full bg-[#3dff77] relative cursor-pointer overflow-hidden`}
                        onMouseEnter={() => setIsHover(1)}
                        onMouseLeave={() => setIsHover(0)}
                    >
                        <div
                            className={`absolute inset-0 bg-cover bg-center filter transition-all duration-300 ${isHover == 1 ? 'scale-150 brightness-[1]' : 'scale-100 brightness-[0.6]'} `}
                            style={{ backgroundImage: 'url("https://i.pinimg.com/736x/e2/84/71/e2847169762b86ec0a028ce60a944199.jpg")' }}
                        ></div>

                        <div className="absolute inset-0 flex flex-col items-center justify-start p-4">
                        <h1 className={`text-color-1 text-center font-bold text-[24px] p-2`}>Promoções De Primavera</h1>

                            <p className={`text-color-1 text-center font-normal mt-2 text-[18px]`}>Faça Suas Compras de Primavera Adiantada e Ganhe Descontos Incriveis </p>
                        </div>
                    </div>

                    <div
                        className={`h-full bg-[#ff5a3d] relative cursor-pointer overflow-hidden`}
                        onMouseEnter={() => setIsHover(2)}
                        onMouseLeave={() => setIsHover(0)}
                    >

                    <div
                        className={`absolute inset-0 bg-cover bg-center filter transition-all duration-300 ${isHover == 2 ? 'scale-150 brightness-[1]' : 'scale-100 brightness-[0.6]'} `}
                        style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSFDU9Fp2uy9Cna0MB9sxoqYAoS8gBE-fwQQ&usqp=CAU")' }}
                    ></div>

                    <div className="absolute inset-0 flex flex-col items-center justify-start p-4">
                        <h1 className={`text-color-1 text-center font-bold text-[24px]`}>Promoções De Inverno</h1>

                        <p className={`text-color-1 text-center font-normal mt-2 text-[18px]`}>Compre peças de invernos nesta estação e ganhe 8% de desconto em cada peça </p>
                        </div>
                    </div>
                </div>

                <div
                    className={`w-[50%] h-full bg-[#3d61ff] relative cursor-pointer overflow-hidden`}
                    onMouseEnter={() => setIsHover(3)}
                    onMouseLeave={() => setIsHover(0)}
                >
                    <div
                    className={`absolute inset-0 bg-cover bg-center filter transition-all duration-300 ${isHover == 3 ? 'scale-150 brightness-[1]' : 'scale-100 brightness-[0.6]'} `}
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D")' }}
                    ></div>
                        
                        <div className="absolute inset-0 flex flex-col items-center justify-start p-4">
                        <h1 className="text-color-1 text-center font-bold text-[24px]">Promoções Por Estações</h1>

                        <ul className={`list-disc list-inside`}>
                            <li className={`text-color-1 text-center font-normal mt-2 text-[14px]`}>
                                Verão: Roupas de Tirar o Folego 
                            </li>
                            <li className={`text-color-1 text-center font-normal mt-2 text-[14px]`}>
                                Outono: Preços Iguais as Folhas
                            </li>
                            <li className={`text-color-1 text-center font-normal mt-2 text-[14px]`}>
                                Inverno: Temperaturas e Preços Caindo
                            </li>
                            <li className={`text-color-1 text-center font-normal mt-2 text-[14px]`}>
                                Primavera: Deixe Sua Moda Florescer
                            </li>
                        </ul>
                        </div>
                </div>
            
            </div>
        </div>
    )
}