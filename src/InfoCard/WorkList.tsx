import ScrollAnimation from "../Animations/ScrollAnimation";

function WorkList() {
    return <div>
        <ScrollAnimation initial='opacity-none' onIntersection='animate-blur-reveal' fit={true}>
            <div className=' text-xs sm:text-lg mb-2'>
                I make...
            </div>
        </ScrollAnimation>
        <div className=' pt-4 flex flex-col gap-3'>
            <ScrollAnimation initial='opacity-none' onIntersection='animate-blur-reveal-delay-1' fit={true}>
                <WorkButton text='Video Games' className='bg-red-500 ' />
            </ScrollAnimation>
            <ScrollAnimation initial='opacity-none' onIntersection='animate-blur-reveal-delay-2' fit={true}>
                <WorkButton text='Apps and Tools' className='bg-green-500 ' />
            </ScrollAnimation>
            <ScrollAnimation initial='opacity-none' onIntersection='animate-blur-reveal-delay-3' fit={true}>
                <WorkButton text='Music' className='bg-cyan-500 ' />
            </ScrollAnimation>
            <ScrollAnimation initial='opacity-none' onIntersection='animate-blur-reveal-delay-4' fit={true}>
                <WorkButton text='Illustrations' className='bg-fuchsia-500 ' />
            </ScrollAnimation>
        </div>
    </div>
}

function WorkButton(props: { text: string, className: string }) {

    return <button className={` ${props.className} font-bold text-sm w-fit rounded-tl-full rounded-br-full`}>
        <div className=' ml-5 sm:mr-36 mr-16
                                pt-0.5 pb-1
                        text-sm 
                        sm:text-3xl'>
            &bull;
            <span className='pr-2'></span>
            {props.text}
        </div>
    </button>
}

export default WorkList;