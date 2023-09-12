import ScrollAnimation from './ScrollAnimation/ScrollAnimation.tsx'
import './App.css'
import InfoCard from './InfoCard/InfoCard.tsx'

function App() {

    return (
        <>
            <div className=' pt-0 xl:pt-16 2xl:pt-24'></div>
            <div className=' text-white scale-75 sm:scale-100'>
                <InfoCard />
            </div>
            <div>
                <div className=' pt-[96rem]'></div>
            </div>
            <div>
                <ScrollAnimation initialClass='opacity-none' animationClass='stretch-reveal-0'>
                    <div className=' bg-red-100 w-full'>
                        <div className=' flex flex-row justify-normal items-start'>
                            <div className=' h-24 sm:h-36 
                        flex flex-col justify-start items-center 
                        lg:block w-screen lg:w-36 sm:-translate-y-[5.5rem] -translate-y-[3.5rem] 
                        lg:pl-16 p-0
                        '>
                                <div className=' bg-slate-950 aspect-square h-36 rounded-2xl flex items-center justify-center rotate-[15deg]'>
                                    <ScrollAnimation initialClass='opacity-none' animationClass='rotate-reveal-5' className='h-full w-full flex items-center justify-center '>
                                        <div className=' bg-red-500 aspect-square h-3/4 rounded-2xl -rotate-[5deg]'>
                                        </div>
                                    </ScrollAnimation>
                                </div>
                            </div>
                            <ScrollAnimation initialClass='opacity-none' animationClass='blur-reveal-4' className=' text-red-500 hidden lg:block -translate-y-[2.7rem] pl-20 font-extrabold text-3xl'>
                                VIDEO GAMES
                            </ScrollAnimation>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </>
    )
}

export default App
