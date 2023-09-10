import ScrollAnimation from "../Animations/ScrollAnimation";

function IntroductionText() {
    return (
        <div className=' w-fit'>

            <ScrollAnimation initial='opacity-none' onIntersection='animate-blur-reveal' fit={true}>
                <div className=' text-xs sm:text-lg mb-2'>
                    I am...
                </div>
            </ScrollAnimation>
            <div className='flex flex-col gap-2'>
                <div className=' justify-between flex items-baseline flex-nowrap 
                    gap-16
                    
                '>
                    <ScrollAnimation initial='opacity-none' onIntersection='animate-blur-long-reveal' fit={true}>
                        <div className=' whitespace-nowrap
                        text-xl font-bold
                        sm:text-4xl md:font-bold
                    '>
                            NITANON RACAHAPRADIT
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation initial='opacity-none' onIntersection='animate-blur-reveal' fit={true}>
                        <div className=' text-xs sm:text-lg'>
                            aka...
                        </div>
                    </ScrollAnimation>
                </div>
                <div className=' flex flex-row '>
                    <div className=' flex-grow '>
                        <ScrollAnimation initial='opacity-none' onIntersection='animate-stretch-reveal'>
                            <div className='h-1 w-full bg-white mt-2 mr-2' />
                        </ScrollAnimation>
                    </div>
                    <ScrollAnimation initial='opacity-none' onIntersection='animate-blur-long-reveal' fit={true}>
                        <div className=' text-sm font-bold
                        sm:text-3xl
                    '>
                            BLUE PEANUTS
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </div >
    );
}

export default IntroductionText;