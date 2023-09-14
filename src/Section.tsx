import React from 'react';
import ScrollAnimation from './ScrollAnimation/ScrollAnimation';
import './ScrollAnimation/ScrollAnimation.scss'

function Section() {
    return <div>
        <div className='flex justify-center items-center'>
            <div className=' max-w-[1500px] w-screen'>
                <div className='flex flex-row justify-center lg:justify-start items-start gap-6 pb-8 lg:pl-10'>
                    <ScrollAnimation initialClass='opacity-none' animationClass='blur-reveal-0'
                        className=' bg-red-500 aspect-square rounded-2xl 
                lg:h-28 -rotate-[5deg]
                h-14 
                '>
                    </ScrollAnimation>
                    <ScrollAnimation initialClass='opacity-none' animationClass='blur-reveal-4' className=' text-red-500 font-extrabold text-2xl lg:text-3xl mt-3 lg:mt-6'>
                        VIDEO GAMES
                    </ScrollAnimation>
                </div>
                <div className=' flex justify-center w-full items-center'>
                    <div className=' border-t-slate-800 border-b-slate-800
                        border-b-4  border-t-4 
                        
                        lg:-mt-16 

                        lg:ml-48 lg:mr-36
                        ml-12 mr-12
                        
                        pt-12 pb-12
                        flex flex-row flex-wrap justify-start
                        pl-0
                        sm:pl-[10vw]
                        xl:pl-0

                       rounded-xl

                        
                        '>

                        <GameCard name='Gold Gobblers' img='https://img.itch.zone/aW1nLzEyODM2MzQ1LnBuZw==/180x143%23c/AZ1sD8.png' animateOrder={0}
                            lines={['Real-time party-based parrying game.', 'Ranked #528 on The GMTK Jam 2023.', 'Worked on design, programming, music, sound effectts, particle effects.']} />
                        <GameCard name='Gold Gobblers' img='https://img.itch.zone/aW1nLzEyODM2MzQ1LnBuZw==/180x143%23c/AZ1sD8.png' animateOrder={1}
                            lines={['Real-time party-based parrying game.', 'The GMTK Jam 2023 submission.', 'Collaborated with an artist.']} />
                        <GameCard name='Gold Gobblers' img='https://img.itch.zone/aW1nLzEyODM2MzQ1LnBuZw==/180x143%23c/AZ1sD8.png' animateOrder={1}
                            lines={['Real-time party-based parrying game.', 'The GMTK Jam 2023 submission.', 'Collaborated with an artist.']} />
                    </div>
                </div>
            </div>
        </div>
    </div>
}


function GameCard(props: { name: string, img: string, lines: string[], animateOrder: number }) {
    return <ScrollAnimation initialClass='opacity-none' animationClass={`blur-reveal-${props.animateOrder}`} className={`
        flex flex-col sm:flex-row gap-8 justify-center items-center w-fit lg:pl-10 pb-5 
        
    `}>
        <div className='flex flex-col justify-center items-center'>
            <img src={props.img} className=' max-h-48 rounded-xl' />

            <div className='w-full'>
                <button className='w-full block sm:hidden hover:bg-red-500 rounded-lg mt-2 font-bold border-4 border-red-500 hover:text-slate-950 text-red-500'> Play on Itch.io </button>
            </div>
        </div>
        <div className=' ml-0 w-[80vw] sm:w-64 sm:ml-6 flex flex-col justify-between items-center sm:items-start'>
            <span className=' text-white self-stretch'>
                <p className=' text-xl font-bold pb-2'>
                    {props.name}
                </p>
                <ul className=' text-sm list-disc pl-5'>

                    {
                        props.lines.map((line, i) => {
                            return <li key={i}>
                                {line}
                            </li>
                        })
                    }
                </ul>
                <div>
                    <button className=' hidden sm:block hover:bg-red-500 rounded-lg pl-2 pr-2 mt-2 font-bold border-4 border-red-500 hover:text-slate-950 text-red-500 ml-4 sm:ml-0'> Play on Itch.io </button>
                </div>
            </span>
        </div>
    </ScrollAnimation>
}

export default Section;