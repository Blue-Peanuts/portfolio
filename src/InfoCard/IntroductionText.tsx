import ScrollAnimation from "../Animations/ScrollAnimation";

function IntroductionText() {
    return (
        <div className=' w-fit'>

            <ScrollAnimation initialClass='opacity-none' animationClass='blur-reveal-0' >
                <div className=' mb-2 
                text-xs 
                sm:text-lg'>
                    I am...
                </div>
            </ScrollAnimation>
            <div className='flex flex-col gap-2'>
                <div className=' justify-between flex items-baseline flex-nowrap gap-16'>
                    <ScrollAnimation initialClass='opacity-none' animationClass='blur-reveal-0' >
                        <div className=' whitespace-nowrap
                        text-xl font-bold
                        sm:text-4xl md:font-bold
                    '>
                            NITANON RACAHAPRADIT
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation initialClass='opacity-none' animationClass='blur-reveal-0' >
                        <div className='
                        text-xs
                        sm:text-lg
                        '>
                            aka...
                        </div>
                    </ScrollAnimation>
                </div>
                <div className=' flex flex-row '>
                    <div className=' flex-grow '>
                        <ScrollAnimation initialClass='opacity-none' animationClass='stretch-reveal-0'>
                            <div className='h-1 w-full bg-white mt-2 mr-2' />
                        </ScrollAnimation>
                    </div>
                    <ScrollAnimation initialClass='opacity-none' animationClass='blur-reveal-0' >
                        <div className='font-bold
                        text-sm 
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