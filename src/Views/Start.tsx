import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Start: React.FC = () => {
    const [name, setName] = useState<string>('')
  
    return (
    <div className=' h-full min-h-screen w-full flex items-center justify-center bg-shenlong bg-cover bg-no-repeat bg-left'>
        <main className=' w-2/5 flex flex-col items-center'>
            <img className=' max-w-full' src="/images/Dragon-Ball-Logo.png" alt="" />
            <div>
                
                <h1 className="text-[3.5rem] pr-3  text-white font-title drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                    Memory Game
                </h1>
                
                <form className='flex flex-col gap-4 pr-3' onSubmit={() => localStorage.setItem("user-name", name)} action="/game">

                    <input 
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}  
                        className='w-full p-3 rounded-lg outline-none' 
                        placeholder='Insira seu nome'
                    />

                    
                    <button  
                        className=' bg-button-background w-full h-12 flex items-center justify-center rounded-lg hover:bg-text-button transition'>
                        <span className='font-bold text-2xl text-red-700'>Jogar</span> <img className=' max-h-full' src="/images/dragon-ball.png" alt="" 
                    />
                    </button>
                    
                
                </form>

            </div>
        </main>
    </div>
  )
}