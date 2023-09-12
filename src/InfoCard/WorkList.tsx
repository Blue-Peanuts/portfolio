import ScrollAnimation from "../Animations/ScrollAnimation";

function WorkList() {
    return <div>
        <ScrollAnimation initialClass='opacity-none' animationClass='animate-blur-reveal-delay-4'>
            <div className=' text-xs sm:text-lg mb-2'>
                I make...
            </div>
        </ScrollAnimation>
        <div className=' pt-4 flex flex-col gap-3'>
            <ScrollAnimation initialClass='opacity-none' animationClass='animate-blur-reveal-delay-1'>
                <WorkButton text='Video Games' color='border-red-500 text-red-100 hover:bg-red-500' />
            </ScrollAnimation>
            <ScrollAnimation initialClass='opacity-none' animationClass='animate-blur-reveal-delay-2'>
                <WorkButton text='Apps and Tools' color='border-emerald-500 text-emerald-100 hover:bg-emerald-500' />
            </ScrollAnimation>
            <ScrollAnimation initialClass='opacity-none' animationClass='animate-blur-reveal-delay-3'>
                <WorkButton text='Music' color='border-indigo-500 text-indigo-100 hover:bg-indigo-500' />
            </ScrollAnimation>
            <ScrollAnimation initialClass='opacity-none' animationClass='animate-blur-reveal-delay-4' >
                <WorkButton text='Illustrations' color='border-fuchsia-500 text-fuchsia-100 hover:bg-fuchsia-500' />
            </ScrollAnimation>
        </div>
    </div>
}

function WorkButton(props: { text: string, color: string }) {

    return <button className={`${props.color} font-bold text-sm w-fit border-4 lg:border-8 
    hover:text-slate-950
     rounded-tl-[50px] rounded-br-[50px] rounded-tr-xl rounded-bl-xl 

     hover:rounded-tl-3xl hover:rounded-br-3xl hover:rounded-tr-xl hover:rounded-bl-xl transition-all duration-100 ease-in-out
     hover:font-extrabold hover:pr-20 pr-16 hover:animate-none animate-pulse
    `}>
        <div className={` ml-5 

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