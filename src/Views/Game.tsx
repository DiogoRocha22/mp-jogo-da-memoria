import React from 'react'
import FlipCard from '../components/FlipCard'

type Props = {}

export const Game = (props: Props) => {
    return (
        <div className='h-screen bg-kame-house w-full bg-cover flex justify-center'>
            <div className='flex flex-col items-center w-4/5 h-full '>
                <header className='w-full flex justify-between'>
                    <h1 className="text-[3.5rem] pr-3  text-white font-title drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                        {localStorage.getItem("user-name")}
                    </h1>
                    <h1 className="text-[3.5rem] pr-3  text-white font-title drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                        Time: <span className="text-[3.5rem] pr-3  text-white font-title drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">00:00</span>
                    </h1>
                </header>

                <main className='grid h-full grid-cols-2 gap-3 py-1 overflow-y-auto lg:px-10 lg:grid-cols-5'>
                    <FlipCard image='/public/images/card-Goku.png'/>
                    <FlipCard image='/public/images/card-Vegeta.png'/>
                    <FlipCard image='/public/images/card-Freeza.png'/>
                </main>
            </div>
            
        </div>
    )
}