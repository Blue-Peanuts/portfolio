function WorkList() {
    return <div>
        <div className=' text-xs sm:text-lg mb-2'>
            I make...
        </div>
        <div className=' pt-4 flex flex-col gap-3'>
            <WorkButton text='Video Games' className='bg-red-500 ' />
            <WorkButton text='Apps and Tools' className='bg-green-500 ' />
            <WorkButton text='Music' className='bg-cyan-500 ' />
            <WorkButton text='Illustrations' className='bg-fuchsia-500 ' />
        </div>
    </div>
}

function WorkButton(props: { text: string, className: string }) {

    return <button className={` ${props.className} font-bold text-sm w-fit rounded-tl-full rounded-br-full`}>
        <div className=' ml-5 mr-36
                                pt-0.5 pb-1
                        text-sm 
                        sm:text-3xl'>
            &bull;
            <span className='pr-2'></span>
            {props.text}
        </div>
    </button>
}

export default WorkList;