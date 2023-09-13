import ScrollAnimation from './ScrollAnimation/ScrollAnimation.tsx'
import './App.css'
import InfoCard from './InfoCard/InfoCard.tsx'
import Background from './Background/Background.tsx'

function App() {

    return (
        <>
            <Background />
            <div className=' pt-0 xl:pt-16 2xl:pt-24'></div>
            <div className=' text-white scale-75 sm:scale-100'>
                <InfoCard />
            </div>
            <div>
                <div className=' pt-[96rem]'></div>
            </div>
            <div>
            <div className='flex justify-center items-center'>
                <div className=' max-w-[1500px] '>
                <div className='flex flex-row justify-center lg:justify-start items-start gap-6 pb-8'>
                    <ScrollAnimation initialClass='opacity-none' animationClass='blur-reveal-0'
                        className=' bg-red-500 aspect-square rounded-2xl 
                        lg:h-28 -rotate-[5deg]
                        h-14 
                        '>
                    </ScrollAnimation>
                    <ScrollAnimation initialClass='opacity-none' animationClass='blur-reveal-4' className=' text-red-500 font-extrabold text-2xl lg:text-3xl mt-6'>
                        VIDEO GAMES
                    </ScrollAnimation>
                </div>
                <div className=' flex justify-center'>
                    <div className=' border-t-slate-800 border-b-slate-800  w-full 
                     border-b-4  border-t-4 
                     
                     lg:-mt-16
                    
                    pt-12 lg:ml-40 lg:mr-36
                    ml-24 mr-24

                     min-w-[24rem]
                     
                     flex flex-row gap-4 flex-wrap justify-center items-center'>
                    <iframe frameBorder="0" src="https://itch.io/embed/2152852?dark=true" width="552" height="167"><a href="https://blue-peanuts.itch.io/goldgobblers">Gold Gobblers (Jam+) by Blue Peanuts, Xilurus</a></iframe>
                        <iframe frameBorder="0" src="https://itch.io/embed/2152852?dark=true" width="552" height="167"><a href="https://blue-peanuts.itch.io/goldgobblers">Gold Gobblers (Jam+) by Blue Peanuts, Xilurus</a></iframe>
                        <iframe frameBorder="0" src="https://itch.io/embed/2152852?dark=true" width="552" height="167"><a href="https://blue-peanuts.itch.io/goldgobblers">Gold Gobblers (Jam+) by Blue Peanuts, Xilurus</a></iframe>
                        <iframe frameBorder="0" src="https://itch.io/embed/2152852?dark=true" width="552" height="167"><a href="https://blue-peanuts.itch.io/goldgobblers">Gold Gobblers (Jam+) by Blue Peanuts, Xilurus</a></iframe>
                    </div>
                </div></div></div>
            </div>
        </>
    )
}

export default App
