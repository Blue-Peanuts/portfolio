import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import TextAnimation from "../TextAnimation";

function IntroductionText() {
    return (
        <div className=' w-fit'>

            <ScrollAnimation initialClass='opacity-none' animationClass='blur-reveal-2' >
                <div className=' mb-2 
                text-xs 
                sm:text-lg flex flex-row'>
                    <p className=' text-slate-500 w-24'>
                        <TextAnimation texts={['_', 'Hi_,', 'Hi, I_', 'Hi, I am_', 'Hi, I am._', 'Hi, I am.._',
                            'Hi, I am..._', 'Hi, I am..._', 'Hi, I am...', 'Hi, I am...', 'Hi, I am..._', 'Hi, I am..._',
                            'Hi, I am...', 'Hi, I am...',]} secondsPerFrame={0.2} />
                    </p>
                    <div className=' flex-grow '>
                        <ScrollAnimation initialClass='opacity-none' animationClass='stretch-reveal-3' className=' h-full flex items-center '>
                            <div className='h-[0.3rem] w-full bg-slate-800 rounded-full mr-4' />
                        </ScrollAnimation>
                    </div>
                </div>
            </ScrollAnimation>
            <div className='flex flex-col gap-2'>
                <div className=' justify-between flex items-baseline flex-nowrap gap-16 w-fit'>
                    <ScrollAnimation initialClass='opacity-none' animationClass='blur-reveal-1' >
                        <div className=' whitespace-nowrap
                        text-xl font-bold
                        sm:text-4xl md:font-bold
                    '>

                            NITANON RACAHAPRADIT
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation initialClass='opacity-none' animationClass='blur-reveal-2' className='  w-12'>
                        <div className='
                        text-xs
                        sm:text-lg
                        '>
                            <p className=' text-slate-500 '>
                                <TextAnimation texts={['_', 'a_,', 'ak_', 'aka_', 'aka._', 'aka.._',
                                    'aka..._', 'aka..._', 'aka...', 'aka...']} secondsPerFrame={0.2} />
                            </p>
                        </div>
                    </ScrollAnimation>
                </div>
                <div className=' flex flex-row  '>
                    <div className=' flex-grow '>
                        <ScrollAnimation initialClass='opacity-none' animationClass='stretch-reveal-3' className=' h-full flex items-center '>
                            <div className='h-[0.3rem] w-full bg-slate-800 rounded-full mr-4' />
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