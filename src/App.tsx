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
                <div className='h-fit  gap-10 justify-center items-start pt-10 pb-10 flex flex-row flex-wrap'>
                    <GameCard
                        name='Gold Gobblers'
                        img='https://img.itch.zone/aW1nLzEyODM2MzQ1LnBuZw==/180x143%23c/AZ1sD8.png'
                        animateOrder={0}
                        lines={[
                            'Real-time party-based parrying game.',
                            'Ranked #528 on The GMTK Jam 2023.',
                            'Worked on design, programming, music, sound effects, particle effects.']} />

                    <GameCard
                        name='Bibo'
                        img='https://img.itch.zone/aW1nLzk3OTA1MjIucG5n/315x250%23c/rGPfBG.png'
                        animateOrder={0}
                        lines={[
                            'Roguelike hack-and-slash with a robot companion.',
                            'Ranked #3rd in visuals and #10th in fun, (out of 996 entries), in Wowie Jam 4.0.',
                            'Worked on design, programming, music, sound effectts, particle effects.']} />
                    <GameCard
                        name='Bibo'
                        img='https://img.itch.zone/aW1nLzk3OTA1MjIucG5n/315x250%23c/rGPfBG.png'
                        animateOrder={0}
                        lines={[
                            'Roguelike hack-and-slash with a robot companion.',
                            'Ranked #3rd in visuals and #10th in fun, (out of 996 entries), in Wowie Jam 4.0.',
                            'Worked on design, programming, music, sound effectts, particle effects.']} />
                    <GameCard
                        name='Bibo'
                        img='https://img.itch.zone/aW1nLzk3OTA1MjIucG5n/315x250%23c/rGPfBG.png'
                        animateOrder={0}
                        lines={[
                            'Roguelike hack-and-slash with a robot companion.',
                            'Ranked #3rd in visuals and #10th in fun, (out of 996 entries), in Wowie Jam 4.0.',
                            'Worked on design, programming, music, sound effectts, particle effects.']} />
                    <GameCard
                        name='Bibo'
                        img='https://img.itch.zone/aW1nLzk3OTA1MjIucG5n/315x250%23c/rGPfBG.png'
                        animateOrder={0}
                        lines={[
                            'Roguelike hack-and-slash with a robot companion.',
                            'Ranked #3rd in visuals and #10th in fun, (out of 996 entries), in Wowie Jam 4.0.',
                            'Worked on design, programming, music, sound effectts, particle effects.']} />


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
    return <div className='w-fit flex justify-center items-start'>
        <ScrollAnimation initialClass='opacity-none' animationClass={`blur-reveal-${props.animateOrder}`} className={`
        flex gap-8 justify-center items-center lg:pl-10 pb-5 
         max-w-[90vw] flex-col 2xl:flex-row flax-wrap
    `}>
            <img src={props.img} className=' max-w-[50vw] w-64 rounded-xl' />
            <div className='w-64 ml-0 flex flex-col justify-between items-center sm:items-start'>
                <span className=' text-white self-stretch'>
                    <div className=' flex flex-row items-baseline justify-between'>

                        <p className=' text-md sm:text-xl font-bold pb-2'>
                            {props.name}
                        </p>
                        <div>
                            <button className='hover:bg-red-500 rounded-lg pl-2 pr-2 mt-2 font-bold border-red-500 hover:text-slate-950 text-red-500  sm:ml-0 hover:pl-4 hover:pr-4 transition-all'> Play</button>
                        </div>
                    </div>
                    <ul className=' text-xs sm:text-sm list-disc pl-5'>

                        {
                            props.lines.map((line, i) => {
                                return <li key={i}>
                                    {line}
                                </li>
                            })
                        }
                    </ul>
                </span>
            </div>
        </ScrollAnimation>                    </div>
}

export default App
