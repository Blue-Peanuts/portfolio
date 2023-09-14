
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

function GameCard(props: { name: string, img: string, lines: string[], animateOrder: number }) {
    return <div className='w-fit flex justify-center items-start'>
        <ScrollAnimation initialClass='opacity-none' animationClass={`blur-reveal-${props.animateOrder}`} className={`
        flex gap-8 justify-center 2xl:items-start items-center lg:pl-10 pb-5 
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
        </ScrollAnimation>
    </div>
}


export default GameCard;