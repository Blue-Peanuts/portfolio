import { useState } from 'react';
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation';
import './WorkButton.scss'



function WorkButton(props: { text: string, color: string, oneIsHovered: boolean, hoverIncrementCallback: () => void, hoverDecrementCallback: () => void, 
    svg: string, animationBuffer: number, navRef?: React.RefObject<HTMLDivElement>}) {
    const [hovered, setHovered] = useState(false);


    return <ScrollAnimation initialClass='opacity-none' animationClass={`blur-reveal-${props.animationBuffer}`}>
        <button onClick={()=>{
            props.navRef?.current?.scrollIntoView({behavior: 'smooth', block: 'center'});
        }}  className={`${props.color} font-bold text-sm w-fit border-4 lg:border-8 
    
     rounded-tl-[50px] rounded-br-[50px] rounded-tr-xl rounded-bl-xl pr-4
    hover:rounded-tl-3xl hover:rounded-br-3xl hover:rounded-tr-xl hover:rounded-bl-xl hover:text-slate-950 hover:font-extrabold


     transition-all duration-100 ease-in-out
     ${props.oneIsHovered ? 'work-button-others-hovered' : 'work-button-idle'}
     work-button-hovered
    `}
            onMouseEnter={() => {
                setHovered(true);
                props.hoverIncrementCallback();
            }}
            onMouseLeave={() => {
                setHovered(false);
                props.hoverDecrementCallback();
            }}
        >
            <div className={` ml-5 pt-0.5 pb-1
                        text-sm 
                        sm:text-2xl
                        `}>
                <div className=' flex flex-row items-end justify-end w-full h-full'>
                    <div className=' mr-4'>
                    {props.text}
                    </div>
                    {hovered ? <img src={props.svg} className=' h-6 sm:h-11 -m-1 sm:-m-1 pr-2'></img> : <></>}
                </div>
            </div>
        </button>
    </ScrollAnimation>
}

export default WorkButton;