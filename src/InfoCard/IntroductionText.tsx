function IntroductionText() {
    return (
        <div className=' w-fit'>
            <div className=' text-xs'>
                I am...
            </div>
            <div className='flex flex-col'>
                <div className=' justify-between flex items-baseline flex-nowrap gap-8
                '>
                    <div className=' whitespace-nowrap
                        text-xl font-bold
                        sm:text-2xl sm:font-bold
                        md:text-2xl md:font-bold
                    '>
                        NITANON RACAHAPRADIT
                    </div>
                    <div className=' text-xs'>
                        aka...
                    </div>
                </div>
                <div className=' flex flex-row '>
                    <div className=' w-48 h-1 bg-white mt-2 mr-2'/>
                    <div className=' text-sm font-bold'>
                        BLUE PEANUTS
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IntroductionText;