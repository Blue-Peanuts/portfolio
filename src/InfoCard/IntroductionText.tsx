function IntroductionText() {
    return (
        <div className=' w-fit'>
            <div className=' text-xs'>
                I am...
            </div>
            <div className='flex flex-col'>
                <div className=' justify-between flex items-baseline flex-nowrap 
                    gap-4
                    
                '>
                    <div className=' whitespace-nowrap
                        text-xl font-bold
                        sm:text-2xl sm:font-bold
                        lg:text-4xl md:font-bold
                    '>
                        NITANON RACAHAPRADIT
                    </div>
                    <div className=' text-xs'>
                        aka...
                    </div>
                </div>
                <div className=' flex flex-row '>
                    <div className=' flex-grow h-1 bg-white mt-2 mr-2'/>
                    <div className=' text-sm font-bold
                        lg:text-xl
                    '>
                        BLUE PEANUTS
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IntroductionText;