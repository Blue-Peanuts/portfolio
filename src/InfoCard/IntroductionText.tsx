function IntroductionText() {
    return (
        <div className=' w-fit'>
            <div className=' text-xs sm:text-lg mb-2'>
                I am...
            </div>
            <div className='flex flex-col gap-2'>
                <div className=' justify-between flex items-baseline flex-nowrap 
                    gap-16
                    
                '>
                    <div className=' whitespace-nowrap
                        text-xl font-bold
                        sm:text-4xl md:font-bold
                    '>
                        NITANON RACAHAPRADIT
                    </div>
                    <div className=' text-xs sm:text-lg'>
                        aka...
                    </div>
                </div>
                <div className=' flex flex-row '>
                    <div className=' flex-grow h-1 bg-white mt-2 mr-2'/>
                    <div className=' text-sm font-bold
                        sm:text-3xl
                    '>
                        BLUE PEANUTS
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IntroductionText;