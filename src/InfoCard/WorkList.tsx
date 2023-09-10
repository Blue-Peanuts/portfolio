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
                <WorkButton text='Video Games' color='red' />
            </ScrollAnimation>
            <ScrollAnimation initial='opacity-none' onIntersection='animate-blur-reveal-delay-2' fit={true}>
                <WorkButton text='Apps and Tools' color='emerald' />
            </ScrollAnimation>
            <ScrollAnimation initial='opacity-none' onIntersection='animate-blur-reveal-delay-3' fit={true}>
                <WorkButton text='Music' color='indigo' />
            </ScrollAnimation>
            <ScrollAnimation initial='opacity-none' onIntersection='animate-blur-reveal-delay-4' fit={true}>
                <WorkButton text='Illustrations' color='fuchsia' />
            </ScrollAnimation>
        </div>
    </div>
}

function WorkButton(props: { text: string, color: string}) {

    return <button className={` 
    border-${props.color}-500 text-${props.color}-100 font-bold text-sm w-fit rounded-tl-full rounded-br-full border-4 lg:border-8
    hover:bg-${props.color}-500`}>
        <div className={` ml-5 sm:mr-36 mr-16
                                pt-0.5 pb-1
                        text-sm 
                        sm:text-2xl

                        `}>
            <span className='pr-4'></span>
            {props.text}
        </div>
    </button>
}

export default WorkList;