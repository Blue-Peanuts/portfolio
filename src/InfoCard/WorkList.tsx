import ScrollAnimation from "../Animations/ScrollAnimation";
import '../Animations/Animations.scss'

import { useState } from "react";

function WorkList() {
    const [hoverCount, setHoverCount] = useState(0);

    function hoverIncrementCallback() {
        setHoverCount(prevHoverCount => prevHoverCount + 1);
    }

    function hoverDecrementCallback() {
        setHoverCount(prevHoverCount => prevHoverCount - 1);
    }

    return <div>
        <ScrollAnimation initialClass='opacity-none' animationClass='blur-reveal-4'>
            <div className=' text-xs sm:text-lg mb-2'>
                I make...
            </div>
        </ScrollAnimation>
        <div className=' pt-4 flex flex-col gap-3'>
            <WorkButton text='Video Games' color='border-red-500 text-red-100 hover:bg-red-500'                 
                oneIsHovered={hoverCount > 0} 
                hoverIncrementCallback={hoverIncrementCallback}
                hoverDecrementCallback={hoverDecrementCallback}
                />
            <WorkButton text='Apps and Tools' color='border-emerald-500 text-emerald-100 hover:bg-emerald-500'  
                oneIsHovered={hoverCount > 0} 
                hoverIncrementCallback={hoverIncrementCallback}
                hoverDecrementCallback={hoverDecrementCallback}
                />
            <WorkButton text='Music' color='border-indigo-500 text-indigo-100 hover:bg-indigo-500'              
                oneIsHovered={hoverCount > 0} 
                hoverIncrementCallback={hoverIncrementCallback}
                hoverDecrementCallback={hoverDecrementCallback}
                />
            <WorkButton text='Illustrations' color='border-fuchsia-500 text-fuchsia-100 hover:bg-fuchsia-500'   
                oneIsHovered={hoverCount > 0} 
                hoverIncrementCallback={hoverIncrementCallback}
                hoverDecrementCallback={hoverDecrementCallback}
                />
        </div>
    </div>
}

function WorkButton(props: { text: string, color: string, oneIsHovered: boolean, hoverIncrementCallback: () => void, hoverDecrementCallback: () => void }) {

    return <ScrollAnimation initialClass='opacity-none' animationClass='blur-reveal-0'>
        <button className={`${props.color} font-bold text-sm w-fit border-4 lg:border-8 
    
     rounded-tl-[50px] rounded-br-[50px] rounded-tr-xl rounded-bl-xl pr-16 
    hover:rounded-tl-3xl hover:rounded-br-3xl hover:rounded-tr-xl hover:rounded-bl-xl hover:text-slate-950 hover:font-extrabold
     transition-all duration-100 ease-in-out
     ${props.oneIsHovered ? 'work-button-others-hovered': 'work-button-idle'}
     work-button-hovered
    `}
            onMouseEnter={props.hoverIncrementCallback}
            onMouseLeave={props.hoverDecrementCallback}
    >
            <div className={` ml-5 pt-0.5 pb-1
                        text-sm 
                        sm:text-2xl
                        `}>
                <span className='pr-4'></span>
                {props.text}
            </div>
        </button>
    </ScrollAnimation>
}

export default WorkList;