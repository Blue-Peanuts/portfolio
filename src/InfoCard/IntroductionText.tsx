import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import TextAnimation from "../TextAnimation";

function IntroductionText() {
    return (
        <div className=' w-fit'>

            <ScrollAnimation initialClass='opacity-none' animationClass='blur-reveal-2' >
                <div className=' mb-2 
                text-xs 
                sm:text-lg'>
                    <TextAnimation texts={['_', 'Hi_,', 'Hi, I_', 'Hi, I am_', 'Hi, I am._', 'Hi, I am.._',
                    'Hi, I am..._', 'Hi, I am..._', 'Hi, I am...', 'Hi, I am...', 'Hi, I am..._', 'Hi, I am..._']} secondsPerFrame={0.2} />
                </div>
            </ScrollAnimation>
            <div className='flex flex-col gap-2'>
                <div className=' justify-between flex items-baseline flex-nowrap gap-16 w-[36rem]'>
                    <ScrollAnimation initialClass='opacity-none' animationClass='blur-reveal-1' >
                        <div className=' whitespace-nowrap
                        text-xl font-bold
                        sm:text-4xl md:font-bold
                    '>

                            NITANON RACAHAPRADIT
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation initialClass='opacity-none' animationClass='blur-reveal-2' >
                        <div className='
                        text-xs
                        sm:text-lg
                        '>
                            a k a
                        </div>
                    </ScrollAnimation>
                </div>
                <div className=' flex flex-row '>
                    <div className=' flex-grow '>
                        <ScrollAnimation initialClass='opacity-none' animationClass='stretch-reveal-3'>
                            <div className='h-1 w-full bg-white mt-2 mr-2' />
                        </ScrollAnimation>
                    </div>
                    <ScrollAnimation initialClass='opacity-none' animationClass='blur-reveal-4' >
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