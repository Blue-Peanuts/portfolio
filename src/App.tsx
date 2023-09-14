import Section from './Section.tsx'
import './App.css'
import InfoCard from './InfoCard/InfoCard.tsx'
import Background from './Background/Background.tsx'
import ScrollAnimation from './ScrollAnimation/ScrollAnimation.tsx'

function App() {

    return (
        <>
            <Background />
            <div className=' pt-0 xl:pt-16 2xl:pt-24'></div>
            <div className=' text-white scale-75 sm:scale-100'>
                <InfoCard />
            </div>
            <div className=' h-[110vh]'></div>
            <Section bgColor='bg-red-500' textColor='text-red-500' borderColor='border-red-500' name='VIDEO GAMES'>
                <div className='bg-white h-fit  gap-1 justify-center items-center pt-10 pb-10 flex flex-row flex-wrap'>
                    {
                        [...Array(10)].map((_, i) => {
                            return <div key={i} className='bg-black w-96 h-fit flex justify-center'>
                                <div className='bg-red-50 w-11/12 h-96'></div>
                            </div>
                        })
                    }
                </div>
                {/*
                <div className='
                        pt-12 pb-12
                        pl-0
                        sm:pl-[10vw]
                        xl:pl-0
                        flex flex-row flex-wrap justify-between'>
                    <GameCard name='Gold Gobblers' img='https://img.itch.zone/aW1nLzEyODM2MzQ1LnBuZw==/180x143%23c/AZ1sD8.png' animateOrder={0}
                        lines={['Real-time party-based parrying game.', 'Ranked #528 on The GMTK Jam 2023.', 'Worked on design, programming, music, sound effectts, particle effects.']} />
                    <GameCard name='Gold Gobblers' img='https://img.itch.zone/aW1nLzEyODM2MzQ1LnBuZw==/180x143%23c/AZ1sD8.png' animateOrder={1}
                        lines={['Real-time party-based parrying game.', 'The GMTK Jam 2023 submission.', 'Collaborated with an artist.']} />
                    <GameCard name='Gold Gobblers' img='https://img.itch.zone/aW1nLzEyODM2MzQ1LnBuZw==/180x143%23c/AZ1sD8.png' animateOrder={2}
                        lines={['Real-time party-based parrying game.', 'The GMTK Jam 2023 submission.', 'Collaborated with an artist.']} />
                </div>*/}
            </Section>
            <div className=' h-[110vh]'></div>
        </>
    )
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
        <div className=' ml-0 w-[80vw] sm:w-64 sm:ml-0 flex flex-col justify-between items-center sm:items-start'>
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
                    <button className=' hidden sm:block hover:bg-red-500 rounded-lg pl-2 pr-2 mt-2 font-bold border-4 border-red-500 hover:text-slate-950 text-red-500 ml-4 sm:ml-0 hover:pl-4 hover:pr-4 transition-all'> Play on Itch.io </button>
                </div>
            </span>
        </div>
    </ScrollAnimation>
}

export default App
