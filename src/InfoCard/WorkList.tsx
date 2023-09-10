function WorkList() {
    return <div>
        <div className=' text-xs'>
            I make...
        </div>
        <WorkButton text='Video Games' className='bg-red-500 '/>
        <WorkButton text='Apps and Tools' className='bg-green-500 '/>
        <WorkButton text='Music' className='bg-cyan-500 '/>
        <WorkButton text='Illustrations' className='bg-fuchsia-500 '/>
    </div>
}

function WorkButton(props: { text: string, className: string }) {

    return <div className={` ${props.className} font-bold text-sm w-fit rounded-tl-full rounded-br-full`}>
        <div className=' ml-5 mr-10'>
            &bull; 
            <span className='pr-2'></span>
            {props.text}
        </div>
    </div>
}

export default WorkList;