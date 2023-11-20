import React from 'react';
import ScrollAnimation from './ScrollAnimation/ScrollAnimation';
import './ScrollAnimation/ScrollAnimation.scss'

function Section(props: { children: React.ReactNode, name: string, bgColor: string, textColor: string, borderColor: string, svg: string}) {
    return <div>
        <div className='flex justify-center items-center'>
            <div className=' max-w-[1800px] w-screen'>
                <div className='flex flex-row justify-center lg:justify-start items-start gap-6 pb-8 lg:pl-10'>
                    <ScrollAnimation initialClass='opacity-none' animationClass='blur-reveal-0'
                        className={` ${props.bgColor} aspect-square rounded-2xl 
                lg:h-28 -rotate-[5deg]
                h-14 
                `}>
                    <img src={props.svg} className=' h-full w-full p-2'></img>
                    </ScrollAnimation>
                    <ScrollAnimation initialClass='opacity-none' animationClass='blur-reveal-4' className={`${props.textColor} font-extrabold text-2xl lg:text-3xl mt-3 lg:mt-6`}>
                        {props.name}
                    </ScrollAnimation>
                </div>
                <div className=' flex justify-center w-full items-center'>
                    <div className=' border-t-slate-800 border-b-slate-800
                        border-b-4  border-t-4 w-full
                        
                        lg:-mt-16 lg:ml-48 lg:mr-36
                        ml-12 mr-12
                        

                       rounded-xl

                       '>
                            {props.children}
                    </div>
                </div>
            </div>
        </div>
    </div>
}



export default Section;